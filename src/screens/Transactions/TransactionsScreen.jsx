import { useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const FILTER_OPTIONS = [
  "All transactions",
  "Buy",
  "Sell",
  "Gold+",
  "Snapsave",
  "Coin delivery",
  "Transfer",
  "Lease Interest",
];

const MONTH_OPTIONS = ["All Month", "Jul 2024", "Jun 2024", "Mar 2026"];

const TRANSACTIONS = [
  {
    id: "txn-1",
    title: "Digital Gold Outlet",
    date: "23 Jul 2024",
    month: "Jul 2024",
    amount: "₹42",
    amountValue: 42,
    status: "success",
    type: "Sell",
  },
  {
    id: "txn-2",
    title: "Digital Gold Outlet",
    date: "23 Jul 2024",
    month: "Jul 2024",
    amount: "₹42",
    amountValue: 42,
    status: "success",
    type: "Sell",
  },
  {
    id: "txn-3",
    title: "Digital Gold Outlet",
    date: "23 Jul 2024",
    month: "Jul 2024",
    amount: "₹42",
    amountValue: 42,
    status: "success",
    type: "Sell",
  },
  {
    id: "txn-4",
    title: "Digital Gold Outlet",
    date: "23 Jul 2024",
    month: "Jul 2024",
    amount: "₹42",
    amountValue: 42,
    status: "success",
    type: "Sell",
  },
  {
    id: "txn-5",
    title: "Digital Gold Outlet",
    date: "19 Jul 2024",
    month: "Jul 2024",
    amount: "₹42",
    amountValue: 42,
    status: "failed",
    type: "Buy",
  },
  {
    id: "txn-6",
    title: "Digital Gold Purchase",
    date: "20 Jul 2024",
    month: "Jul 2024",
    amount: "₹100",
    amountValue: 100,
    status: "success",
    type: "Buy",
  },
  {
    id: "txn-7",
    title: "Gold+ Subscription",
    date: "18 Jul 2024",
    month: "Jul 2024",
    amount: "₹500",
    amountValue: 500,
    status: "success",
    type: "Gold+",
  },
  {
    id: "txn-8",
    title: "Snapsave Purchase",
    date: "11 Jun 2024",
    month: "Jun 2024",
    amount: "₹75",
    amountValue: 75,
    status: "success",
    type: "Snapsave",
  },
  {
    id: "txn-9",
    title: "Digital Gold Purchase",
    date: "27 Mar 2026",
    month: "Mar 2026",
    amount: "₹42",
    amountValue: 42,
    status: "failed",
    type: "Buy",
  },
];

const TransactionRow = ({ item, onPress }) => {
  const isFailed = item.status === "failed";

  return (
    <TouchableOpacity
      style={styles.transactionRow}
      onPress={() => onPress(item)}
      activeOpacity={0.75}
    >
      <View
        style={[
          styles.statusIconWrap,
          isFailed ? styles.statusIconFailed : styles.statusIconSuccess,
        ]}
      >
        <MaterialIcon
          name={isFailed ? "error" : "check"}
          size={18}
          color={Colors.white}
        />
      </View>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={[styles.transactionAmount, isFailed && styles.failedAmount]}>
        {item.amount}
      </Text>
    </TouchableOpacity>
  );
};

const TransactionsScreen = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState("All transactions");
  const [draftFilter, setDraftFilter] = useState("All transactions");
  const [selectedMonth, setSelectedMonth] = useState("All Month");
  const [draftMonth, setDraftMonth] = useState("All Month");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isMonthVisible, setIsMonthVisible] = useState(false);

  const filteredTransactions = useMemo(() => {
    let result = TRANSACTIONS;

    if (selectedFilter !== "All transactions") {
      result = result.filter((item) => item.type === selectedFilter);
    }

    if (selectedMonth !== "All Month") {
      result = result.filter((item) => item.month === selectedMonth);
    }

    return result;
  }, [selectedFilter, selectedMonth]);

  const handleTransactionPress = (item) => {
    if (item.status === "failed") {
      navigation.navigate("TransactionFailed", { transaction: item });
      return;
    }

    navigation.navigate("TransactionSuccess", { transaction: item });
  };

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
        <Text style={styles.headerTitle}>Transactions</Text>
      </View>

      <View style={styles.filterBar}>
        <TouchableOpacity
          style={styles.filterTabActive}
          onPress={() => {
            setDraftFilter(selectedFilter);
            setIsFilterVisible(true);
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.filterTabActiveText}>{selectedFilter}</Text>
          <MaterialIcon name="filter-list" size={18} color="#FF6B00" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterTab}
          onPress={() => {
            setDraftMonth(selectedMonth);
            setIsMonthVisible(true);
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.filterTabText}>{selectedMonth}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {filteredTransactions.map((item) => (
          <TransactionRow
            key={item.id}
            item={item}
            onPress={handleTransactionPress}
          />
        ))}
      </ScrollView>

      <Modal
        visible={isFilterVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Transactions</Text>
              <TouchableOpacity
                onPress={() => setIsFilterVisible(false)}
                activeOpacity={0.7}
              >
                <MaterialIcon
                  name="close"
                  size={22}
                  color={Colors.textSecondary}
                />
              </TouchableOpacity>
            </View>

            {FILTER_OPTIONS.map((option) => {
              const isSelected = draftFilter === option;

              return (
                <TouchableOpacity
                  key={option}
                  style={styles.filterOption}
                  onPress={() => setDraftFilter(option)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.filterOptionText,
                      option === "All transactions" && styles.filterOptionBold,
                    ]}
                  >
                    {option}
                  </Text>
                  <View
                    style={[
                      styles.radioOuter,
                      isSelected && styles.radioOuterSelected,
                    ]}
                  >
                    {isSelected ? (
                      <MaterialIcon
                        name="check"
                        size={14}
                        color={Colors.white}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                setSelectedFilter(draftFilter);
                setIsFilterVisible(false);
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isMonthVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsMonthVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Month</Text>
              <TouchableOpacity
                onPress={() => setIsMonthVisible(false)}
                activeOpacity={0.7}
              >
                <MaterialIcon
                  name="close"
                  size={22}
                  color={Colors.textSecondary}
                />
              </TouchableOpacity>
            </View>

            {MONTH_OPTIONS.map((option) => {
              const isSelected = draftMonth === option;

              return (
                <TouchableOpacity
                  key={option}
                  style={styles.filterOption}
                  onPress={() => setDraftMonth(option)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.filterOptionText}>{option}</Text>
                  <View
                    style={[
                      styles.radioOuter,
                      isSelected && styles.radioOuterSelected,
                    ]}
                  >
                    {isSelected ? (
                      <MaterialIcon
                        name="check"
                        size={14}
                        color={Colors.white}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                setSelectedMonth(draftMonth);
                setIsMonthVisible(false);
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.applyButtonText}>Apply Month</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontWeight: "600",
    color: Colors.text,
  },
  filterBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    marginBottom: Metrics.spacing.xs,
  },
  filterTabActive: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#FF6B00",
    paddingVertical: Metrics.spacing.md,
  },
  filterTabActiveText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: "#FF6B00",
    marginRight: Metrics.spacing.xs,
  },
  filterTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Metrics.spacing.md,
  },
  filterTabText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: "#7B8798",
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  statusIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
  },
  statusIconSuccess: {
    backgroundColor: "#19C15F",
  },
  statusIconFailed: {
    backgroundColor: "#FF3B3B",
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "500",
    color: "#22304A",
  },
  transactionDate: {
    fontSize: Metrics.fontSize.medium,
    color: "#96A0B5",
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: "#22304A",
  },
  failedAmount: {
    color: "#FF3B3B",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(28, 40, 64, 0.45)",
    justifyContent: "center",
    paddingHorizontal: Metrics.spacing.lg,
  },
  modalCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.lg,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  modalTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
  },
  filterOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.md,
  },
  filterOptionText: {
    fontSize: Metrics.fontSize.body,
    color: "#22304A",
  },
  filterOptionBold: {
    fontWeight: "700",
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D4D8E2",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterSelected: {
    backgroundColor: "#19C15F",
    borderColor: "#19C15F",
  },
  applyButton: {
    backgroundColor: "#FF6B00",
    borderRadius: Metrics.borderRadius.medium,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    marginTop: Metrics.spacing.md,
  },
  applyButtonText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.white,
  },
});

export default TransactionsScreen;
