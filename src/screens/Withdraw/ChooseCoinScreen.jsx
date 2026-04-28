import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";
import { SCREENS } from "../../navigation/screenNames";

const COINS = [
  { id: "0.1", label: "0.1gm", price: "₹1,499.78" },
  { id: "0.5", label: "0.5gm", price: "₹7,498.93" },
  { id: "1", label: "1gm", price: "₹14,997.87" },
  { id: "2", label: "2gm", price: "₹29,995.74" },
];

const ChooseCoinScreen = ({ navigation, route }) => {
  const [selected, setSelected] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View>
        <Text style={styles.coinLabel}>{item.label}</Text>
        <Text style={styles.coinPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.daa}
        onPress={() =>
          navigation.navigate(SCREENS.CART_SUMMARY, { coin: item })
        }
      >
        <Text style={styles.daaText}>DAA</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose coin</Text>
        <Text style={styles.available}>
          Available Quantity: 0.0032gm (₹47.99)
        </Text>
      </View>

      <FlatList
        data={COINS}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.confirm}
        onPress={() =>
          navigation.navigate(SCREENS.CART_SUMMARY, { coin: COINS[0] })
        }
        activeOpacity={0.8}
      >
        <Text style={styles.confirmText}>Confirm 1 coin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: Metrics.spacing.lg,
    backgroundColor: Colors.secondary,
  },
  title: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "700",
    color: Colors.primaryDark,
  },
  available: {
    marginTop: Metrics.spacing.sm,
    color: Colors.textSecondary,
  },
  list: {
    padding: Metrics.spacing.lg,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  coinLabel: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  coinPrice: {
    color: Colors.textSecondary,
    marginTop: Metrics.spacing.xs,
  },
  daa: {
    backgroundColor: Colors.gold,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    borderRadius: Metrics.borderRadius.small,
  },
  daaText: { color: Colors.white, fontWeight: "700" },
  confirm: {
    marginHorizontal: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
    backgroundColor: Colors.primary,
    paddingVertical: Metrics.spacing.md,
    borderRadius: Metrics.borderRadius.full,
    alignItems: "center",
  },
  confirmText: { color: Colors.white, fontWeight: "700" },
});

export default ChooseCoinScreen;
