import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const DETAIL_ROWS = [
  ["Transaction ID", "TXN123456789"],
  ["Order Date", "23 Jul 2024, 2:15 PM"],
  ["Gold Value", "₹200.00"],
  ["Total", "₹200"],
  ["Amount Paid", "₹50"],
  ["Order Status", "Completed ✓"],
  ["Payment Successful", "Successful ✓"],
  ["Gold Order Placed", "03-08-2024 01:22 AM"],
  ["Gold Order Fulfilled", "03-08-2024 01:22 AM"],
];

const TransactionSuccessScreen = ({ navigation, route }) => {
  const transaction = route?.params?.transaction;

  return (
    <View style={GlobalStyles.containerWhite}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction Completed</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} bounces={false}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>As on 23 Jul 2024, 2:15 PM</Text>
        </View>

        <View style={styles.successBanner}>
          <MaterialIcon name="check" size={22} color="#17B45C" />
          <View style={styles.successBannerTextWrap}>
            <Text style={styles.successBannerTitle}>Transaction Completed</Text>
            <Text style={styles.successBannerSubtitle}>
              Your transaction was successful
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeaderOrange}>
            <Text style={styles.cardHeaderText}>Transaction Details</Text>
          </View>
          {DETAIL_ROWS.map(([label, value]) => (
            <View key={label} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{label}</Text>
              <Text style={styles.detailValue}>{value}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>View Certificate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            navigation.navigate("DownloadReceipt", { transaction })
          }
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>Download Receipt</Text>
        </TouchableOpacity>
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
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.sm,
    paddingBottom: 110,
  },
  summaryCard: {
    backgroundColor: Colors.white,
    borderWidth: 3,
    borderColor: "#FF6B00",
    borderRadius: 18,
    minHeight: 110,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.md,
  },
  summaryValue: {
    fontSize: Metrics.fontSize.medium,
    color: "#7B8798",
  },
  successBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3FFF6",
    borderColor: "#BDEDC8",
    borderWidth: 1,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
  },
  successBannerTextWrap: {
    marginLeft: Metrics.spacing.sm,
  },
  successBannerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: "#17B45C",
  },
  successBannerSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: "#5F6F89",
    marginTop: 2,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    marginBottom: Metrics.spacing.md,
  },
  cardHeaderOrange: {
    backgroundColor: "#FF6B00",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
  },
  cardHeaderText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  detailLabel: {
    fontSize: Metrics.fontSize.medium,
    color: "#7B8798",
  },
  detailValue: {
    fontSize: Metrics.fontSize.medium,
    color: "#1E2E47",
    fontWeight: "700",
    textAlign: "right",
    maxWidth: "55%",
  },
  primaryButton: {
    backgroundColor: "#FF6B00",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  secondaryButton: {
    borderWidth: 1.5,
    borderColor: "#FF6B00",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
  },
  secondaryButtonText: {
    color: "#FF6B00",
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
});

export default TransactionSuccessScreen;
