import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AuthHeader } from "../../components/auth";
import { AppButton } from "../../components/common";
import { Colors, Metrics } from "../../theme";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const validatePhone = () => {
    setError("");
    const cleaned = phoneNumber.replace(/\s/g, "");

    if (!cleaned) {
      setError("Please enter your mobile number");
      return false;
    }
    if (!/^\d{10}$/.test(cleaned)) {
      setError("Please enter a valid 10-digit mobile number");
      return false;
    }
    return true;
  };

  const handleGetOTP = () => {
    if (validatePhone()) {
      const cleaned = phoneNumber.replace(/\s/g, "");
      navigation.navigate("OTP", { phoneNumber: cleaned });
    }
  };

  const handlePhoneChange = (text) => {
    // Only allow digits and spaces
    const cleaned = text.replace(/[^0-9\s]/g, "");
    setPhoneNumber(cleaned);
    if (error) {
      setError("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        {/* Header with Logo */}
        <AuthHeader />

        {/* Form Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Let make it official</Text>
          <Text style={styles.cardSubtitle}>
            Enter your mobile number to continue
          </Text>
          {/* Phone Input */}
          <View
            style={[
              styles.phoneContainer,
              error ? styles.phoneContainerError : null,
            ]}
          >
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.phoneInput}
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              placeholder="Enter mobile number"
              placeholderTextColor={Colors.dotInactive}
              keyboardType="phone-pad"
              maxLength={12}
            />
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {/* Spacer to push content down */}
          <View style={styles.spacer} />
          {/* Get OTP Button */}
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 60,
              left: Metrics.spacing.lg,
              right: Metrics.spacing.lg,
              display: "flex",
            }}
          >
            {" "}
            <AppButton
              title="Get OTP"
              onPress={handleGetOTP}
              size="large"
              backgroundColor={Colors.primaryDark}
            />
          </View>
          {/* Terms */}
          <Text style={styles.termsText}>
            By continuing you agree to our{" "}
            <Text style={styles.termsLink}>Terms & conditions</Text>
          </Text>
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
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.xs,
  },
  cardSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.lg,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    borderRadius: Metrics.borderRadius.small,
    paddingHorizontal: Metrics.spacing.md,
    height: 52,
    backgroundColor: Colors.white,
  },
  phoneContainerError: {
    borderColor: "#E53935",
  },
  countryCode: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: Colors.text,
    marginRight: Metrics.spacing.md,
  },
  phoneInput: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    paddingVertical: 0,
  },
  errorText: {
    fontSize: Metrics.fontSize.small,
    color: "#E53935",
    marginTop: Metrics.spacing.xs,
  },
  spacer: {
    flex: 1,
    minHeight: 80,
  },
  termsText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    textAlign: "center",
    marginTop: Metrics.spacing.md,
  },
  termsLink: {
    color: Colors.text,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
