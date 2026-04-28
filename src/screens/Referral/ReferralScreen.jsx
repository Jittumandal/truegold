import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";
import AppButton from "../../components/common/AppButton";

const ReferralScreen = ({ navigation }) => {
  const referralCode = "TRUEGOLD2026";
  const referralLink = "https://truegold.in/refer/TRUEGOLD2026";
  const totalEarnings = "₹350";
  const referralCount = 7;

  const REFERRAL_HISTORY = [
    {
      id: "1",
      name: "Amit Kumar",
      status: "completed",
      reward: "₹50",
      date: "10 Apr 2026",
    },
    {
      id: "2",
      name: "Priya Sharma",
      status: "completed",
      reward: "₹50",
      date: "08 Apr 2026",
    },
    {
      id: "3",
      name: "Rahul Singh",
      status: "pending",
      reward: "₹50",
      date: "06 Apr 2026",
    },
    {
      id: "4",
      name: "Neha Gupta",
      status: "completed",
      reward: "₹50",
      date: "02 Apr 2026",
    },
    {
      id: "5",
      name: "Vikas Jain",
      status: "completed",
      reward: "₹50",
      date: "28 Mar 2026",
    },
  ];

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join TrueGold and start investing in Digital Gold! Use my referral code ${referralCode} to get ₹50 bonus. Download now: ${referralLink}`,
      });
    } catch (e) {
      // Share cancelled
    }
  };

  return (
    <View style={GlobalStyles.containerWhite}>
      {/* (header removed) */}

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <MaterialIcon name="gift" size={48} color={Colors.primary} />
          <Text style={styles.heroTitle}>Invite Friends, Earn Gold!</Text>
          <Text style={styles.heroSubtitle}>
            Get ₹50 worth of free gold for every friend who joins and invests on
            TrueGold
          </Text>
        </View>

        {/* How it works */}
        <Text style={styles.sectionTitle}>How it works</Text>
        <View style={styles.stepsContainer}>
          {[
            { step: "1", label: "Share your referral code with friends" },
            { step: "2", label: "Friend signs up and completes KYC" },
            { step: "3", label: "Friend makes first investment of ₹100+" },
            { step: "4", label: "Both of you get ₹50 gold bonus!" },
          ].map((item, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>{item.step}</Text>
              </View>
              <Text style={styles.stepLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Referral Code */}
        <Text style={styles.sectionTitle}>Your Referral Code</Text>
        <View style={styles.codeCard}>
          <Text style={styles.codeText}>{referralCode}</Text>
          <TouchableOpacity style={styles.copyBtn} activeOpacity={0.7}>
            <Text style={styles.copyBtnText}>COPY</Text>
          </TouchableOpacity>
        </View>

        {/* Share Button */}
        <AppButton
          title="Share with Friends"
          onPress={handleShare}
          variant="primary"
          style={{
            marginTop: Metrics.spacing.md,
            marginBottom: Metrics.spacing.lg,
          }}
        />

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{referralCount}</Text>
            <Text style={styles.statLabel}>Friends Referred</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{totalEarnings}</Text>
            <Text style={styles.statLabel}>Total Earned</Text>
          </View>
        </View>

        {/* Referral History */}
        <Text style={styles.sectionTitle}>Referral History</Text>
        {REFERRAL_HISTORY.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <View style={styles.historyAvatar}>
              <Text style={styles.historyInitial}>{item.name[0]}</Text>
            </View>
            <View style={styles.historyInfo}>
              <Text style={styles.historyName}>{item.name}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
            <View style={styles.historyRight}>
              <Text style={styles.historyReward}>{item.reward}</Text>
              <Text
                style={[
                  styles.historyStatus,
                  item.status === "completed"
                    ? styles.statusDone
                    : styles.statusPending,
                ]}
              >
                {item.status === "completed" ? "Credited" : "Pending"}
              </Text>
            </View>
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
  heroCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.xl,
    alignItems: "center",
    marginBottom: Metrics.spacing.lg,
  },
  heroTitle: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "800",
    color: Colors.text,
    marginTop: Metrics.spacing.md,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    textAlign: "center",
    marginTop: Metrics.spacing.sm,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  stepsContainer: {
    marginBottom: Metrics.spacing.lg,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
  },
  stepNumber: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.white,
  },
  stepLabel: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    flex: 1,
  },
  codeCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderStyle: "dashed",
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.md,
  },
  codeText: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "800",
    color: Colors.primary,
    letterSpacing: 2,
  },
  copyBtn: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.borderRadius.small,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
  },
  copyBtnText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.white,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Metrics.spacing.lg,
  },
  statCard: {
    width: "47%",
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    alignItems: "center",
  },
  statValue: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "800",
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEEEEE",
  },
  historyAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
  },
  historyInitial: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.primary,
  },
  historyInfo: { flex: 1 },
  historyName: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.text,
  },
  historyDate: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  historyRight: { alignItems: "flex-end" },
  historyReward: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.primary,
  },
  historyStatus: { fontSize: 11, fontWeight: "600", marginTop: 2 },
  statusDone: { color: "#4CAF50" },
  statusPending: { color: "#FF9800" },
});

export default ReferralScreen;
