import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";

const PROFILE_SETTINGS = [
  {
    id: "account",
    label: "Account Details",
    iconName: "account",
    action: "navigate",
  },
  {
    id: "preferences",
    label: "User Preferences",
    iconName: "preferences",
    action: "navigate",
  },
  {
    id: "nominee",
    label: "Nominee Details",
    iconName: "nominee",
    action: "navigate",
  },
  {
    id: "identity",
    label: "Identity Verification",
    iconName: "identity",
    action: "start",
    badge: "Start now",
  },
];

const ASSETS = [
  {
    id: "assetPrices",
    label: "Asset Prices",
    iconName: "chartUp",
    action: "navigate",
  },
  {
    id: "rewards",
    label: "Rewards",
    iconName: "rewards",
    action: "navigate",
    badge: "NEW",
    badgeType: "new",
  },
];

const APP_SETTINGS = [
  { id: "autopay", label: "AutoPay", iconName: "autopay", action: "navigate" },
  {
    id: "saveonspend",
    label: "Save on Every Spend",
    iconName: "saveonspend",
    action: "start",
  },
  {
    id: "reminder",
    label: "Reminder settings",
    iconName: "reminder",
    action: "navigate",
  },
];

const GENERAL = [
  {
    id: "security",
    label: "Security & Permission",
    iconName: "security",
    action: "navigate",
  },
  {
    id: "helpSupport",
    label: "Help & Support",
    iconName: "help",
    action: "navigate",
  },
  {
    id: "mission",
    label: "Our Mission & Vision",
    iconName: "mission",
    action: "navigate",
  },
  { id: "reports", label: "Reports", iconName: "chart", action: "navigate" },
  {
    id: "deleteAccount",
    label: "Delete Account",
    iconName: "trash",
    action: "navigate",
  },
  {
    id: "aboutGullak",
    label: "About TrueGold",
    iconName: "info",
    action: "navigate",
  },
  { id: "about", label: "About", iconName: "info", action: "navigate" },
  {
    id: "shareFeedback",
    label: "Share Feedback",
    iconName: "share",
    action: "navigate",
  },
];

const ProfileScreen = ({ navigation }) => {
  const userName = "Jitendra Mandal";
  const phoneNumber = "918744090761";

  // Map all menu IDs to navigation targets
  const navMap = {
    account: "AccountDetails",
    preferences: "UserPreferences",
    nominee: "NomineeDetails",
    identity: "IdentityVerification",
    autopay: "Autopays",
    snapsave: "Settings",
    saveonspend: "Settings",
    activation: "Settings",
    reminder: "Settings",
    assetPrices: "GoldPriceChart",
    rewards: "Rewards",
    referral: "Referral",
    bookAppointment: "BookAppointment",
    orders: "GoldDelivery",
    security: "Permission",
    helpSupport: "HelpSupport",
    mission: "MissionVision",
    reports: "Reports",
    deleteAccount: "DeleteAccount",
    aboutGullak: "AboutTrueGold",
    about: "About",
    shareFeedback: "HelpSupport",
  };

  const handleItemPress = (id) => {
    if (navMap[id]) {
      navigation.navigate(navMap[id]);
    }
  };

  const renderItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => handleItemPress(item.id)}
      activeOpacity={0.6}
    >
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconWrap}>
          <MaterialIcon name={item.iconName} size={24} color="#C8922A" />
        </View>
        <Text style={styles.menuItemLabel}>{item.label}</Text>
      </View>
      {item.badge ? (
        item.badgeType === "new" ? (
          <View style={styles.badgeNew}>
            <Text style={styles.badgeNewText}>{item.badge}</Text>
          </View>
        ) : (
          <Text
            style={[
              styles.badge,
              item.badge === "Start now" && styles.badgeAction,
              item.badge === "PG" && styles.badgePG,
            ]}
          >
            {item.badge}
          </Text>
        )
      ) : (
        <Text style={styles.chevron}>›</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <MaterialIcon name="arrow-back" size={22} color="#C8922A" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcon name="help" size={22} color="#C8922A" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        {/* Profile Avatar Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>{userName.charAt(0)}</Text>
          </View>
          <Text style={styles.profileName}>{userName}</Text>
          <Text style={styles.profilePhone}>+91 {phoneNumber.slice(-10)}</Text>
          <Text style={styles.profileMeta}>Age 30 · Joined March 2026</Text>
        </View>

        {/* Profile Settings Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Profile Settings</Text>
          {PROFILE_SETTINGS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuRow}
              onPress={() => handleItemPress(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.menuLeft}>
                <MaterialIcon name={item.iconName} size={22} color="#C8922A" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              {item.badge ? (
                <Text style={styles.menuBadge}>{item.badge}</Text>
              ) : (
                <MaterialIcon name="chevron-right" size={20} color="#C8922A" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Assets Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Assets</Text>

          {ASSETS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuRow}
              onPress={() => handleItemPress(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.menuLeft}>
                <MaterialIcon name={item.iconName} size={22} color="#C8922A" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              {item.badge ? (
                <View style={styles.menuBadgeNew}>
                  <Text style={styles.menuBadgeNewText}>{item.badge}</Text>
                </View>
              ) : (
                <MaterialIcon name="chevron-right" size={20} color="#C8922A" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* App Settings Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          {APP_SETTINGS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuRow}
              onPress={() => handleItemPress(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.menuLeft}>
                <MaterialIcon name={item.iconName} size={22} color="#C8922A" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <MaterialIcon name="chevron-right" size={20} color="#C8922A" />
            </TouchableOpacity>
          ))}
        </View>

        {/* General Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>General</Text>
          {GENERAL.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuRow}
              onPress={() => handleItemPress(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.menuLeft}>
                <MaterialIcon name={item.iconName} size={22} color="#C8922A" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <MaterialIcon name="chevron-right" size={20} color="#C8922A" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Log out */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: "Auth" }] })
          }
          activeOpacity={0.7}
        >
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text style={styles.versionText}>Version 2.18</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.sm,
    backgroundColor: Colors.white,
    elevation: 2,
    zIndex: 2,
  },
  backBtn: {
    padding: 8,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  profileCard: {
    alignItems: "center",
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.spacing.lg,
    borderRadius: 16,
    paddingVertical: Metrics.spacing.xl,
    elevation: 1,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.spacing.md,
  },
  avatarLetter: {
    fontSize: 36,
    color: Colors.white,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: Metrics.fontSize.body,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  profileMeta: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.md,
  },
  sectionCard: {
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.spacing.lg,

    paddingVertical: Metrics.spacing.md,
    paddingHorizontal: Metrics.spacing.md,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEE",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuLabel: {
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    marginLeft: Metrics.spacing.md,
    flex: 1,
  },
  menuBadge: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: Metrics.fontSize.small,
    marginRight: 4,
  },
  menuBadgeNew: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4,
  },
  menuBadgeNewText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 12,
  },
  menuValue: {
    color: Colors.textSecondary,
    fontSize: Metrics.fontSize.small,
    marginRight: 8,
  },
  logoutBtn: {
    marginTop: Metrics.spacing.xl,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#EEEEEE",
    marginHorizontal: Metrics.spacing.lg,
  },
  logoutText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  versionText: {
    textAlign: "center",
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: Metrics.spacing.xs,
    marginBottom: Metrics.spacing.md,
  },
});

export default ProfileScreen;
