import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const GoldAnalysisReportScreen = ({ navigation, route }) => {
  const {
    customerName = "Sathvik Singh Parihar",
    expertName = "Manish Malik",
    date = "12-05-2025",
    time = "07:03 PM",
    mobile = "7850610001",
    weight = "11.1 g",
    purity = "22K (Approx)",
    heightSize = "81.6 mm",
    purityIndex = "16.92",
  } = route?.params ?? {};

  return (
    <View style={GlobalStyles.container}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Gold Header Card */}
        <View style={styles.goldHeader}>
          <View style={styles.goldHeaderGradient}>
            {/* Person Icon */}
            <View style={styles.personIconCircle}>
              <MaterialIcon name="person" size={36} color={Colors.white} />
            </View>
            <Text style={styles.goldReportTitle}>Gold Analysis Report</Text>
            <View style={styles.centerRow}>
              <MaterialIcon name="store" size={14} color={Colors.white} />
              <Text style={styles.centerName}>TrueGold Testing Center</Text>
            </View>
          </View>

          {/* Expert Card */}
          <View style={styles.expertCard}>
            <View style={styles.expertAvatar}>
              <MaterialIcon name="person" size={24} color={Colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.expertName}>{expertName}</Text>
              <Text style={styles.expertRole}>Certified Gold Analyst</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <MaterialIcon name="check" size={14} color="#4CAF50" />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>
        </View>

        {/* Address */}
        <View style={styles.addressCard}>
          <MaterialIcon
            name="location"
            size={16}
            color={Colors.textSecondary}
          />
          <Text style={styles.addressText}>
            155 First Floor, Sarvapriya Vihar Near Hauz Khas Metro Station,
            Delhi
          </Text>
        </View>

        {/* Customer Details */}
        <Text style={styles.sectionTitle}>CUSTOMER DETAILS</Text>
        <View style={styles.detailCard}>
          <View style={styles.detailRow}>
            <MaterialIcon name="person" size={18} color={Colors.primary} />
            <View style={styles.detailInfo}>
              <Text style={styles.detailLabel}>Name</Text>
              <Text style={styles.detailValue}>{customerName}</Text>
            </View>
          </View>
          <View style={styles.detailDivider} />
          <View style={styles.detailRow}>
            <MaterialIcon name="calendar" size={18} color={Colors.primary} />
            <View style={styles.detailInfo}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>
                {date}, {time}
              </Text>
            </View>
          </View>
          <View style={styles.detailDivider} />
          <View style={styles.detailRow}>
            <MaterialIcon name="phone" size={18} color={Colors.primary} />
            <View style={styles.detailInfo}>
              <Text style={styles.detailLabel}>Mobile</Text>
              <Text style={styles.detailValue}>{mobile}</Text>
            </View>
          </View>
        </View>

        {/* Gold Details */}
        <Text style={styles.sectionTitle}>GOLD DETAILS</Text>
        <View style={styles.goldGrid}>
          <View style={styles.goldGridRow}>
            <TouchableOpacity
              style={styles.goldGridItem}
              onPress={() =>
                navigation.navigate("GoldRecordsDetails", {
                  weight,
                  purity,
                  heightSize,
                  purityIndex,
                  customerName,
                  expertName,
                  date,
                  time,
                })
              }
              activeOpacity={0.7}
            >
              <MaterialIcon name="diamond" size={24} color={Colors.primary} />
              <Text style={styles.goldGridLabel}>Weight</Text>
              <Text style={styles.goldGridValue}>{weight}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goldGridItem}
              onPress={() =>
                navigation.navigate("GoldRecordsDetails", {
                  weight,
                  purity,
                  heightSize,
                  purityIndex,
                  customerName,
                  expertName,
                  date,
                  time,
                })
              }
              activeOpacity={0.7}
            >
              <MaterialIcon name="sparkle" size={24} color={Colors.primary} />
              <Text style={styles.goldGridLabel}>Purity</Text>
              <Text style={styles.goldGridValue}>{purity}</Text>
            </TouchableOpacity>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: Metrics.spacing.xxl,
  },
  // Gold Header
  goldHeader: {
    marginBottom: Metrics.spacing.sm,
  },
  goldHeaderGradient: {
    backgroundColor: Colors.gold,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    paddingTop: Metrics.spacing.xxl,
    paddingBottom: 60,
  },
  personIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.spacing.md,
  },
  goldReportTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.white,
    marginBottom: Metrics.spacing.xs,
  },
  centerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerName: {
    fontSize: Metrics.fontSize.small,
    color: Colors.white,
    marginLeft: Metrics.spacing.xs,
  },
  expertCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: -40,
    padding: Metrics.spacing.md,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  expertAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.sm,
    borderWidth: 2,
    borderColor: Colors.goldLight,
  },
  expertName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  expertRole: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 1,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: Metrics.spacing.xs,
  },
  verifiedText: {
    fontSize: Metrics.fontSize.small,
    color: "#4CAF50",
    fontWeight: "600",
    marginLeft: 3,
  },
  // Address
  addressCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.md,
    padding: Metrics.spacing.md,
  },
  addressText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginLeft: Metrics.spacing.sm,
    flex: 1,
    lineHeight: 18,
  },
  // Customer Details
  sectionTitle: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.text,
    letterSpacing: 0.5,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.sm,
  },
  detailCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    marginHorizontal: Metrics.spacing.lg,
    padding: Metrics.spacing.md,
    borderWidth: 1,
    borderColor: Colors.goldLight,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.spacing.sm,
  },
  detailInfo: {
    marginLeft: Metrics.spacing.md,
  },
  detailLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    fontWeight: "500",
  },
  detailValue: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.text,
    marginTop: 2,
  },
  detailDivider: {
    height: 1,
    backgroundColor: Colors.goldLight,
  },
  // Gold Details Grid
  goldGrid: {
    marginHorizontal: Metrics.spacing.lg,
  },
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
});

export default GoldAnalysisReportScreen;
