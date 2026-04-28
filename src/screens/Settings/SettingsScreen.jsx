import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);

  const NOTIFICATION_SETTINGS = [
    {
      id: "push",
      label: "Push Notifications",
      value: notifications,
      onToggle: setNotifications,
    },
    {
      id: "price",
      label: "Price Alerts",
      value: priceAlerts,
      onToggle: setPriceAlerts,
    },
  ];

  const SECURITY_SETTINGS = [
    {
      id: "biometric",
      label: "Biometric Login",
      value: biometric,
      onToggle: setBiometric,
    },
  ];

  const APP_PREFERENCES = [
    {
      id: "autosave",
      label: "Auto-save Drafts",
      value: autoSave,
      onToggle: setAutoSave,
    },
    { id: "dark", label: "Dark Mode", value: darkMode, onToggle: setDarkMode },
  ];

  const GENERAL_ITEMS = [
    { id: "language", label: "Language", detail: "English" },
    { id: "currency", label: "Currency", detail: "INR (₹)" },
    { id: "weight", label: "Gold Weight Unit", detail: "Grams" },
  ];

  const renderToggleItem = (item) => (
    <View key={item.id} style={styles.settingItem}>
      <Text style={styles.settingLabel}>{item.label}</Text>
      <Switch
        value={item.value}
        onValueChange={item.onToggle}
        trackColor={{ false: "#E0E0E0", true: Colors.goldLight }}
        thumbColor={item.value ? Colors.primary : "#F4F3F4"}
      />
    </View>
  );

  const renderDetailItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      activeOpacity={0.6}
    >
      <Text style={styles.settingLabel}>{item.label}</Text>
      <View style={styles.detailRight}>
        <Text style={styles.detailText}>{item.detail}</Text>
        <Text style={styles.chevron}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={GlobalStyles.containerWhite}>
      {/* (header removed) */}

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.sectionCard}>
          {NOTIFICATION_SETTINGS.map(renderToggleItem)}
        </View>

        {/* Security */}
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.sectionCard}>
          {SECURITY_SETTINGS.map(renderToggleItem)}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("Permission")}
            activeOpacity={0.6}
          >
            <Text style={styles.settingLabel}>Permissions</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* App Preferences */}
        <Text style={styles.sectionTitle}>App Preferences</Text>
        <View style={styles.sectionCard}>
          {APP_PREFERENCES.map(renderToggleItem)}
        </View>

        {/* General */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.sectionCard}>
          {GENERAL_ITEMS.map(renderDetailItem)}
        </View>

        {/* About & Legal */}
        <Text style={styles.sectionTitle}>About & Legal</Text>
        <View style={styles.sectionCard}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("About")}
            activeOpacity={0.6}
          >
            <Text style={styles.settingLabel}>About</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("TermsConditions")}
            activeOpacity={0.6}
          >
            <Text style={styles.settingLabel}>Terms & Conditions</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate("PrivacyPolicy")}
            activeOpacity={0.6}
          >
            <Text style={styles.settingLabel}>Privacy Policy</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <Text style={styles.versionText}>App Version 2.18</Text>
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
  backBtn: {
    padding: Metrics.spacing.xs,
  },
  backArrow: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: "700",
  },
  headerTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
    marginTop: Metrics.spacing.md,
  },
  sectionCard: {
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    paddingHorizontal: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E8E8E8",
  },
  settingLabel: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "500",
    color: Colors.text,
    flex: 1,
  },
  detailRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginRight: Metrics.spacing.xs,
  },
  chevron: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "300",
  },
  versionText: {
    textAlign: "center",
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: Metrics.spacing.xl,
  },
});

export default SettingsScreen;
