import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Metrics } from "../../theme";

const AppointmentCard = ({
  name = "Mr. Rahul Verma",
  role = "Gold Quality Expert",
  assignee = "Sathvik Singh Parihar",
  date = "24 Mar 2026",
  time = "06:10 PM",
}) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </Text>
      </View>

      {/* Info */}
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardRole}>{role}</Text>
        <Text style={styles.cardAssignee}>{assignee}</Text>
      </View>

      {/* Date/Time */}
      <View style={styles.cardDateSection}>
        <Text style={styles.cardDate}>{date}</Text>
        <Text style={styles.cardTime}>{time}</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.addLink} activeOpacity={0.6}>
      <Text style={styles.addLinkText}>Add Gold Details</Text>
    </TouchableOpacity>
  </View>
);

const ReminderCard = ({
  name = "Mr. Rahul Verma",
  role = "Gold Analyst",
  assignee = "Sathvik Singh Parihar",
  dueDate = "12 Jun 2026",
}) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </Text>
      </View>

      {/* Info */}
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardRole}>{role}</Text>
        <Text style={styles.cardAssignee}>{assignee}</Text>
      </View>

      {/* Due Date */}
      <View style={styles.cardDateSection}>
        <Text style={styles.dueDateLabel}>Due Date</Text>
        <Text style={styles.dueDate}>{dueDate}</Text>
      </View>
    </View>

    <View style={styles.reminderActions}>
      <TouchableOpacity style={styles.addLink} activeOpacity={0.6}>
        <Text style={styles.addLinkText}>Add Gold Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.recheckButton} activeOpacity={0.7}>
        <Text style={styles.recheckButtonText}>Gold Purity Recheck</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const UpcomingSection = ({ appointments = [], reminders = [] }) => {
  const defaultAppointments =
    appointments.length > 0
      ? appointments
      : [
          {
            name: "Mr. Rahul Verma",
            role: "Gold Quality Expert",
            assignee: "Sathvik Singh Parihar",
            date: "24 Mar 2026",
            time: "06:10 PM",
          },
        ];

  const defaultReminders =
    reminders.length > 0
      ? reminders
      : [
          {
            name: "Mr. Rahul Verma",
            role: "Gold Analyst",
            assignee: "Sathvik Singh Parihar",
            dueDate: "12 Jun 2026",
          },
        ];

  return (
    <View style={styles.container}>
      {/* Upcoming Gold Appointments */}
      <Text style={styles.sectionTitle}>Upcoming Gold Appointments</Text>
      {defaultAppointments.map((item, index) => (
        <AppointmentCard key={`apt-${index}`} {...item} />
      ))}

      {/* Upcoming Gold Checks / Reminders */}
      <Text style={[styles.sectionTitle, styles.sectionSpaced]}>
        Upcoming Gold Checks / Reminders
      </Text>
      {defaultReminders.map((item, index) => (
        <ReminderCard key={`rem-${index}`} {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.spacing.md,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  sectionSpaced: {
    marginTop: Metrics.spacing.lg,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
    borderWidth: 1,
    borderColor: Colors.goldLight,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
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
  avatarText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.primary,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
  },
  cardRole: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.primary,
    marginTop: 1,
  },
  cardAssignee: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  cardDateSection: {
    alignItems: "flex-end",
  },
  cardDate: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.text,
  },
  cardTime: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  dueDateLabel: {
    fontSize: 10,
    color: Colors.textSecondary,
  },
  dueDate: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.primary,
    marginTop: 2,
  },
  addLink: {
    marginTop: Metrics.spacing.md,
    backgroundColor: Colors.primaryDark,
    borderRadius: 5,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    alignSelf: "flex-start",
    height: 44,
    justifyContent: "center",
  },
  addLinkText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.white,
    fontWeight: "600",
  },
  reminderActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Metrics.spacing.sm,
  },
  recheckButton: {
    backgroundColor: Colors.goldLight,
    marginTop: Metrics.spacing.md,
    borderRadius: 5,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    alignSelf: "flex-start",
    height: 44,
    justifyContent: "center",
  },
  recheckButtonText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "700",
    color: Colors.text,
  },
});

export default UpcomingSection;
