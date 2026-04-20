import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DecorativeBackground from "../../components/onboarding/DecorativeBackground";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const INVESTMENT_OPTIONS = [
  {
    id: "jewellery",
    label: "Jewellery/Coin",
    image: require("../../assets/images/jewellery.png"),
  },
  {
    id: "diversification",
    label: "Diversification",
    image: require("../../assets/images/diversification.png"),
  },
  {
    id: "buycoin",
    label: "Buy Coin",
    image: require("../../assets/images/coin.png"),
  },
  {
    id: "others",
    label: "Others",
    image: require("../../assets/images/others.png"),
  },
];

const QuestionsScreen = ({ navigation }) => {
  const userName = "Jitendra";
  const [selected, setSelected] = useState([]);

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleContinue = () => {
    navigation.navigate("Welcome");
  };

  const handleSkip = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={GlobalStyles.container}>
      <DecorativeBackground />
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        {/* Greeting */}
        <Text style={styles.greeting}>Hello {userName}</Text>
        <Text style={styles.title}>Why do you invest in Gold?</Text>

        {/* Options Grid */}
        <View style={styles.grid}>
          {INVESTMENT_OPTIONS.map((option) => {
            const isSelected = selected.includes(option.id);
            return (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  isSelected && styles.optionCardSelected,
                ]}
                onPress={() => toggleOption(option.id)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.optionIconContainer,
                    isSelected && styles.optionIconSelected,
                  ]}
                >
                  <Image
                    source={option.image}
                    style={styles.optionImage}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  style={[
                    styles.optionLabel,
                    isSelected && styles.optionLabelSelected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            selected.length === 0 && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={selected.length === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>
            Select at least 1 option
          </Text>
        </TouchableOpacity>

        {/* Skip */}
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip for Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xxl,
    paddingBottom: Metrics.spacing.lg,
  },
  greeting: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.xs,
  },
  title: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.lg,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionCard: {
    width: "47%",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    alignItems: "center",
    paddingVertical: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.md,
    borderWidth: 2,
    borderColor: "transparent",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  optionCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  optionIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    // backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.spacing.sm,
  },
  optionIconSelected: {
    backgroundColor: Colors.white,
  },
  optionImage: {
    width: 100,
    height: 100,
  },
  optionEmoji: {
    fontSize: 36,
  },
  optionLabel: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },
  optionLabelSelected: {
    color: Colors.primary,
  },
  spacer: {
    flex: 1,
    minHeight: 40,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: "center",
    width: "100%",
    height: 56,
    justifyContent: "center",
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  skipButton: {
    alignItems: "center",
    paddingVertical: Metrics.spacing.md,
  },
  skipText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    fontWeight: "600",
  },
});

export default QuestionsScreen;
