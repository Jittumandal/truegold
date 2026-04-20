import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const AppointmentSuccessScreen = ({ navigation, route }) => {
  const {
    date: dateISO,
    timeSlot = "06:10 PM",
    expertName = "Mr. Rahul Verma",
    customerName = "Sathvik Singh Parihar",
    expertPhone = "+918744090761",
  } = route?.params ?? {};

  const dateObj = dateISO ? new Date(dateISO) : new Date();
  const formattedDate = `${DAY_NAMES[dateObj.getDay()]}, ${dateObj.getDate()} ${SHORT_MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  const handleOK = () => {
    navigation.navigate("MainTabs", {
      screen: "Home",
      params: { screen: "Dashboard" },
    });
  };

  return (
    <View style={GlobalStyles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.content}>
        {/* Success Icon */}
        <View style={styles.successIcon}>
          <MaterialIcon name="check" size={48} color={Colors.white} />
        </View>

        <Text style={styles.successTitle}>
          Gold Testing Appointment Booked Successfully
        </Text>
        <Text style={styles.successSubtitle}>
          {timeSlot} | {formattedDate}
        </Text>
        <Text style={styles.centerName}>TrueGold Testing Center</Text>

        {/* Share Gold Details Card */}
        <View style={styles.shareCard}>
          <Text style={styles.shareTitle}>Share Gold Details</Text>
          <View style={styles.shareRow}>
            <View style={styles.shareAvatar}>
              <MaterialIcon name="person" size={24} color={Colors.primary} />
            </View>
            <View>
              <Text style={styles.shareDesc}>
                Add details about your gold before testing
              </Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.addDetailsLink}>Add Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Customer Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Customer</Text>
          <View style={styles.infoRow}>
            <View style={styles.infoAvatar}>
              <Text style={styles.infoAvatarText}>
                {customerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </Text>
            </View>
            <View>
              <Text style={styles.infoName}>{customerName}</Text>
              <Text style={styles.infoPhone}>{expertPhone}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Expert Info */}
          <Text style={styles.infoLabel}>Gold Expert</Text>
          <View style={styles.infoRow}>
            <View style={styles.infoAvatar}>
              <Text style={styles.infoAvatarText}>
                {expertName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </Text>
            </View>
            <View>
              <Text style={styles.infoName}>{expertName}</Text>
              <Text style={styles.infoRole}>Gold Quality Analyst</Text>
            </View>
          </View>

          {/* Action Links */}
          <TouchableOpacity
            style={styles.actionLink}
            onPress={() => navigation.navigate("ExpertProfile", { expertName })}
            activeOpacity={0.6}
          >
            <Text style={styles.actionLinkText}>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionLink}
            onPress={() =>
              navigation.navigate("AppointmentDetails", {
                date: dateISO,
                timeSlot,
                expertName,
                expertPhone,
                customerName,
              })
            }
            activeOpacity={0.6}
          >
            <Text style={styles.actionLinkText}>Manage Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionLink} activeOpacity={0.6}>
            <Text style={styles.actionLinkTextMuted}>
              Download Report (after testing)
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* OK Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.okBtn}
          onPress={handleOK}
          activeOpacity={0.8}
        >
          <Text style={styles.okBtnText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xxl,
    paddingBottom: 120,
  },
  successIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.spacing.md,
  },
  successTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
    marginBottom: Metrics.spacing.xs,
  },
  successSubtitle: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  centerName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginTop: Metrics.spacing.xs,
    marginBottom: Metrics.spacing.lg,
  },
  shareCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    width: "100%",
    marginBottom: Metrics.spacing.md,
  },
  shareTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.sm,
  },
  shareDesc: {
    fontSize: Metrics.fontSize.small,
    color: Colors.text,
  },
  addDetailsLink: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    fontWeight: "600",
    marginTop: 2,
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.goldLight,
  },
  infoLabel: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.sm,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.sm,
  },
  infoAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.sm,
    borderWidth: 2,
    borderColor: Colors.goldLight,
  },
  infoAvatarText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.primary,
  },
  infoName: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
  },
  infoPhone: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 1,
  },
  infoRole: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    fontWeight: "600",
    marginTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.goldLight,
    marginVertical: Metrics.spacing.md,
  },
  actionLink: {
    marginTop: Metrics.spacing.sm,
  },
  actionLinkText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: "600",
  },
  actionLinkTextMuted: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: "500",
    opacity: 0.7,
  },
  footer: {
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
    paddingHorizontal: Metrics.spacing.lg,
  },
  okBtn: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: "center",
  },
  okBtnText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
});

export default AppointmentSuccessScreen;
