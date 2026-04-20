import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const TransactionFailedScreen = ({ navigation }) => {
  const detailRows = [
    ["Transaction ID", "TXN987654321"],
    ["Amount", "₹42.00"],
    ["Date & Time", "27 Mar 2026, 10:30 AM"],
    ["Transaction Type", "Digital Gold Purchase"],
    ["Status", "Failed"],
    ["Error Code", "ERR_PAYMENT_DECLINED"],
  ];

  return (
    <View style={GlobalStyles.containerWhite}>
      <ScrollView contentContainerStyle={styles.content} bounces={false}>
        <View style={styles.topBand}>
          <View style={styles.topHeader}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              style={styles.headerBackBtn}
            >
              <Text style={styles.headerBackArrow}>←</Text>
            </TouchableOpacity>
            <Text style={styles.topHeaderTitle}>Transaction Failed</Text>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.failedIconWrap}>
              <MaterialIcon name="close" size={30} color="#FF182B" />
            </View>
            <Text style={styles.heroTitle}>Transaction Failed</Text>
            <Text style={styles.heroSubtitle}>
              Your transaction could not be completed
            </Text>
          </View>
        </View>

        <View style={styles.inlineErrorCard}>
          <View style={styles.inlineErrorHeader}>
            <MaterialIcon name="error" size={20} color="#FF4A4A" />
            <Text style={styles.inlineErrorTitle}>Payment Failed</Text>
          </View>
          <Text style={styles.inlineErrorText}>
            The payment could not be processed. This might be due to
            insufficient funds, network issues, or bank decline.
          </Text>
        </View>

        <View style={styles.detailCard}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailHeaderText}>Transaction Details</Text>
          </View>
          {detailRows.map(([label, value]) => {
            const isAmount = label === "Amount";
            const isStatus = label === "Status";

            return (
              <View key={label} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{label}</Text>
                <Text
                  style={[
                    styles.detailValue,
                    isAmount && styles.detailValueFailed,
                    isStatus && styles.detailValueFailed,
                  ]}
                >
                  {isStatus ? "• Failed" : value}
                </Text>
              </View>
            );
          })}
        </View>

        <View style={styles.reasonCard}>
          <Text style={styles.reasonTitle}>Possible Reasons</Text>
          <Text style={styles.reasonItem}>
            • Insufficient balance in your account
          </Text>
          <Text style={styles.reasonItem}>
            • Payment gateway timeout or network issue
          </Text>
          <Text style={styles.reasonItem}>• Bank declined the transaction</Text>
          <Text style={styles.reasonItem}>
            • Invalid card details or expired card
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>↻ Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.supportButton} activeOpacity={0.7}>
          <Text style={styles.supportButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 110,
  },
  topBand: {
    backgroundColor: "#FF182B",
    paddingTop: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.lg,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.lg,
  },
  headerBackBtn: {
    marginRight: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },
  headerBackArrow: {
    fontSize: 20,
    color: Colors.white,
  },
  topHeaderTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.white,
  },
  heroCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: Metrics.spacing.xxl,
    paddingHorizontal: Metrics.spacing.lg,
  },
  failedIconWrap: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#FFE8EA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.spacing.md,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E2E47",
  },
  heroSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: "#7B8798",
    marginTop: Metrics.spacing.sm,
  },
  inlineErrorCard: {
    backgroundColor: "#FFF2F2",
    borderWidth: 1,
    borderColor: "#FFC9C9",
    borderRadius: 16,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.md,
    padding: Metrics.spacing.md,
  },
  inlineErrorHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.xs,
  },
  inlineErrorTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: "#B13A3A",
    marginLeft: Metrics.spacing.sm,
  },
  inlineErrorText: {
    fontSize: Metrics.fontSize.medium,
    color: "#D44B4B",
    lineHeight: 24,
    marginLeft: 28,
  },
  detailCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: "hidden",
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.md,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  detailHeader: {
    backgroundColor: "#202C40",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
  },
  detailHeaderText: {
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
    maxWidth: "55%",
    textAlign: "right",
  },
  detailValueFailed: {
    color: "#FF3B3B",
  },
  reasonCard: {
    backgroundColor: "#FFF7EF",
    borderWidth: 1,
    borderColor: "#FFD5A8",
    borderRadius: 16,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.md,
    padding: Metrics.spacing.md,
  },
  reasonTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: "#A25C15",
    marginBottom: Metrics.spacing.sm,
  },
  reasonItem: {
    fontSize: Metrics.fontSize.medium,
    color: "#C06E1A",
    lineHeight: 26,
  },
  primaryButton: {
    backgroundColor: "#FF6B00",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.md,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  secondaryButton: {
    borderWidth: 1.5,
    borderColor: "#D8DDE7",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    marginHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.sm,
  },
  secondaryButtonText: {
    color: "#3E4C64",
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  supportButton: {
    alignItems: "center",
    marginTop: Metrics.spacing.md,
  },
  supportButtonText: {
    color: "#FF6B00",
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
  },
});

export default TransactionFailedScreen;
