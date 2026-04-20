import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const PrivacyPolicyScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      <View style={styles.divider} />

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Privacy Policy – TureGold</Text>
        <Text style={styles.paragraph}>
          At TureGold, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, store, and safeguard your data when you use our
          platform.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          We may collect the following types of information:
        </Text>

        <Text style={styles.subTitle}>Personal Information</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>● Name</Text>
          <Text style={styles.bulletItem}>● Mobile number</Text>
          <Text style={styles.bulletItem}>● Email address</Text>
          <Text style={styles.bulletItem}>● Date of birth</Text>
          <Text style={styles.bulletItem}>
            ● Identity details (for KYC verification)
          </Text>
        </View>

        <Text style={styles.subTitle}>Financial Information</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>● Transaction history</Text>
          <Text style={styles.bulletItem}>
            ● Payment details (processed securely via payment partners)
          </Text>
        </View>

        <Text style={styles.subTitle}>Device & Usage Information</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>● IP address</Text>
          <Text style={styles.bulletItem}>● Device type</Text>
          <Text style={styles.bulletItem}>● App usage data</Text>
        </View>

        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>We use your information to:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● Create and manage your account
          </Text>
          <Text style={styles.bulletItem}>
            ● Process transactions and investments
          </Text>
          <Text style={styles.bulletItem}>● Provide customer support</Text>
          <Text style={styles.bulletItem}>
            ● Improve our services and user experience
          </Text>
          <Text style={styles.bulletItem}>
            ● Send important updates, alerts, and notifications
          </Text>
          <Text style={styles.bulletItem}>
            ● Comply with legal and regulatory requirements
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.paragraph}>
          We take appropriate security measures to protect your data:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● Encryption of sensitive information...
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
  sectionTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.primary,
    marginTop: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.sm,
  },
  subTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.primary,
    marginTop: Metrics.spacing.md,
    marginBottom: Metrics.spacing.xs,
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

export default PrivacyPolicyScreen;
