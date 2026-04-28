import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import SideDrawer from "../../components/common/SideDrawer";
import UpcomingSection from "../../components/dashboard/UpcomingSection";
import { Colors, GlobalStyles, Metrics } from "../../theme";
import { SCREENS } from "../../navigation/screenNames";

const DashboardScreen = ({ navigation, route }) => {
  const userName = route?.params?.userName ?? "Jitendra Mandal";
  const phoneNumber = route?.params?.phoneNumber ?? "9999098558";
  const goldPrice = route?.params?.goldPrice ?? "15,036.68";
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      {/* Gold Header */}
      <View style={styles.header}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <View style={styles.userInfo}>
            <TouchableOpacity
              style={styles.menuIcon}
              onPress={() => setDrawerOpen(true)}
              activeOpacity={0.7}
            >
              <MaterialIcon name="menu" size={18} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{userName} ▾</Text>
              <Text style={styles.userPhone}>{phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.priceTag}>
            <MaterialIcon name="gold" size={16} color={Colors.primary} />
            <Text style={styles.priceText}>{goldPrice}/gm</Text>
          </View>
        </View>

        {/* Logo and Welcome */}
        <View style={styles.welcomeSection}>
          <Text style={styles.logoTG}>TG</Text>
          <Text style={styles.welcomeText}>
            Hi {userName},{"\n"}Welcome to TrueGold
          </Text>
        </View>

        {/* View Details */}
        <TouchableOpacity
          style={styles.viewDetailsButton}
          activeOpacity={0.7}
          onPress={() =>
            navigation?.navigate("Shared", { screen: "ViewDetails" })
          }
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
          <Text style={styles.viewDetailsArrow}> ▸</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Cards Grid */}
        <View style={styles.cardsRow}>
          {/* Gold Family - Large Card */}
          <View style={[styles.card, styles.cardLarge]}>
            <Text style={styles.cardTitle}>Gold Family</Text>
            <View style={styles.cardIconContainer}>
              <MaterialIcon name="trophy" size={36} color={Colors.primary} />
            </View>
            <TouchableOpacity
              style={styles.investButton}
              activeOpacity={0.7}
              onPress={() =>
                navigation?.navigate("Shared", {
                  screen: SCREENS.INVEST_DASHBOARD,
                })
              }
            >
              <Text style={styles.investButtonText}>Invest More ▸</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.investButton}
              activeOpacity={0.7}
              onPress={() =>
                navigation?.navigate("Shared", {
                  screen: SCREENS.WITHDRAW_INTRO,
                })
              }
            >
              <Text style={styles.investButtonText}>Withdraw </Text>
            </TouchableOpacity>

            {/* Claim Benefits */}
            <View style={styles.claimSection}>
              <Text style={styles.claimText}>Claim your benefit ▸</Text>
              <View style={styles.claimIcons}>
                <View style={{ marginRight: 6 }}>
                  <MaterialIcon name="gift" size={18} color={Colors.primary} />
                </View>
                <View style={{ marginRight: 6 }}>
                  <MaterialIcon name="money" size={18} color={Colors.primary} />
                </View>
                <View style={{ marginRight: 6 }}>
                  <MaterialIcon name="medal" size={18} color={Colors.primary} />
                </View>
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Verify Certificate */}
            <View style={[styles.card, styles.cardSmall]}>
              <Text style={styles.cardTitleSmall}>Verify Certificate</Text>
              <View style={styles.cardIconSmall}>
                <MaterialIcon name="verify" size={28} color={Colors.primary} />
              </View>
            </View>

            {/* True Gold Board */}
            <View style={[styles.card, styles.cardSmall]}>
              <Text style={styles.cardTitleSmall}>True Gold Board</Text>
              <View style={styles.cardIconSmall}>
                <MaterialIcon
                  name="building"
                  size={28}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Appointments & Reminders */}
        <UpcomingSection />
      </ScrollView>

      {/* Side Drawer */}
      <SideDrawer
        visible={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onItemPress={(itemId) => {
          setDrawerOpen(false);
          const navMap = {
            dashboard: SCREENS.DASHBOARD,
            account: SCREENS.ACCOUNT_DETAILS,
            preferences: SCREENS.USER_PREFERENCES,
            nominee: SCREENS.NOMINEE_DETAILS,
            security: SCREENS.PERMISSION,
            mission: SCREENS.MISSION_VISION,
            identity: SCREENS.IDENTITY_VERIFICATION,
            bookAppointment: SCREENS.BOOK_APPOINTMENT,
            assetPrices: SCREENS.GOLD_PRICE_CHART,
            about: SCREENS.ABOUT,
            aboutGullak: SCREENS.ABOUT_TRUEGOLD,
            deleteAccount: SCREENS.DELETE_ACCOUNT,
            reports: SCREENS.REPORTS,
            // new mappings for drawer items (navigate directly)
            goldDelivery: SCREENS.GOLD_DELIVERY,
            goldPriceChart: SCREENS.GOLD_PRICE_CHART,
            referral: SCREENS.REFERRAL,
            rewards: SCREENS.REWARDS,
            settings: SCREENS.SETTINGS,
            // app settings & utilities
            autopay: SCREENS.AUTOPAYS,
            snapsave: SCREENS.SNAPSAVE,
            saveonspend: SCREENS.SAVE_ON_SPEND,
            helpSupport: SCREENS.HELP_SUPPORT,
          };
          if (navigation) {
            const navTarget = navMap[itemId];
            if (Array.isArray(navTarget)) {
              navigation.navigate(...navTarget);
            } else {
              navigation.navigate(navTarget || SCREENS.PROFILE);
            }
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.gold,
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.lg,
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: Metrics.spacing.md,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primaryDark,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.sm,
  },
  menuIconText: {
    color: Colors.white,
    fontSize: 16,
  },
  userDetails: {
    justifyContent: "center",
  },
  userName: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
  },
  userPhone: {
    fontSize: Metrics.fontSize.small,
    color: Colors.text,
    opacity: 0.7,
  },
  priceTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: Metrics.spacing.xs,
  },
  priceIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  priceText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.primary,
  },
  welcomeSection: {
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  logoTG: {
    fontSize: 32,
    fontWeight: "900",
    color: Colors.primaryDark,
    marginBottom: Metrics.spacing.sm,
  },
  welcomeText: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
    lineHeight: 28,
  },
  viewDetailsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
  },
  viewDetailsText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.text,
  },
  viewDetailsArrow: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardLarge: {
    width: "48%",
  },
  cardTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  cardIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: Metrics.spacing.sm,
  },
  cardEmoji: {
    fontSize: 32,
  },
  investButton: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: Metrics.spacing.xs,
    alignSelf: "flex-start",
    marginBottom: Metrics.spacing.md,
  },
  investButtonText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.text,
  },
  claimSection: {
    borderTopWidth: 1,
    borderTopColor: Colors.secondary,
    paddingTop: Metrics.spacing.sm,
  },
  claimText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.xs,
  },
  claimIcons: {
    flexDirection: "row",
  },
  claimEmoji: {
    fontSize: 18,
    marginRight: 6,
  },
  rightColumn: {
    width: "48%",
    justifyContent: "space-between",
  },
  cardSmall: {
    marginBottom: Metrics.spacing.sm,
    alignItems: "center",
  },
  cardTitleSmall: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
    textAlign: "center",
  },
  cardIconSmall: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  cardEmojiSmall: {
    fontSize: 24,
  },
  moreLink: {
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
  },
  moreLinkText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: Colors.primary,
  },
  bookingCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    marginBottom: Metrics.spacing.sm,
  },
  bookingText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
});

export default DashboardScreen;
