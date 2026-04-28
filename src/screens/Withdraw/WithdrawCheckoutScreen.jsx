import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import { SCREENS } from "../../navigation/screenNames";

const WithdrawCheckoutScreen = ({ navigation, route }) => {
  const { coin, address } = route.params || {};

  const handleProceed = () => {
    // Simulate failure to match provided screenshots
    Alert.alert(
      "Payment failed",
      "Coin orders not available currently. Please contact support",
    );
    navigation.navigate(SCREENS.TRANSACTION_FAILED);
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Delivering 1 gold coin</Text>
        <Text style={styles.amount}>₹1,694.76</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.addressLabel}>Delivering to</Text>
        <Text style={styles.addressText}>{address?.name || "Your Name"}</Text>
        <Text style={styles.addressTextSmall}>
          {address?.address || "Selected Address"}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.proceed}
        onPress={handleProceed}
        activeOpacity={0.8}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: { padding: Metrics.spacing.lg },
  title: { fontSize: Metrics.fontSize.body, color: Colors.textSecondary },
  amount: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "700",
    marginTop: Metrics.spacing.sm,
  },
  card: {
    margin: Metrics.spacing.lg,
    padding: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
  },
  addressLabel: { color: Colors.textSecondary },
  addressText: { fontWeight: "700", marginTop: Metrics.spacing.xs },
  addressTextSmall: {
    color: Colors.textSecondary,
    marginTop: Metrics.spacing.xs,
  },
  proceed: {
    marginHorizontal: Metrics.spacing.lg,
    marginTop: "auto",
    marginBottom: Metrics.spacing.lg,
    backgroundColor: Colors.primary,
    paddingVertical: Metrics.spacing.md,
    borderRadius: Metrics.borderRadius.full,
    alignItems: "center",
  },
  proceedText: { color: Colors.white, fontWeight: "700" },
});

export default WithdrawCheckoutScreen;
