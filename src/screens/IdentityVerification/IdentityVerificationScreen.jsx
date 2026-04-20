import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DUMMY_PAN = "ABCDE1234F";
const DUMMY_DOB = "15/08/1995";
const DUMMY_DOB_PARTS = { day: 15, month: 8, year: 1995 };

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

// ─── Calendar Component ───
const Calendar = ({ selectedDate, onSelectDate }) => {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear
    );
  };

  const isToday = (day) =>
    today.getDate() === day &&
    today.getMonth() === viewMonth &&
    today.getFullYear() === viewYear;

  const cells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(d);
  }

  return (
    <View style={calStyles.container}>
      {/* Month/Year header */}
      <View style={calStyles.header}>
        <TouchableOpacity onPress={prevMonth} activeOpacity={0.6}>
          <Text style={calStyles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={calStyles.monthYear}>
          {MONTHS[viewMonth]} {viewYear}
        </Text>
        <TouchableOpacity onPress={nextMonth} activeOpacity={0.6}>
          <Text style={calStyles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Day-of-week labels */}
      <View style={calStyles.weekRow}>
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <Text key={i} style={calStyles.weekDay}>
            {d}
          </Text>
        ))}
      </View>

      {/* Days grid */}
      <View style={calStyles.grid}>
        {cells.map((day, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              calStyles.dayCell,
              isSelected(day) && calStyles.dayCellSelected,
              isToday(day) && !isSelected(day) && calStyles.dayCellToday,
            ]}
            onPress={() =>
              day && onSelectDate(new Date(viewYear, viewMonth, day))
            }
            activeOpacity={0.6}
            disabled={!day}
          >
            <Text
              style={[
                calStyles.dayText,
                isSelected(day) && calStyles.dayTextSelected,
              ]}
            >
              {day || ""}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const calStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  arrow: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: "700",
    paddingHorizontal: 12,
  },
  monthYear: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
  weekRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    width: "14.28%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dayCellSelected: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  dayCellToday: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
  },
  dayText: {
    fontSize: 14,
    color: Colors.text,
  },
  dayTextSelected: {
    color: Colors.white,
    fontWeight: "700",
  },
});

// ─── Spinner Component ───
const LoadingSpinner = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={[spinnerStyles.ring, { transform: [{ rotate: spin }] }]}
    >
      <View style={spinnerStyles.arc} />
    </Animated.View>
  );
};

const spinnerStyles = StyleSheet.create({
  ring: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: "#E0E0E0",
    borderTopColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  arc: {},
});

// ─── Main Screen ───
const STEPS = {
  PAN: "pan",
  DOB: "dob",
  VERIFYING: "verifying",
  ERROR: "error",
  SUCCESS: "success",
};

