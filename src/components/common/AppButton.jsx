import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors, Metrics} from '../../theme';

const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    styles[`textSize_${size}`],
    disabled && styles.textDisabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? Colors.primaryDark : Colors.white}
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.borderRadius.medium,
  },
  primary: {
    backgroundColor: Colors.primaryDark,
  },
  secondary: {
    backgroundColor: Colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primaryDark,
  },
  size_small: {
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
    minWidth: 100,
  },
  size_medium: {
    paddingVertical: Metrics.spacing.md - 2,
    paddingHorizontal: Metrics.spacing.lg,
    minWidth: 150,
  },
  size_large: {
    paddingVertical: Metrics.spacing.md,
    paddingHorizontal: Metrics.spacing.xl,
    width: '100%',
    height: 56,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  text_primary: {
    color: Colors.white,
  },
  text_secondary: {
    color: Colors.white,
  },
  text_outline: {
    color: Colors.primaryDark,
  },
  textSize_small: {
    fontSize: Metrics.fontSize.small,
  },
  textSize_medium: {
    fontSize: Metrics.fontSize.medium,
  },
  textSize_large: {
    fontSize: Metrics.fontSize.body,
  },
  textDisabled: {
    opacity: 0.7,
  },
});

export default AppButton;
