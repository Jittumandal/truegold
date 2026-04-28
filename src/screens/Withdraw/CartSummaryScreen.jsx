import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import { SCREENS } from "../../navigation/screenNames";

const CartSummaryScreen = ({ navigation, route }) => {
  const { coin } = route.params || {
    coin: { label: "0.1gm", price: "₹1,499.78" },
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cart Summary</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.item}>{coin.label} Gold coin x 1</Text>
        <Text style={styles.price}>{coin.price}</Text>
      </View>

      <View style={styles.fees}>
        <Text style={styles.feeLabel}>Delivery and Making Charges</Text>
        <Text style={styles.feeValue}>₹200</Text>
      </View>

      <TouchableOpacity
        style={styles.proceed}
        onPress={() => navigation.navigate(SCREENS.ADD_ADDRESS, { coin })}
        activeOpacity={0.8}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: { padding: Metrics.spacing.lg },
  title: { fontSize: Metrics.fontSize.heading, fontWeight: "700" },
  card: {
    margin: Metrics.spacing.lg,
    padding: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    elevation: 2,
  },
  item: { fontWeight: "700" },
  price: { marginTop: Metrics.spacing.sm, color: Colors.textSecondary },
  fees: { marginHorizontal: Metrics.spacing.lg, marginTop: Metrics.spacing.md },
  feeLabel: { color: Colors.textSecondary },
  feeValue: { fontWeight: "700", marginTop: Metrics.spacing.xs },
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

export default CartSummaryScreen;
