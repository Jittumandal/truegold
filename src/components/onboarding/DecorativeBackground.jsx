import { StyleSheet, View } from "react-native";
import BackgroundSvg from "../../assets/images/background.svg";
import { Metrics } from "../../theme";

const DecorativeBackground = () => {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <BackgroundSvg
        width={Metrics.screenWidth}
        height={Metrics.screenHeight}
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
});

export default DecorativeBackground;
