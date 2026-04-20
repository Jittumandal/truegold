import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const RECORDS = [
  {
    year: "2025",
    items: [
      {
        id: "1",
        date: "06 Feb",
        time: "6:08 PM",
        customerName: "Sathvik Singh Parihar",
        expertName: "Manish Malik",
        goldItems: 1,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        id: "2",
        date: "04 Dec",
        time: "5:46 PM",
        customerName: "Sathvik Singh Parihar",
        expertName: "Manish Malik",
        goldItems: 1,
      },
      {
        id: "3",
        date: "03 Oct",
        time: "7:44 PM",
        customerName: "Sathvik Singh Parihar",
        expertName: "Manish Malik",
        goldItems: 1,
      },
      {
        id: "4",
        date: "06 Aug",
        time: "8:29 PM",
        customerName: "Sathvik Singh Parihar",
        expertName: "Manish Malik",
        goldItems: 1,
      },
    ],
  },
];

const GoldItemBadge = ({ count }) => (
  <View style={styles.goldBadge}>
    <View style={styles.goldBadgeLeft}>
      <View style={styles.goldCountCircle}>
        <Text style={styles.goldCountText}>{count}</Text>
      </View>
      <Text style={styles.goldBadgeText}>GOLD ITEM INCLUDED</Text>
    </View>
    <TouchableOpacity activeOpacity={0.7}>
      <Text style={styles.buyNowBtn}>Buy Now ›</Text>
    </TouchableOpacity>
  </View>
);

const RecordCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.recordCard}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.dateRow}>
      <MaterialIcon name="calendar" size={16} color={Colors.primary} />
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
    <Text style={styles.reportTitle}>{item.customerName}'s Gold Report</Text>
    <Text style={styles.expertLabel}>
      Tested by Gold Expert:{" "}
      <Text style={styles.expertName}>{item.expertName}</Text>
    </Text>
    <GoldItemBadge count={item.goldItems} />
  </TouchableOpacity>
);

const GoldRecordsScreen = ({ navigation }) => {
  const handleRecordPress = (record) => {
    navigation.navigate("GoldAnalysisReport", {
      customerName: record.customerName,
      expertName: record.expertName,
      date: record.date,
      time: record.time,
    });
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.menuBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.menuIcon}>≡</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gold Records</Text>
        <TouchableOpacity style={styles.helpBtn} activeOpacity={0.7}>
          <MaterialIcon name="help" size={22} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Gold Item Badge */}
        <GoldItemBadge count={1} />

        {/* Records by year */}
        {RECORDS.map((group) => (
          <View key={group.year}>
            {group.year !== RECORDS[0].year && (
              <View style={styles.yearDivider}>
                <View style={styles.yearLine} />
                <Text style={styles.yearText}>{group.year}</Text>
                <View style={styles.yearLine} />
              </View>
            )}
            {group.items.map((item) => (
              <RecordCard
                key={item.id}
                item={item}
                onPress={() => handleRecordPress(item)}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  menuBtn: {
    padding: Metrics.spacing.xs,
  },
  menuIcon: {
    fontSize: 24,
    color: Colors.text,
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  helpBtn: {
    padding: Metrics.spacing.xs,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.xxl,
  },
  goldBadge: {
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.medium,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
  },
  goldBadgeLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  goldCountCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.sm,
  },
  goldCountText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.primary,
  },
  goldBadgeText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.white,
    letterSpacing: 0.5,
  },
  buyNowBtn: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.text,
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.small,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.xs,
    overflow: "hidden",
  },
  recordCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
    borderWidth: 1,
    borderColor: Colors.goldLight,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.sm,
  },
  dateText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.primary,
    marginLeft: Metrics.spacing.xs,
  },
  timeText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginLeft: Metrics.spacing.sm,
  },
  reportTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.xs,
  },
  expertLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.md,
  },
  expertName: {
    fontWeight: "700",
    color: Colors.text,
  },
  yearDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Metrics.spacing.md,
  },
  yearLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.dotInactive,
  },
  yearText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.textSecondary,
    marginHorizontal: Metrics.spacing.md,
  },
});

export default GoldRecordsScreen;
