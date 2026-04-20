import React, {useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const OTPInput = ({length = 6, value = '', onChange, hasError = false}) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (text, index) => {
    // Only allow digits
    const digit = text.replace(/[^0-9]/g, '');
    if (digit.length > 1) {
      return;
    }

    const otpArray = value.split('');
    otpArray[index] = digit;
    const newOtp = otpArray.join('').slice(0, length);
    onChange(newOtp);

    // Auto focus next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      const otpArray = value.split('');
      otpArray[index - 1] = '';
      onChange(otpArray.join(''));
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({length}).map((_, index) => (
        <TextInput
          key={index}
          ref={ref => {
            inputRefs.current[index] = ref;
          }}
          style={[
            styles.input,
            value[index] ? styles.inputFilled : null,
            hasError ? styles.inputError : null,
          ]}
          value={value[index] || ''}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          selectTextOnFocus
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.spacing.md,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    borderRadius: Metrics.borderRadius.small,
    textAlign: 'center',
    fontSize: Metrics.fontSize.title,
    fontWeight: '600',
    color: Colors.text,
    backgroundColor: Colors.white,
  },
  inputFilled: {
    borderColor: Colors.primaryDark,
  },
  inputError: {
    borderColor: '#E53935',
  },
});

export default OTPInput;
