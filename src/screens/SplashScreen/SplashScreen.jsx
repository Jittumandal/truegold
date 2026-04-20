import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/logo.svg";
import { Colors, GlobalStyles } from "../../theme";

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    const prepareApp = async () => {
      // Prevent the splash screen from auto-hiding
      await SplashScreen.preventAutoHideAsync();

      // Simulate some loading time (e.g., check auth, load data)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Hide the splash screen
      await SplashScreen.hideAsync();

      // Navigate to the main app
      navigation.replace("Auth");
    };

    prepareApp();
  }, [navigation]);

  return (
    <View style={[GlobalStyles.container, styles.splashContainer]}>
      <Logo width={188} height={70} />
      <Text style={styles.tagline}>India Most Trusted Digital Gold App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  tagline: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    marginTop: 20,
  },
});

export default SplashScreenComponent;
