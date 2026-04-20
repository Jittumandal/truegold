import React, { useState } from "react";
import { createUser } from "../../services/userService";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Colors, Metrics, GlobalStyles, CommonStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";

const GENDER_OPTIONS = ["Male", "Female", "Other"];
const CITY_OPTIONS = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
];

const AccountDetailsScreen = ({ navigation }) => {
  const [gender, setGender] = useState("Male");
  const [genderOpen, setGenderOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [cityOpen, setCityOpen] = useState(false);
  const [address, setAddress] = useState(
    "FLAT NO 413, POCKET 2, SECTOR 11, ROHINI, NORTH DELHI, 110085",
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = () => {
    if (!name.trim()) {
      setErrorMessage("Name is required");
      return false;
    }
    if (!phone.trim()) {
      setErrorMessage("Phone number is required");
      return false;
    }
    if (!email.trim()) {
      setErrorMessage("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email");
      return false;
    }
    if (phone.trim().length < 10) {
      setErrorMessage("Phone number must be at least 10 digits");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    setErrorMessage("");

    if (!validateInputs()) {
      return;
    }

    setIsLoading(true);
    try {
      const userData = { name, phone, email, gender, dob, city, address };
      console.log("Sending user data:", userData);

      await createUser(userData);

      alert("Account details saved successfully!");
      navigation.goBack();
    } catch (err) {
      console.error("Save error:", err);
      const errorMsg =
        err.message ||
        "Network request failed. Please check your internet connection and try again.";
      setErrorMessage(errorMsg);
      alert(`Error saving details:\n${errorMsg}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={CommonStyles.headerWithBorder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={CommonStyles.backBtnMd}
          activeOpacity={0.7}
        >
          <Text style={CommonStyles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.headerTitleLg}>Account Details</Text>
      </View>

      <ScrollView
        style={CommonStyles.content}
        contentContainerStyle={CommonStyles.contentContainer}
        bounces={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Gender Dropdown */}
        <TouchableOpacity
          style={styles.inputRow}
          onPress={() => setGenderOpen(!genderOpen)}
          activeOpacity={0.7}
        >
          <MaterialIcon name="person" size={20} color={Colors.primary} />
          <Text style={[styles.inputValue, { marginLeft: 8 }]}>{gender}</Text>
          <Text style={CommonStyles.dropdownArrow}>▾</Text>
        </TouchableOpacity>
        {genderOpen && (
          <View style={styles.dropdown}>
            {GENDER_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  styles.dropdownItem,
                  gender === opt && styles.dropdownItemActive,
                ]}
                onPress={() => {
                  setGender(opt);
                  setGenderOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    gender === opt && styles.dropdownItemTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Name */}
        <View style={styles.inputRow}>
          <MaterialIcon name="person" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, { marginLeft: 8 }]}
            placeholder="Enter Name"
            placeholderTextColor={Colors.textSecondary}
            value={name}
            onChangeText={setName}
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* Phone */}
        <View style={styles.inputRow}>
          <MaterialIcon name="phone" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, { marginLeft: 8 }]}
            placeholder="Phone Number"
            placeholderTextColor={Colors.textSecondary}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* Email */}
        <View style={styles.inputRow}>
          <MaterialIcon name="email" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, { marginLeft: 8 }]}
            placeholder="Enter Email ID"
            placeholderTextColor={Colors.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* Date of Birth */}
        <View style={styles.inputRow}>
          <MaterialIcon name="calendar" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, { marginLeft: 8 }]}
            placeholder="Select Date of Birth"
            placeholderTextColor={Colors.textSecondary}
            value={dob}
            onChangeText={setDob}
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* City/Location Dropdown */}
        <TouchableOpacity
          style={styles.inputRow}
          onPress={() => setCityOpen(!cityOpen)}
          activeOpacity={0.7}
        >
          <MaterialIcon name="location" size={20} color={Colors.primary} />
          <Text
            style={[
              CommonStyles.inputValue,
              { marginLeft: 8 },
              !city && { color: Colors.textSecondary },
            ]}
          >
            {city || "Select City/Location"}
          </Text>
          <Text style={CommonStyles.dropdownArrow}>▾</Text>
        </TouchableOpacity>
        {cityOpen && (
          <View style={styles.dropdown}>
            {CITY_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  styles.dropdownItem,
                  city === opt && styles.dropdownItemActive,
                ]}
                onPress={() => {
                  setCity(opt);
                  setCityOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    city === opt && styles.dropdownItemTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Address */}
        <View
          style={[styles.inputRow, { alignItems: "flex-start", minHeight: 80 }]}
        >
          <View style={{ marginTop: 4 }}>
            <MaterialIcon name="location" size={20} color={Colors.primary} />
          </View>
          <TextInput
            style={[
              styles.textInput,
              { textAlignVertical: "top", marginLeft: 8 },
            ]}
            placeholder="Enter Address"
            placeholderTextColor={Colors.textSecondary}
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />
          <View style={{ marginTop: 4 }}>
            <MaterialIcon name="edit" size={16} color={Colors.primary} />
          </View>
        </View>
      </ScrollView>

      {/* Error Message */}
      {errorMessage ? (
        <View style={styles.errorContainer}>
          <MaterialIcon name="info" size={16} color={Colors.white} />
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}

      {/* Save Button */}
      <View style={CommonStyles.bottomBar}>
        <TouchableOpacity
          style={[
            CommonStyles.primaryButton,
            isLoading && styles.buttonDisabled,
          ]}
          onPress={handleSave}
          activeOpacity={0.8}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={Colors.white} />
          ) : (
            <Text style={CommonStyles.primaryButtonText}>Save Details</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /* Input Row */
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.full,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.md,
    minHeight: 50,
  },
  inputValue: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    fontWeight: "500",
  },
  textInput: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    padding: 0,
  },
  /* Dropdown */
  dropdown: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginTop: -Metrics.spacing.sm,
    marginBottom: Metrics.spacing.md,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#F0F0F0",
  },
  dropdownItemActive: {
    backgroundColor: Colors.gold,
  },
  dropdownItemText: {
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
  },
  dropdownItemTextActive: {
    fontWeight: "700",
  },
  /* Error Message */
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6B6B",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginHorizontal: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.sm,
    borderRadius: Metrics.borderRadius.medium,
  },
  errorText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.small,
    marginLeft: Metrics.spacing.sm,
    flex: 1,
  },
  /* Button States */
  buttonDisabled: {
    opacity: 0.6,
  },
});

export default AccountDetailsScreen;