const IdentityVerificationScreen = ({ navigation }) => {
  const [step, setStep] = useState(STEPS.PAN);
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [consentChecked, setConsentChecked] = useState(true);
  const [panError, setPanError] = useState("");
  const [dobError, setDobError] = useState("");

  const formatDate = (date) => {
    if (!date) return "";
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const normalizePan = (value) => value.trim().toUpperCase();

  const isDummyDobMatch = (date) => {
    if (!date) {
      return false;
    }

    return (
      date.getDate() === DUMMY_DOB_PARTS.day &&
      date.getMonth() + 1 === DUMMY_DOB_PARTS.month &&
      date.getFullYear() === DUMMY_DOB_PARTS.year
    );
  };

  const isDummyIdentityMatch = (panValue, dobValue) => {
    return normalizePan(panValue) === DUMMY_PAN && isDummyDobMatch(dobValue);
  };

  const handlePanNext = () => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const normalizedPan = normalizePan(pan);

    if (!panRegex.test(normalizedPan)) {
      setPanError("Enter a valid PAN in the format ABCDE1234F.");
      return;
    }

    if (!consentChecked) {
      setPanError("Please accept the consent to continue.");
      return;
    }

    setPanError("");
    setStep(STEPS.DOB);
  };

  const handleDobNext = () => {
    if (!dob) {
      setDobError("Please select your date of birth.");
      return;
    }

    setDobError("");
    setStep(STEPS.VERIFYING);

    setTimeout(() => {
      const normalizedPan = normalizePan(pan);
      const formattedDob = formatDate(dob);

      if (isDummyIdentityMatch(normalizedPan, dob)) {
        navigation.replace("IdentityVerificationSuccess", {
          pan: normalizedPan,
          dob: formattedDob,
        });
        return;
      }

      setStep(STEPS.ERROR);
    }, 2000);
  };

  const handleReEnter = () => {
    setPan("");
    setDob(null);
    setPanError("");
    setDobError("");
    setStep(STEPS.PAN);
  };

  const progressText =
    step === STEPS.PAN
      ? "Question 1 of 2"
      : step === STEPS.DOB
        ? "Question 2 of 2"
        : "";

  const progressWidth =
    step === STEPS.PAN ? "50%" : step === STEPS.DOB ? "100%" : "100%";

  // ─── Render Steps ───
  const renderPanStep = () => (
    <View style={styles.stepContent}>
      <View style={styles.inputRow}>
        <MaterialIcon name="shield" size={20} color={Colors.primary} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter PAN"
          placeholderTextColor={Colors.primary}
          value={pan}
          onChangeText={(t) => {
            setPan(t.toUpperCase());
            if (panError) {
              setPanError("");
            }
          }}
          autoCapitalize="characters"
          maxLength={10}
        />
        <MaterialIcon name="edit" size={16} color={Colors.primary} />
      </View>

      <Text style={styles.helperText}>Dummy PAN for success: {DUMMY_PAN}</Text>

      {panError ? <Text style={styles.errorMessage}>{panError}</Text> : null}

      {pan.length > 0 && (
        <View style={styles.consentRow}>
          <TouchableOpacity
            onPress={() => setConsentChecked(!consentChecked)}
            activeOpacity={0.6}
            style={styles.consentCheck}
          >
            <View
              style={[
                styles.checkbox,
                consentChecked && styles.checkboxChecked,
              ]}
            >
              {consentChecked && (
                <MaterialIcon name="check" size={10} color={Colors.white} />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.consentText}>
            By entering the details, you allow gullak to verify KYC on your
            behalf.
          </Text>
        </View>
      )}

      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            pan.length < 10 && styles.nextButtonDisabled,
          ]}
          onPress={handlePanNext}
          activeOpacity={0.8}
          disabled={pan.length < 10}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDobStep = () => (
    <View style={styles.stepContent}>
      <TouchableOpacity
        style={styles.inputRow}
        onPress={() => setShowCalendar(true)}
        activeOpacity={0.7}
      >
        <MaterialIcon name="calendar" size={20} color={Colors.primary} />
        <Text style={[styles.inputValue, !dob && { color: Colors.primary }]}>
          {dob ? formatDate(dob) : "Select Date of Birth"}
        </Text>
        <MaterialIcon name="edit" size={16} color={Colors.primary} />
      </TouchableOpacity>

      {showCalendar && (
        <View style={styles.calendarWrap}>
          <Calendar
            selectedDate={dob}
            onSelectDate={(date) => {
              setDob(date);
              setShowCalendar(false);
              if (dobError) {
                setDobError("");
              }
            }}
          />
        </View>
      )}

      <Text style={styles.helperText}>Dummy DOB for success: {DUMMY_DOB}</Text>

      {dobError ? <Text style={styles.errorMessage}>{dobError}</Text> : null}

      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={[styles.nextButton, !dob && styles.nextButtonDisabled]}
          onPress={handleDobNext}
          activeOpacity={0.8}
          disabled={!dob}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderVerifying = () => (
    <View style={styles.centerContent}>
      <View style={styles.verifyCard}>
        <LoadingSpinner />
        <Text style={styles.verifyText}>Verifying Details</Text>
      </View>
    </View>
  );

  const renderError = () => (
    <View style={styles.centerContent}>
      <View style={styles.errorCard}>
        <Text style={styles.errorTitle}>Something went{"\n"}wrong!</Text>
        <Text style={styles.errorSubtitle}>
          Please try again after some time
        </Text>
      </View>
      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.reEnterButton}
          onPress={handleReEnter}
          activeOpacity={0.8}
        >
          <Text style={styles.reEnterButtonText}>Re-Enter PAN Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const showProgress = step === STEPS.PAN || step === STEPS.DOB;

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identity Verification</Text>
        <View style={{ flex: 1 }} />
        {(step === STEPS.PAN || step === STEPS.DOB) && (
          <View style={styles.headerIcons}>
            <View style={{ marginLeft: 10 }}>
              <MaterialIcon name="bell" size={18} color={Colors.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <MaterialIcon name="person" size={18} color={Colors.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <MaterialIcon name="edit" size={18} color={Colors.primary} />
            </View>
          </View>
        )}
      </View>

      {/* Progress bar */}
      {showProgress && (
        <View style={styles.progressSection}>
          <Text style={styles.progressLabel}>{progressText}</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: progressWidth }]} />
          </View>
        </View>
      )}

      {/* Step content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        keyboardShouldPersistTaps="handled"
      >
        {step === STEPS.PAN && renderPanStep()}
        {step === STEPS.DOB && renderDobStep()}
        {step === STEPS.VERIFYING && renderVerifying()}
        {step === STEPS.ERROR && renderError()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.sm,
    backgroundColor: Colors.white,
  },
  backBtn: {
    marginRight: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },
  backArrow: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: "700",
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Progress
  progressSection: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.md,
    paddingBottom: Metrics.spacing.sm,
    backgroundColor: Colors.white,
  },
  progressLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
    fontWeight: "600",
    marginBottom: 6,
  },
  progressTrack: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: 4,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  // Scroll
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xl,
  },
  // Step content
  stepContent: {
    flex: 1,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    marginBottom: Metrics.spacing.lg,
  },
  textInput: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    fontWeight: "600",
    marginLeft: 10,
    marginRight: 8,
    paddingVertical: 0,
  },
  inputValue: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    fontWeight: "600",
    marginLeft: 10,
    marginRight: 8,
  },
  helperText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: -8,
    marginBottom: Metrics.spacing.sm,
    paddingHorizontal: 4,
  },
  errorMessage: {
    fontSize: Metrics.fontSize.small,
    color: "#D14343",
    marginBottom: Metrics.spacing.md,
    paddingHorizontal: 4,
    lineHeight: 18,
  },
  // Consent
  consentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Metrics.spacing.lg,
    paddingHorizontal: 4,
  },
  consentCheck: {
    marginRight: 8,
    marginTop: 2,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  consentText: {
    flex: 1,
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  // Calendar
  calendarWrap: {
    marginBottom: Metrics.spacing.lg,
  },
  // Buttons
  bottomActions: {
    marginTop: "auto",
    paddingBottom: Metrics.spacing.xl,
  },
  nextButton: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
  // Verifying
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 50,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  verifyText: {
    marginTop: 20,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  // Error
  errorCard: {
    alignItems: "center",
    marginBottom: 40,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.primary,
    textAlign: "center",
    lineHeight: 32,
    marginBottom: 12,
  },
  errorSubtitle: {
    fontSize: Metrics.fontSize.body,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  reEnterButton: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: Metrics.spacing.lg,
    position: "absolute",
    bottom: Metrics.spacing.xl,
    left: 0,
    right: 0,
  },
  reEnterButtonText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
  },
});

export default IdentityVerificationScreen;
