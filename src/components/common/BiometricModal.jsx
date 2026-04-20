import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Colors, Metrics} from '../../theme';
import MaterialIcon from './MaterialIcon';

const BiometricModal = ({visible = false, onEnable, onSkip}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onSkip}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              {/* Title */}
              <Text style={styles.title}>Secure your account!</Text>

              {/* Lock Icon */}
              <View style={styles.iconContainer}>
                <MaterialIcon name="lock" size={40} color={Colors.primary} />
              </View>

              {/* Description */}
              <Text style={styles.description}>
                Enable screen lock to{'\n'}secure your account now
              </Text>

              {/* Enable Button */}
              <TouchableOpacity
                style={styles.enableButton}
                onPress={onEnable}
                activeOpacity={0.8}>
                <Text style={styles.enableButtonText}>Enable</Text>
              </TouchableOpacity>

              {/* Skip */}
              <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip for now</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.spacing.xl,
  },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.large,
    paddingVertical: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
    textAlign: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.spacing.md,
  },
  lockIcon: {
    fontSize: 28,
  },
  description: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: Metrics.spacing.lg,
  },
  enableButton: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    width: '80%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.spacing.sm,
  },
  enableButtonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
  },
  skipButton: {
    paddingVertical: Metrics.spacing.sm,
  },
  skipText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
});

export default BiometricModal;
