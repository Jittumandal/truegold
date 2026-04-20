import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/images/syndra.svg";
import { Colors, GlobalStyles, Metrics } from "../../theme";
const WelcomeScreen = ({ navigation }) => {
  const userName = "Jitendra";
  return (
    <View style={GlobalStyles.containerCentered}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo
          width="100%" // 🔥 important
          height={80} // 🔥 increased height
          preserveAspectRatio="xMidYMid meet"
        />
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hello {userName}</Text>

      {/* Message */}
      <Text style={styles.message}>
        Start saving for your{"\n"}dreams today with{" "}
        <Text style={styles.truegoldHighlight}>TrueGold</Text>!
      </Text>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Biometric")}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.xl,
  },
  logoTG: {
    fontSize: 36,
    fontWeight: "900",
    color: Colors.primary,
    marginRight: 6,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "700",
  },
  logoTrue: {
    color: Colors.text,
  },
  logoGold: {
    color: Colors.primary,
  },
  greeting: {
    fontSize: Metrics.fontSize.largeHeading,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  message: {
    fontSize: Metrics.fontSize.body,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
  },
  truegoldHighlight: {
    color: Colors.primary,
    fontWeight: "700",
  },
  spacer: {
    height: 60,
  },
  button: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
});

export default WelcomeScreen;
