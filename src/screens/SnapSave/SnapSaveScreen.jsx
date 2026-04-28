import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";

const SnapSaveScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.containerWhite}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>SnapSave</Text>
        <Text style={styles.paragraph}>
          SnapSave helps you round up purchases and invest the spare change into
          digital gold automatically.
        </Text>
        <Text style={styles.section}>How it works</Text>
        <Text style={styles.item}>• Link your card or wallet</Text>
        <Text style={styles.item}>
          • Round up transactions to nearest ₹10/₹50
        </Text>
        <Text style={styles.item}>• Spare change is invested daily</Text>
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

export default SnapSaveScreen;
