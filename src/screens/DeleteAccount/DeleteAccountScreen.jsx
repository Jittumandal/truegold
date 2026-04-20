import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const DeleteAccountScreen = ({ navigation }) => {
  const handleBackToHome = () => {
    navigation.navigate("Dashboard");
  };

  const handleDeleteAccount = () => {
    // Placeholder: implement actual delete account API call
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delete Account</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Delete Account</Text>
        <Text style={styles.paragraph}>
          Are you sure you want to delete your TrueGold account?
        </Text>
        <Text style={styles.paragraph}>
          This action is irreversible. Your name, phone number, email ID, goals,
          and any other identifiers will be permanently removed from our records
        </Text>

        <Text style={styles.sectionTitle}>What will be retained?</Text>
        <Text style={styles.paragraph}>
          {" "}
          In accordance with RBI Guidelines, your KYC and transaction data will
          be retained for 12 months. After this period, all such data will be
          permanently deleted.
        </Text>
      </View>

      <View style={{ flex: 1 }} />

      {/* Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={handleBackToHome}
          activeOpacity={0.8}
        >
          <Text style={styles.homeBtnText}>Back to home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={handleDeleteAccount}
          activeOpacity={0.8}
        >
          <Text style={styles.deleteBtnText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  backBtn: {
    marginRight: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.text,
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "600",
    color: Colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.goldLight,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: Metrics.spacing.sm,
    marginTop: Metrics.spacing.md,
  },
  paragraph: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    lineHeight: 22,
    marginBottom: Metrics.spacing.xs,
  },
  footer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  homeBtn: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  homeBtnText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  deleteBtn: {
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: "center",
  },
  deleteBtnText: {
    color: Colors.primary,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
});

export default DeleteAccountScreen;
