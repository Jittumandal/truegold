import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const PRICE_DATA_30D = [
  { date: "15 Mar", price: 14850 },
  { date: "18 Mar", price: 14920 },
  { date: "21 Mar", price: 14780 },
  { date: "24 Mar", price: 14950 },
  { date: "27 Mar", price: 15010 },
  { date: "30 Mar", price: 15100 },
  { date: "02 Apr", price: 15050 },
  { date: "05 Apr", price: 14980 },
  { date: "08 Apr", price: 15120 },
  { date: "10 Apr", price: 15037 },
  { date: "13 Apr", price: 15036 },
];

const GoldPriceChartScreen = ({ navigation }) => {
  const [selectedRange, setSelectedRange] = useState("1M");
  const currentPrice = 15036.68;
  const previousPrice = 14850;
  const change = currentPrice - previousPrice;
  const changePercent = ((change / previousPrice) * 100).toFixed(2);
  const isPositive = change >= 0;

  const RANGES = ["1W", "1M", "3M", "6M", "1Y", "ALL"];

  // Simple bar chart visualization
  const maxPrice = Math.max(...PRICE_DATA_30D.map((d) => d.price));
  const minPrice = Math.min(...PRICE_DATA_30D.map((d) => d.price));
  const priceRange = maxPrice - minPrice || 1;
  const chartWidth = SCREEN_WIDTH - Metrics.spacing.lg * 2 - 32;
  const barWidth = chartWidth / PRICE_DATA_30D.length - 4;

  return (
    <View style={GlobalStyles.containerWhite}>
      {/* (header removed) */}

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Current Price Card */}
        <View style={styles.priceCard}>
          <View style={styles.priceRow}>
            <View>
              <Text style={styles.priceLabel}>24K Gold Price</Text>
              <Text style={styles.priceValue}>₹{currentPrice.toFixed(2)}</Text>
              <Text style={styles.priceUnit}>per gram</Text>
            </View>
            <View
              style={[
                styles.changeBadge,
                isPositive ? styles.changeUp : styles.changeDown,
              ]}
            >
              <Text
                style={[
                  styles.changeText,
                  isPositive ? styles.changeTextUp : styles.changeTextDown,
                ]}
              >
                {isPositive ? "▲" : "▼"} ₹{Math.abs(change).toFixed(2)} (
                {changePercent}%)
              </Text>
            </View>
          </View>
          <Text style={styles.lastUpdated}>
            Last updated: 13 Apr 2026, 3:00 PM
          </Text>
        </View>

        {/* Range Selector */}
        <View style={styles.rangeRow}>
          {RANGES.map((range) => (
            <TouchableOpacity
              key={range}
              style={[
                styles.rangeBtn,
                selectedRange === range && styles.rangeBtnActive,
              ]}
              onPress={() => setSelectedRange(range)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.rangeText,
                  selectedRange === range && styles.rangeTextActive,
                ]}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Simple Bar Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Price Trend ({selectedRange})</Text>
          <View style={styles.chartArea}>
            {/* Y-axis labels */}
            <View style={styles.yAxis}>
              <Text style={styles.yLabel}>₹{maxPrice}</Text>
              <Text style={styles.yLabel}>
                ₹{Math.round((maxPrice + minPrice) / 2)}
              </Text>
              <Text style={styles.yLabel}>₹{minPrice}</Text>
            </View>
            {/* Bars */}
            <View style={styles.barsContainer}>
              {PRICE_DATA_30D.map((item, index) => {
                const height =
                  ((item.price - minPrice) / priceRange) * 120 + 10;
                return (
                  <View key={index} style={styles.barColumn}>
                    <View
                      style={[
                        styles.bar,
                        {
                          height,
                          backgroundColor:
                            item.price >= previousPrice
                              ? Colors.primary
                              : "#E53935",
                        },
                      ]}
                    />
                    <Text style={styles.xLabel}>{item.date.split(" ")[0]}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* Price Table */}
        <Text style={styles.sectionTitle}>Price History</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Price/gm</Text>
          <Text style={styles.tableHeaderText}>Change</Text>
        </View>
        {PRICE_DATA_30D.slice()
          .reverse()
          .map((item, index) => {
            const prev =
              index < PRICE_DATA_30D.length - 1
                ? PRICE_DATA_30D[PRICE_DATA_30D.length - 2 - index]?.price
                : item.price;
            const diff = item.price - (prev || item.price);
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.date}</Text>
                <Text style={styles.tableCell}>
                  ₹{item.price.toLocaleString()}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    {
                      color: diff >= 0 ? "#4CAF50" : "#E53935",
                      fontWeight: "600",
                    },
                  ]}
                >
                  {diff >= 0 ? "+" : ""}
                  {diff.toFixed(0)}
                </Text>
              </View>
            );
          })}

        {/* Quick Stats */}
        <Text style={[styles.sectionTitle, { marginTop: Metrics.spacing.lg }]}>
          Quick Stats
        </Text>
        <View style={styles.statsGrid}>
          {[
            { label: "52-Week High", value: "₹15,450" },
            { label: "52-Week Low", value: "₹13,200" },
            { label: "Avg (30D)", value: "₹14,985" },
            { label: "Avg (1Y)", value: "₹14,320" },
          ].map((stat, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backBtn: { padding: Metrics.spacing.xs },
  backArrow: { fontSize: 22, color: Colors.text, fontWeight: "700" },
  headerTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
  },
  content: { flex: 1 },
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },
  priceCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  priceLabel: { fontSize: Metrics.fontSize.small, color: Colors.textSecondary },
  priceValue: {
    fontSize: Metrics.fontSize.largeHeading,
    fontWeight: "800",
    color: Colors.text,
    marginVertical: 4,
  },
  priceUnit: { fontSize: Metrics.fontSize.small, color: Colors.textSecondary },
  changeBadge: {
    borderRadius: Metrics.borderRadius.small,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: 4,
  },
  changeUp: { backgroundColor: "#E8F5E9" },
  changeDown: { backgroundColor: "#FFEBEE" },
  changeText: { fontSize: Metrics.fontSize.small, fontWeight: "700" },
  changeTextUp: { color: "#4CAF50" },
  changeTextDown: { color: "#E53935" },
  lastUpdated: {
    fontSize: 11,
    color: Colors.dotInactive,
    marginTop: Metrics.spacing.sm,
  },
  rangeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Metrics.spacing.lg,
  },
  rangeBtn: {
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    borderRadius: Metrics.borderRadius.full,
  },
  rangeBtnActive: { backgroundColor: Colors.primaryDark },
  rangeText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  rangeTextActive: { color: Colors.white },
  chartContainer: {
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.lg,
  },
  chartTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  chartArea: { flexDirection: "row" },
  yAxis: {
    justifyContent: "space-between",
    marginRight: Metrics.spacing.sm,
    height: 140,
  },
  yLabel: { fontSize: 9, color: Colors.dotInactive },
  barsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 140,
  },
  barColumn: { alignItems: "center" },
  bar: { width: 12, borderRadius: 3, minHeight: 4 },
  xLabel: { fontSize: 8, color: Colors.dotInactive, marginTop: 4 },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dotInactive,
  },
  tableHeaderText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.text,
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#F0F0F0",
  },
  tableCell: {
    fontSize: Metrics.fontSize.small,
    color: Colors.text,
    flex: 1,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
    alignItems: "center",
  },
  statLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.primary,
  },
});

export default GoldPriceChartScreen;
