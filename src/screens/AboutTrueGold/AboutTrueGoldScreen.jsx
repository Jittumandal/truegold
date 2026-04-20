import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const AboutTrueGoldScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>About TrueGold</Text>
      </View>

      <View style={styles.divider} />

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* About TureGold */}
        <Text style={styles.sectionTitle}>About TureGold</Text>
        <Text style={styles.paragraph}>
          TureGold is a modern digital platform that makes gold savings and
          investment simple, secure, and accessible for everyone.{"\n\n"}
          Designed for today's generation, TureGold allows users to invest in
          gold anytime with small amounts, helping build wealth gradually and
          consistently.{"\n\n"}
          Our platform eliminates the complexity of traditional gold buying by
          offering a seamless and transparent experience. Whether you are saving
          for future goals, festivals, or financial security, TureGold provides
          a reliable way to grow your savings through gold.
        </Text>

        {/* Why Choose TureGold */}
        <Text style={styles.sectionTitle}>Why Choose TureGold</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● Easy and flexible gold savings
          </Text>
          <Text style={styles.bulletItem}>
            ● Secure and trusted investment platform
          </Text>
          <Text style={styles.bulletItem}>
            ● Start with small amounts anytime
          </Text>
          <Text style={styles.bulletItem}>
            ● Real-time tracking of your gold balance
          </Text>
          <Text style={styles.bulletItem}>
            ● Simple and user-friendly interface
          </Text>
        </View>

        {/* Our Mission */}
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          To empower individuals to build wealth through disciplined gold
          savings by providing a safe, transparent, and easy-to-use digital
          platform.
        </Text>

        {/* Our Vision */}
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.paragraph}>
          To create a financially strong and self-reliant (Atmanirbhar)
          community where everyone can access smart and secure investment
          opportunities.
        </Text>

        {/* Our Values */}
        <Text style={styles.sectionTitle}>Our Values</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            ● <Text style={styles.boldText}>Simplicity</Text> – Easy for
            everyone to use
          </Text>
          <Text style={styles.bulletItem}>
            ● <Text style={styles.boldText}>Security</Text> – Protecting user
            data and investments
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
  boldText: {
    fontWeight: "700",
  },
});

export default AboutTrueGoldScreen;
