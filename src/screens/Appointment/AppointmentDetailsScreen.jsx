import { useState } from "react";
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

const AppointmentDetailsScreen = ({ navigation, route }) => {
  const {
    date: dateISO,
    timeSlot = "06:10 PM",
    expertName = "Mr. Rahul Verma",
    expertPhone = "+918744090761",
    customerName = "Sathvik Singh Parihar",
  } = route?.params ?? {};

  const dateObj = dateISO ? new Date(dateISO) : new Date();
  const formattedDate = `${dateObj.getDate()} ${SHORT_MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  const [cancelModalVisible, setCancelModalVisible] = useState(false);

  const handleCancelConfirm = () => {
    setCancelModalVisible(false);
    navigation.navigate("MainTabs", {
      screen: "Home",
      params: { screen: "Dashboard" },
    });
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.backBtn}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.headerTitle}>Appointment Details</Text>
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false} contentContainerStyle={styles.content}>
        {/* Share Gold Details Card */}
        <View style={styles.shareCard}>
          <Text style={styles.shareTitle}>Share Gold Details</Text>
          <View style={styles.shareRow}>
            <View style={styles.shareAvatar}>
              <MaterialIcon name="person" size={24} color={Colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.shareDesc}>
                Add details about your gold before testing
              </Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.addDetailsLink}>Add Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          {/* Customer */}
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
            <View style={{ flex: 1 }}>
              <Text style={styles.infoName}>{customerName}</Text>
              <Text style={styles.infoPhone}>{expertPhone}</Text>
            </View>
            <View style={styles.dateSection}>
              <Text style={styles.dateText}>{formattedDate}</Text>
              <Text style={styles.timeText}>{timeSlot}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Gold Expert */}
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

          <Text style={styles.addressText}>
            Shop No. 1164/2, 4th Floor, Kucha Mahajani,{"\n"}Chandni Chowk,
            Delhi - 110006, India
          </Text>

          {/* Action Links */}
          <TouchableOpacity style={styles.actionLink} activeOpacity={0.6}>
            <Text style={styles.actionLinkText}>Call Center</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionLink}
            onPress={() => setCancelModalVisible(true)}
            activeOpacity={0.6}
          >
            <Text style={styles.cancelLinkText}>Cancel Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Cancel Confirmation Modal */}
      <Modal
        visible={cancelModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCancelModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cancel Appointment</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to cancel the appointment?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                onPress={handleCancelConfirm}
                activeOpacity={0.7}
                style={styles.modalBtn}
              >
                <Text style={styles.modalConfirmText}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCancelModalVisible(false)}
                activeOpacity={0.7}
                style={styles.modalBtn}
              >
                <Text style={styles.modalBackText}>BACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 20,
    color: Colors.text,
    marginRight: Metrics.spacing.sm,
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: Colors.text,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.xxl,
  },
  shareCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
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
  dateSection: {
    alignItems: "flex-end",
  },
  dateText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.primary,
  },
  timeText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    marginTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.goldLight,
    marginVertical: Metrics.spacing.md,
  },
  addressText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: Metrics.spacing.sm,
    marginLeft: 56,
    lineHeight: 18,
  },
  actionLink: {
    marginTop: Metrics.spacing.md,
  },
  actionLinkText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: "600",
  },
  cancelLinkText: {
    fontSize: Metrics.fontSize.medium,
    color: "#E57373",
    fontWeight: "600",
  },
  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.lg,
    width: "80%",
  },
  modalTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  modalMessage: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.lg,
    lineHeight: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalBtn: {
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
  },
  modalConfirmText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
  },
  modalBackText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.textSecondary,
  },
});

export default AppointmentDetailsScreen;
