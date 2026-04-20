import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const TermsConditionsScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
      </View>

      <View style={styles.divider} />

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.dateText}>Last Updated: 12 August 2025</Text>

        <Text style={styles.paragraph}>
          Welcome to TureGold. By accessing or using our platform, you agree to
          comply with and be bound by the following Terms & Conditions. Please
          read them carefully before using our services.
        </Text>

        <Text style={styles.sectionTitle}>Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By creating an account or using TureGold services, you agree to these
          Terms & Conditions, our policies, and applicable laws. If you do not
          agree, please do not use the platform.
        </Text>

        <Text style={styles.sectionTitle}>Eligibility</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● You must be at least 18 years old to use TureGold.
          </Text>
          <Text style={styles.bulletItem}>
            ● You agree to provide accurate and complete information during
            registration.
          </Text>
          <Text style={styles.bulletItem}>
            ● You are responsible for maintaining the confidentiality of your
            account.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Services Overview</Text>
        <Text style={styles.paragraph}>
          TureGold provides a digital platform for users to save and invest in
          gold. Users can buy, track, and manage their gold holdings through the
          app.
        </Text>

        <Text style={styles.sectionTitle}>Account Responsibility</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● You are responsible for all activities under your account.
          </Text>
          <Text style={styles.bulletItem}>
            ● Notify us immediately of any unauthorized use.
          </Text>
          <Text style={styles.bulletItem}>
            ● TureGold is not liable for losses due to compromised login
            credentials.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Payments & Transactions</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● All payments must be made through approved payment methods.
          </Text>
          <Text style={styles.bulletItem}>
            ● Prices of gold are subject to market fluctuations.
          </Text>
          <Text style={styles.bulletItem}>
            ● Once a transaction is completed, it may not be reversible except
            as per policy.
          </Text>
        </View>
      </ScrollView>
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
    paddingBottom: Metrics.spacing.xxl,
  },
  dateText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    marginBottom: Metrics.spacing.sm,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.primary,
    marginTop: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.sm,
  },
  paragraph: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    lineHeight: 22,
  },
  bulletList: {
    marginTop: Metrics.spacing.xs,
  },
  bulletItem: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    lineHeight: 26,
    paddingLeft: Metrics.spacing.sm,
  },
});

export default TermsConditionsScreen;
