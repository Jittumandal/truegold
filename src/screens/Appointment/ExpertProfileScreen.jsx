import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const SCHEDULE = [
  {
    day: "MONDAY",
    slots: [
      "06:00 PM - 07:30 PM",
      "05:40 PM - 06:00 PM",
      "05:30 PM - 06:00 PM",
      "07:30 PM - 07:50 PM",
    ],
  },
  {
    day: "TUESDAY",
    slots: [
      "07:30 PM - 07:50 PM",
      "07:30 PM - 07:40 PM",
      "05:40 PM - 06:00 PM",
    ],
  },
  {
    day: "WEDNESDAY",
    slots: [
      "05:40 PM - 06:00 PM",
      "07:30 PM - 07:50 PM",
      "05:40 PM - 06:00 PM",
    ],
  },
  {
    day: "THURSDAY",
    slots: [
      "05:30 PM - 06:00 PM",
      "07:30 PM - 07:40 PM",
      "05:50 PM - 06:00 PM",
    ],
  },
  {
    day: "FRIDAY",
    slots: [
      "07:30 PM - 07:40 PM",
      "07:30 PM - 07:50 PM",
      "05:30 PM - 06:00 PM",
    ],
  },
  { day: "SATURDAY", slots: ["07:30 PM - 07:40 PM", "05:50 PM - 06:00 PM"] },
];

const ExpertProfileScreen = ({ navigation, route }) => {
  const {
    expertName = "Mr. Rahul Verma",
    expertId = "TG-265110",
    experience = "25 Years exp",
  } = route?.params ?? {};

  return (
    <View style={GlobalStyles.container}>
      {/* Close button */}
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      <ScrollView bounces={false} contentContainerStyle={styles.content}>
        {/* Expert Header */}
        <View style={styles.expertHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {expertName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </Text>
          </View>
          <View style={styles.expertInfo}>
            <Text style={styles.expertName}>{expertName}</Text>
            <Text style={styles.expertId}>{expertId}</Text>
          </View>
          <View style={styles.expBadge}>
            <Text style={styles.expText}>{experience}</Text>
          </View>
        </View>

        {/* Appointment Section */}
        <View style={styles.appointmentHeader}>
          <Text style={styles.appointmentTitle}>Appointment</Text>
        </View>

        <Text style={styles.expertNameGold}>{expertName}</Text>

        <Text style={styles.addressText}>
          Shop No. 1164/2, 4th Floor, Kucha Mahajani,{"\n"}Chandni Chowk, Delhi
          - 110006, India
        </Text>

        {/* Schedule */}
        {SCHEDULE.map((item) => (
          <View key={item.day} style={styles.scheduleBlock}>
            <Text style={styles.dayLabel}>{item.day}</Text>
            <View style={styles.slotsColumn}>
              {item.slots.map((slot, i) => (
                <Text key={i} style={styles.slotTime}>
                  {slot}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    top: Metrics.spacing.xl,
    right: Metrics.spacing.lg,
    zIndex: 10,
    padding: Metrics.spacing.sm,
  },
  closeText: {
    fontSize: 22,
    color: Colors.text,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xl,
    paddingBottom: Metrics.spacing.xxl,
  },
  expertHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.lg,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
    borderWidth: 2,
    borderColor: Colors.goldLight,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primary,
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  expertId: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    marginTop: 2,
  },
  expBadge: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.xs,
  },
  expText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.primary,
  },
  appointmentHeader: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
  },
  appointmentTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.white,
    textAlign: "center",
  },
  expertNameGold: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: Metrics.spacing.sm,
  },
  addressText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    lineHeight: 20,
    marginBottom: Metrics.spacing.lg,
  },
  scheduleBlock: {
    flexDirection: "row",
    marginBottom: Metrics.spacing.md,
  },
  dayLabel: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
    width: 110,
  },
  slotsColumn: {
    flex: 1,
  },
  slotTime: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    marginBottom: 4,
  },
});

export default ExpertProfileScreen;
