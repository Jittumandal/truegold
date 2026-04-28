import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";

const REWARDS_DATA = {
  totalGold: "0.25 gm",
  totalValue: "₹3,759",
  level: "Gold",
  nextLevel: "Platinum",
  progress: 65,
};

const AVAILABLE_REWARDS = [
  {
    id: "1",
    title: "Refer & Earn",
    desc: "Get ₹50 gold per referral",
    icon: "gift",
    value: "₹50/referral",
  },
  {
    id: "2",
    title: "SIP Bonus",
    desc: "Extra 0.01gm on 6-month SIP streak",
    icon: "sync",
    value: "0.01 gm",
  },
  {
    id: "3",
    title: "Birthday Bonus",
    desc: "Free gold on your birthday",
    icon: "star",
    value: "0.02 gm",
  },
  {
    id: "4",
    title: "First Investment",
    desc: "Bonus on first ₹5,000+ investment",
    icon: "medal",
    value: "₹100",
  },
];

const HISTORY = [
  {
    id: "1",
    title: "Referral Bonus - Amit",
    amount: "+₹50",
    date: "10 Apr 2026",
    type: "earned",
  },
  {
    id: "2",
    title: "SIP Streak Bonus",
    amount: "+0.01 gm",
    date: "01 Apr 2026",
    type: "earned",
  },
  {
    id: "3",
    title: "Welcome Bonus",
    amount: "+₹100",
    date: "15 Mar 2026",
    type: "earned",
  },
  {
    id: "4",
    title: "Referral Bonus - Priya",
    amount: "+₹50",
    date: "10 Mar 2026",
    type: "earned",
  },
  {
    id: "5",
    title: "Redeemed to Wallet",
    amount: "-₹200",
    date: "05 Mar 2026",
    type: "redeemed",
  },
];

const RewardsScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.containerWhite}>
      {/* (header removed) */}

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Rewards Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceTop}>
            <View>
              <Text style={styles.balanceLabel}>Reward Balance</Text>
              <Text style={styles.balanceValue}>{REWARDS_DATA.totalGold}</Text>
              <Text style={styles.balanceSubtext}>
                ≈ {REWARDS_DATA.totalValue}
              </Text>
            </View>
            <View style={styles.levelBadge}>
              <MaterialIcon name="medal" size={24} color={Colors.primary} />
              <Text style={styles.levelText}>{REWARDS_DATA.level}</Text>
            </View>
          </View>
          {/* Level Progress */}
          <View style={styles.levelProgress}>
            <View style={styles.levelProgressRow}>
              <Text style={styles.levelProgressLabel}>
                {REWARDS_DATA.level}
              </Text>
              <Text style={styles.levelProgressLabel}>
                {REWARDS_DATA.nextLevel}
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${REWARDS_DATA.progress}%` },
                ]}
              />
            </View>
            <Text style={styles.levelProgressHint}>
              {REWARDS_DATA.progress}% to {REWARDS_DATA.nextLevel} level
            </Text>
          </View>
        </View>

        {/* Available Rewards */}
        <Text style={styles.sectionTitle}>Earn More Rewards</Text>
        {AVAILABLE_REWARDS.map((reward) => (
          <TouchableOpacity
            key={reward.id}
            style={styles.rewardCard}
            activeOpacity={0.7}
          >
            <View style={styles.rewardIconWrap}>
              <MaterialIcon
                name={reward.icon}
                size={24}
                color={Colors.primary}
              />
            </View>
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.rewardDesc}>{reward.desc}</Text>
            </View>
            <View style={styles.rewardValueWrap}>
              <Text style={styles.rewardValue}>{reward.value}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Reward History */}
        <Text style={[styles.sectionTitle, { marginTop: Metrics.spacing.lg }]}>
          Reward History
        </Text>
        {HISTORY.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <View style={styles.historyInfo}>
              <Text style={styles.historyTitle}>{item.title}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
            <Text
              style={[
                styles.historyAmount,
                item.type === "earned" ? styles.earned : styles.redeemed,
              ]}
            >
              {item.amount}
            </Text>
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
  balanceCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
  },
  balanceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: Metrics.spacing.lg,
  },
  balanceLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  balanceValue: {
    fontSize: Metrics.fontSize.largeHeading,
    fontWeight: "800",
    color: Colors.text,
    marginVertical: 4,
  },
  balanceSubtext: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  levelBadge: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.sm,
  },
  levelText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.primary,
    marginTop: 2,
  },
  levelProgress: {},
  levelProgressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  levelProgressLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  progressBar: {
    height: 6,
    backgroundColor: Colors.white,
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: { height: 6, backgroundColor: Colors.primary, borderRadius: 3 },
  levelProgressHint: { fontSize: 11, color: Colors.textSecondary },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  rewardCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
  },
  rewardIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
  },
  rewardInfo: { flex: 1 },
  rewardTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
  },
  rewardDesc: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  rewardValueWrap: { alignItems: "flex-end" },
  rewardValue: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.primary,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEEEEE",
  },
  historyInfo: { flex: 1 },
  historyTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "500",
    color: Colors.text,
  },
  historyDate: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  historyAmount: { fontSize: Metrics.fontSize.medium, fontWeight: "700" },
  earned: { color: "#4CAF50" },
  redeemed: { color: "#E53935" },
});

export default RewardsScreen;
