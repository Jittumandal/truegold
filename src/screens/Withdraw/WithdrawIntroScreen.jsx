import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";
import { SCREENS } from "../../navigation/screenNames";

const WithdrawIntroScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Vault</Text>
        <Text style={styles.subtitle}>
          Unlock your vault to withdraw your savings
        </Text>
      </View>

      <View style={styles.center}>
        <MaterialIcon name="vault" size={88} color={Colors.primary} />
      </View>

      <TouchableOpacity
        style={styles.unlockButton}
        onPress={() => navigation.navigate(SCREENS.CHOOSE_COIN)}
        activeOpacity={0.8}
      >
        <Text style={styles.unlockText}>TAP TO UNLOCK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    padding: Metrics.spacing.lg,
    backgroundColor: Colors.goldLight,
    alignItems: "center",
  },
  title: {
    fontSize: Metrics.fontSize.largeHeading,
    fontWeight: "700",
    color: Colors.primaryDark,
  },
  subtitle: {
    marginTop: Metrics.spacing.sm,
    textAlign: "center",
    color: Colors.textSecondary,
  },
  center: {
    marginTop: Metrics.spacing.xl,
    alignItems: "center",
  },
  unlockButton: {
    marginTop: "auto",
    marginBottom: Metrics.spacing.xl,
    marginHorizontal: Metrics.spacing.lg,
    backgroundColor: Colors.primary,
    paddingVertical: Metrics.spacing.md,
    borderRadius: Metrics.borderRadius.full,
    alignItems: "center",
  },
  unlockText: {
    color: Colors.white,
    fontWeight: "700",
  },
});

export default WithdrawIntroScreen;
