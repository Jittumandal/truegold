import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Colors, Metrics} from '../../theme';
import {AuthHeader} from '../../components/auth';
import {OTPInput} from '../../components/auth';
import {AppButton} from '../../components/common';

const HARDCODED_OTP = '123456';
const RESEND_TIMER_SECONDS = 10;

const OTPScreen = ({navigation, route}) => {
  const phoneNumber = route.params?.phoneNumber ?? '8744090761';
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(RESEND_TIMER_SECONDS);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleResend = () => {
    setOtp('');
    setError('');
    setTimer(RESEND_TIMER_SECONDS);
    setCanResend(false);
  };

  const handleSubmit = () => {
    setError('');

    if (otp.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }

    if (otp !== HARDCODED_OTP) {
      setError('Incorrect OTP. Please try again');
      return;
    }

    // OTP verified successfully
    navigation.navigate('Questions');
  };

  const handleOTPChange = useCallback(newOtp => {
    setOtp(newOtp);
    if (newOtp.length < 6) {
      setError('');
    }
  }, []);

  const maskedPhone = phoneNumber
    ? `+91 ${phoneNumber}`
    : '+91 XXXXXXXXXX';

  const isOTPComplete = otp.length === 6;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}>
        {/* Header with Logo */}
        <AuthHeader />

        {/* Form Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Enter OTP</Text>
          <Text style={styles.cardSubtitle}>
            Verification code send to{' '}
            <Text style={styles.phoneHighlight}>{maskedPhone}</Text>
          </Text>

          {/* Error Message */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* OTP Input */}
          <OTPInput
            length={6}
            value={otp}
            onChange={handleOTPChange}
            hasError={!!error}
          />

          {/* Resend Timer / Button */}
          <View style={styles.resendContainer}>
            {canResend ? (
              <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendLink}>Resend OTP</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.resendTimer}>
                Resend in{' '}
                <Text style={styles.timerHighlight}>
                  {formatTime(timer)}
                </Text>
              </Text>
            )}
          </View>

          {/* Submit Button */}
          <View style={styles.buttonContainer}>
            <AppButton
              title="Submit"
              onPress={handleSubmit}
              variant={isOTPComplete ? 'primary' : 'outline'}
              size="large"
              disabled={!isOTPComplete}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrics.borderRadius.large,
    borderTopRightRadius: Metrics.borderRadius.large,
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.xl,
    marginTop: Metrics.spacing.md,
  },
  cardTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: Metrics.spacing.xs,
  },
  cardSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
  },
  phoneHighlight: {
    fontWeight: '700',
    color: Colors.text,
  },
  errorText: {
    fontSize: Metrics.fontSize.small,
    color: '#E53935',
    marginTop: Metrics.spacing.md,
  },
  resendContainer: {
    alignItems: 'flex-start',
    marginBottom: Metrics.spacing.lg,
  },
  resendTimer: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  timerHighlight: {
    color: Colors.primary,
    fontWeight: '600',
  },
  resendLink: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: Metrics.spacing.md,
  },
});

export default OTPScreen;
