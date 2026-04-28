import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Colors, Metrics } from "../../theme";
import MaterialIcon from "./MaterialIcon";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const DRAWER_WIDTH = SCREEN_WIDTH * 0.82;

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
    id: "dashboard",
    label: "Dashboard",
    iconName: "dashboard",
    action: "navigate",
    badge: "PG",
  },
  {
    id: "goldDelivery",
    label: "Gold Delivery",
    iconName: "store",
    action: "navigate",
  },
  {
    id: "goldPriceChart",
    label: "Gold Price Chart",
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
    id: "snapsave",
    label: "SnapSave",
    iconName: "snapsave",
    action: "navigate",
  },
  {
    id: "saveonspend",
    label: "Save on Every Spend",
    iconName: "saveonspend",
    action: "start",
    badge: "Start now",
  },
  {
    id: "referral",
    label: "Referral Code",
    iconName: "referral",
    action: "navigate",
  },
  {
    id: "activation",
    label: "Activation Code",
    iconName: "activation",
    action: "navigate",
  },
  {
    id: "reminder",
    label: "Reminder settings",
    iconName: "reminder",
    action: "navigate",
  },
];

// Add settings under GENERAL or APP_SETTINGS? We'll keep Settings in GENERAL so it's easy to access

const GENERAL = [
  {
    id: "bookAppointment",
    label: "Book Appointment",
    iconName: "calendar",
    action: "navigate",
  },
  { id: "orders", label: "My Orders", iconName: "orders", action: "navigate" },
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
  {
    id: "settings",
    label: "Settings",
    iconName: "settings",
    action: "navigate",
  },
];

const SideDrawer = ({ visible, onClose, onItemPress }) => {
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 280,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 280,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -DRAWER_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, translateX, overlayOpacity]);

  const renderItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => onItemPress && onItemPress(item.id)}
      activeOpacity={0.6}
    >
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconWrap}>
          <MaterialIcon name={item.iconName} size={24} color={Colors.primary} />
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

  if (!visible) {
    return null;
  }

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      {/* Overlay */}
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} />
      </TouchableWithoutFeedback>

      {/* Drawer */}
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <ScrollView
          style={styles.drawerScroll}
          contentContainerStyle={styles.drawerContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Profile Settings Section */}
          <Text style={styles.sectionTitle}>Profile Settings</Text>
          {PROFILE_SETTINGS.map(renderItem)}

          {/* Assets Section */}
          <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
            Assets
          </Text>
          {ASSETS.map(renderItem)}

          {/* App Settings Section */}
          <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
            App Settings
          </Text>
          {APP_SETTINGS.map(renderItem)}

          {/* General Section */}
          <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
            General
          </Text>
          {GENERAL.map(renderItem)}

          {/* Log out */}
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => onItemPress && onItemPress("logout")}
            activeOpacity={0.6}
          >
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>

          {/* Version */}
          <Text style={styles.versionText}>Version 2.18</Text>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: DRAWER_WIDTH,
    backgroundColor: Colors.white,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  drawerScroll: {
    flex: 1,
  },
  drawerContent: {
    paddingTop: Metrics.spacing.xxl + Metrics.spacing.md,
    paddingBottom: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  sectionTitleSpaced: {
    marginTop: Metrics.spacing.lg,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEEEEE",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIconWrap: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
  },
  menuItemLabel: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "500",
    color: Colors.text,
    flex: 1,
  },
  chevron: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "300",
  },
  badge: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
  },
  badgeAction: {
    color: Colors.primary,
  },
  badgePG: {
    color: Colors.textSecondary,
    fontSize: Metrics.fontSize.small - 1,
  },
  badgeNew: {
    backgroundColor: "#4CAF50",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeNewText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.small - 1,
    fontWeight: "700",
  },
  logoutBtn: {
    marginTop: Metrics.spacing.xl,
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#EEEEEE",
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

export default SideDrawer;
