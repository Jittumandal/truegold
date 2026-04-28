import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";

const SaveOnSpendScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.containerWhite}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>Save on Every Spend</Text>
        <Text style={styles.paragraph}>
          Save on Every Spend lets you automatically invest a small percentage
          of your transactions into digital gold.
        </Text>
        <Text style={styles.section}>Setup</Text>
        <Text style={styles.item}>• Choose percentage to save</Text>
        <Text style={styles.item}>• Select funding source</Text>
        <Text style={styles.item}>• Review and enable</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },
  title: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  paragraph: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Metrics.spacing.lg,
  },
  section: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  item: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
});

export default SaveOnSpendScreen;
