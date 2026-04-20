import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const REPORT_ITEMS = [
  { id: "capitalGains", label: "Capital Gains", iconName: "chartUp" },
  { id: "statements", label: "Statements", iconName: "clipboard" },
];

const ReportsScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reports</Text>
      </View>

      <View style={styles.divider} />

      {/* Report Items */}
      {REPORT_ITEMS.map((item, index) => (
        <React.Fragment key={item.id}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.6}>
            <View style={styles.menuItemLeft}>
              <MaterialIcon
                name={item.iconName}
                size={24}
                color={Colors.textSecondary}
              />
              <Text style={styles.menuItemLabel}>{item.label}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          {index < REPORT_ITEMS.length - 1 && <View style={styles.separator} />}
        </React.Fragment>
      ))}

      <View style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  backBtn: {
    marginRight: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.text,
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: Colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.goldLight,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemLabel: {
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    marginLeft: Metrics.spacing.md,
  },
  chevron: {
    fontSize: 22,
    color: Colors.textSecondary,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.goldLight,
    marginHorizontal: Metrics.spacing.lg,
  },
});

export default ReportsScreen;
