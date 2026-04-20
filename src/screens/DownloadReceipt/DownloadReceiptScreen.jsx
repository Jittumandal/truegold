import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const DownloadReceiptScreen = ({ navigation, route }) => {
  const transaction = route?.params?.transaction;

  const receiptRows = [
    ["Receipt ID", "RCT123456789"],
    ["Transaction ID", "TXN123456789"],
    ["Customer", "TrueGold User"],
    ["Transaction Type", transaction?.title ?? "Digital Gold Purchase"],
    ["Transaction Date", "23 Jul 2024, 2:15 PM"],
    ["Amount", transaction?.amount ?? "₹200"],
    ["Status", "Paid"],
    ["Issued On", "23 Jul 2024, 2:20 PM"],
  ];

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
        <Text style={styles.headerTitle}>Download Receipt</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} bounces={false}>
        <View style={styles.receiptHero}>
          <Text style={styles.receiptHeroTitle}>Payment Receipt</Text>
          <Text style={styles.receiptHeroSubtitle}>
            Receipt generated successfully for your transaction
          </Text>
        </View>

        <View style={styles.receiptCard}>
          <View style={styles.receiptCardHeader}>
            <Text style={styles.receiptCardHeaderText}>Receipt Details</Text>
          </View>

          {receiptRows.map(([label, value]) => (
            <View key={label} style={styles.row}>
              <Text style={styles.rowLabel}>{label}</Text>
              <Text style={styles.rowValue}>{value}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>Download PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Transactions")}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>Back to Transactions</Text>
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
    paddingBottom: 110,
  },
  receiptHero: {
    backgroundColor: "#FFF4EA",
    borderRadius: 18,
    padding: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.md,
  },
  receiptHeroTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: "#FF6B00",
  },
  receiptHeroSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: "#7B8798",
    lineHeight: 22,
    marginTop: Metrics.spacing.sm,
  },
  receiptCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    marginBottom: Metrics.spacing.md,
  },
  receiptCardHeader: {
    backgroundColor: "#FF6B00",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
  },
  receiptCardHeaderText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
  },
  rowLabel: {
    fontSize: Metrics.fontSize.medium,
    color: "#7B8798",
  },
  rowValue: {
    fontSize: Metrics.fontSize.medium,
    color: "#1E2E47",
    fontWeight: "700",
    maxWidth: "55%",
    textAlign: "right",
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
    borderColor: "#D8DDE7",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
  },
  secondaryButtonText: {
    color: "#3E4C64",
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
});

export default DownloadReceiptScreen;
