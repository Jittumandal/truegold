import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import { SCREENS } from "../../navigation/screenNames";

const AddressScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add New Address</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Enter Address"
          style={[styles.input, { height: 80 }]}
          value={address}
          onChangeText={setAddress}
          multiline
        />
      </View>

      <TouchableOpacity
        style={styles.confirm}
        onPress={() =>
          navigation.navigate(SCREENS.WITHDRAW_CHECKOUT, {
            address: { name, phone, address },
            coin: route.params?.coin,
          })
        }
        activeOpacity={0.8}
      >
        <Text style={styles.confirmText}>Confirm Address Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: { padding: Metrics.spacing.lg },
  title: { fontSize: Metrics.fontSize.heading, fontWeight: "700" },
  form: {
    paddingHorizontal: Metrics.spacing.lg,
    marginTop: Metrics.spacing.md,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.small,
    padding: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.sm,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  confirm: {
    marginHorizontal: Metrics.spacing.lg,
    marginTop: "auto",
    marginBottom: Metrics.spacing.lg,
    backgroundColor: Colors.primary,
    paddingVertical: Metrics.spacing.md,
    borderRadius: Metrics.borderRadius.full,
    alignItems: "center",
  },
  confirmText: { color: Colors.white, fontWeight: "700" },
});

export default AddressScreen;
