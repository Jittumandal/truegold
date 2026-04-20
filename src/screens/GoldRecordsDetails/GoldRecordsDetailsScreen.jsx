import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const GoldRecordsDetailsScreen = ({ navigation, route }) => {
  const {
    weight = "11.1 g",
    purity = "22K (Approx)",
    heightSize = "81.6 mm",
    purityIndex = "16.92",
    verificationDate = "12 June 2025",
    location = "Hauz Khas, New Delhi",
  } = route?.params ?? {};

  const testItems = [
    { sr: 1, item: "Gold Chain", purity: "91.6% (22K)", verified: true },
  ];

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
        <Text style={styles.headerTitle}>Gold Records Details</Text>
      </View>

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Gold Details */}
        <Text style={styles.sectionTitle}>GOLD DETAILS</Text>
        <View style={styles.goldGrid}>
          <View style={styles.goldGridRow}>
            <View style={styles.goldGridItem}>
              <MaterialIcon name="diamond" size={24} color={Colors.primary} />
              <Text style={styles.goldGridLabel}>Weight</Text>
              <Text style={styles.goldGridValue}>{weight}</Text>
            </View>
            <View style={styles.goldGridItem}>
              <MaterialIcon name="sparkle" size={24} color={Colors.primary} />
              <Text style={styles.goldGridLabel}>Purity</Text>
              <Text style={styles.goldGridValue}>{purity}</Text>
            </View>
          </View>
          <View style={styles.goldGridRow}>
            <View style={styles.goldGridItem}>
              <MaterialIcon name="tag" size={24} color={Colors.textSecondary} />
              <Text style={styles.goldGridLabel}>Height/Size</Text>
              <Text style={styles.goldGridValue}>{heightSize}</Text>
            </View>
            <View style={styles.goldGridItem}>
              <MaterialIcon name="chart" size={24} color={Colors.primary} />
              <Text style={styles.goldGridLabel}>Purity Index</Text>
              <Text style={styles.goldGridValue}>{purityIndex}</Text>
            </View>
          </View>
        </View>

        {/* Findings */}
        <Text style={styles.sectionTitle}>FINDINGS</Text>
        <View style={styles.findingsCard}>
          <View style={styles.findingsRow}>
            <MaterialIcon name="check" size={22} color="#4CAF50" />
            <View style={styles.findingsInfo}>
              <Text style={styles.findingsTitle}>Normal / Verified</Text>
              <Text style={styles.findingsDesc}>
                No major impurities detected.
              </Text>
            </View>
          </View>
        </View>

        {/* Test Report */}
        <Text style={styles.sectionTitle}>TEST REPORT</Text>
        <View style={styles.testReportCard}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { width: 30 }]}>SR.</Text>
            <Text style={[styles.tableHeaderText, { flex: 1 }]}>ITEM</Text>
            <Text style={[styles.tableHeaderText, { width: 80 }]}>PURITY</Text>
            <Text style={[styles.tableHeaderText, { width: 70 }]}>STATUS</Text>
          </View>
          {/* Table Rows */}
          {testItems.map((item) => (
            <View key={item.sr} style={styles.tableRow}>
              <Text style={[styles.tableCell, { width: 30 }]}>{item.sr}</Text>
              <Text style={[styles.tableCell, { flex: 1 }]}>{item.item}</Text>
              <Text style={[styles.tableCell, { width: 80 }]}>
                {item.purity}
              </Text>
              <View
                style={[
                  { width: 70, flexDirection: "row", alignItems: "center" },
                ]}
              >
                {item.verified && (
                  <>
                    <MaterialIcon name="check" size={14} color="#4CAF50" />
                    <Text style={styles.verifiedText}>Verified</Text>
                  </>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Verification Date Footer */}
        <View style={styles.verificationCard}>
          <Text style={styles.verificationLabel}>VERIFICATION DATE</Text>
          <Text style={styles.verificationDate}>{verificationDate}</Text>
          <Text style={styles.verificationLocation}>{location}</Text>
        </View>
      </ScrollView>
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
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.xxl,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.text,
    letterSpacing: 0.5,
    marginTop: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.sm,
  },
  // Gold Grid
  goldGrid: {},
  goldGridRow: {
    flexDirection: "row",
    marginBottom: Metrics.spacing.sm,
  },
  goldGridItem: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    borderWidth: 1,
    borderColor: Colors.goldLight,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    marginHorizontal: Metrics.spacing.xs,
  },
  goldGridLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: Metrics.spacing.xs,
  },
  goldGridValue: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginTop: 2,
  },
  // Findings
  findingsCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
  },
  findingsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  findingsInfo: {
    marginLeft: Metrics.spacing.sm,
  },
  findingsTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: "#4CAF50",
  },
  findingsDesc: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  // Test Report
  testReportCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    borderWidth: 1,
    borderColor: Colors.goldLight,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.goldLight,
  },
  tableHeaderText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.primary,
    letterSpacing: 0.3,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
  },
  tableCell: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
  },
  verifiedText: {
    fontSize: Metrics.fontSize.small,
    color: "#4CAF50",
    fontWeight: "600",
    marginLeft: 3,
  },
  // Verification Footer
  verificationCard: {
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.lg,
    alignItems: "center",
    marginTop: Metrics.spacing.lg,
  },
  verificationLabel: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.white,
    letterSpacing: 0.5,
    opacity: 0.9,
  },
  verificationDate: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.white,
    marginTop: Metrics.spacing.xs,
  },
  verificationLocation: {
    fontSize: Metrics.fontSize.small,
    color: Colors.white,
    opacity: 0.85,
    marginTop: 2,
  },
});

export default GoldRecordsDetailsScreen;
