import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/syndra.svg";
import { Colors, Metrics } from "../../theme";
import DecorativeBackground from "../onboarding/DecorativeBackground";

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <DecorativeBackground />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo
          width="100%" // 🔥 important
          height={80} // 🔥 increased height
          preserveAspectRatio="xMidYMid meet"
        />
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>Join & Start Investing Today</Text>
      <Text style={styles.tagline}>Get Started with TrueGold</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Metrics.spacing.xxl,
    paddingBottom: Metrics.spacing.lg,
    backgroundColor: Colors.background,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  logoTG: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.primary,
    marginRight: 4,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
  },
  logoTrue: {
    color: Colors.text,
  },
  logoGold: {
    color: Colors.primary,
  },
  tagline: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
    lineHeight: 24,
  },
});

export default AuthHeader;
