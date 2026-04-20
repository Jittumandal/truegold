import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/syndra.svg";
import { Colors, Metrics } from "../../theme";

const OnboardingSlide = ({ item, screenWidth }) => {
  const slideWidth = screenWidth || Metrics.screenWidth;

  return (
    <View style={[styles.container, { width: slideWidth }]}>
      {/* ✅ TrueGold Logo FIXED */}
      <View style={styles.logoContainer}>
        <Logo
          width="100%" // 🔥 important
          height={80} // 🔥 increased height
          preserveAspectRatio="xMidYMid meet"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>{item.title}</Text>

      {/* Main Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Badge Section */}
      {item.badge1 && (
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            {Array.isArray(item.badge1) ? (
              <Text style={styles.badgeText}>
                {item.badge1.map((part, idx) => (
                  <Text key={idx} style={{ color: part.color }}>
                    {part.text}
                  </Text>
                ))}
              </Text>
            ) : (
              <Text style={styles.badgeText}>{item.badge1}</Text>
            )}
          </View>

          {item.badge2 && (
            <>
              <View style={styles.badgeDivider} />
              <View style={styles.badge}>
                {Array.isArray(item.badge2) ? (
                  <Text style={styles.badgeText}>
                    {item.badge2.map((part, idx) => (
                      <Text key={idx} style={{ color: part.color }}>
                        {part.text}
                      </Text>
                    ))}
                  </Text>
                ) : (
                  <Text style={styles.badgeText}>{item.badge2}</Text>
                )}
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xxl,
  },

  // ✅ FIXED CONTAINER
  logoContainer: {
    width: "60%", // 🔥 control width here
    height: 80, // 🔥 important
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },

  title: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "800",
    color: Colors.text,
    textAlign: "center",
    lineHeight: 32,
    marginBottom: Metrics.spacing.lg,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  imagePlaceholder: {
    width: "75%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.sm + 4,
    paddingHorizontal: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    minHeight: 10,
  },

  badge: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#E0E0E0",
    marginHorizontal: Metrics.spacing.sm,
  },

  badgeText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 22,
  },
});

export default OnboardingSlide;
