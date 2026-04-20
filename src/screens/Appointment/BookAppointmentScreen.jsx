import { useRef, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcon from "../../components/common/MaterialIcon";
import { Colors, GlobalStyles, Metrics } from "../../theme";

const generateDates = (startDate, count) => {
  const dates = [];
  const d = new Date(startDate);
  for (let i = 0; i < count; i++) {
    dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
};

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
const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TIME_SLOTS = [
  "05:50 PM",
  "06:00 PM",
  "06:10 PM",
  "06:20 PM",
  "06:30 PM",
  "06:40 PM",
  "06:50 PM",
  "07:00 PM",
  "07:10 PM",
  "07:20 PM",
];

const BookAppointmentScreen = ({ navigation, route }) => {
  const today = new Date();
  const [dates] = useState(() => generateDates(today, 30));
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [activeTab, setActiveTab] = useState("visit");
  const scrollRef = useRef(null);

  const selectedDate = dates[selectedDateIndex];

  // Simulate some dates having no slots
  const hasSlots = selectedDate.getDay() !== 0; // No slots on Sundays

  const formatDateTab = (date) => {
    return `${date.getDate()} ${SHORT_MONTHS[date.getMonth()]}`;
  };

  const visibleDates = dates.slice(
    Math.max(0, selectedDateIndex - 1),
    Math.min(dates.length, selectedDateIndex + 4),
  );

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    navigation.navigate("AppointmentSummary", {
      date: selectedDate.toISOString(),
      timeSlot: slot,
      expertName: route?.params?.expertName ?? "Mr. Rahul Verma",
      expertPhone: route?.params?.expertPhone ?? "+918744090761",
    });
  };

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const handleCalendarDateSelect = (day) => {
    const selected = new Date(calendarYear, calendarMonth, day);
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    if (selected < todayStart) return;

    const idx = dates.findIndex(
      (d) =>
        d.getDate() === day &&
        d.getMonth() === calendarMonth &&
        d.getFullYear() === calendarYear,
    );
    if (idx >= 0) {
      setSelectedDateIndex(idx);
    }
    setCalendarVisible(false);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(calendarMonth, calendarYear);
    const firstDay = getFirstDayOfMonth(calendarMonth, calendarYear);
    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<View key={`empty-${i}`} style={styles.calendarCell} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(calendarYear, calendarMonth, day);
      const todayStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );
      const isPast = dateObj < todayStart;
      const isToday =
        day === today.getDate() &&
        calendarMonth === today.getMonth() &&
        calendarYear === today.getFullYear();
      const isSelected =
        day === selectedDate.getDate() &&
        calendarMonth === selectedDate.getMonth() &&
        calendarYear === selectedDate.getFullYear();

      cells.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.calendarCell,
            isSelected && styles.calendarCellSelected,
          ]}
          onPress={() => !isPast && handleCalendarDateSelect(day)}
          disabled={isPast}
          activeOpacity={0.6}
        >
          <Text
            style={[
              styles.calendarDayText,
              isPast && styles.calendarDayPast,
              isToday && styles.calendarDayToday,
              isSelected && styles.calendarDaySelected,
            ]}
          >
            {day}
          </Text>
        </TouchableOpacity>,
      );

      if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
        rows.push(
          <View key={`row-${day}`} style={styles.calendarRow}>
            {cells}
          </View>,
        );
        cells = [];
      }
    }
    return rows;
  };

  return (
    <View style={GlobalStyles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.title}>Book an Appointment</Text>

        {/* Date Tabs */}
        <View style={styles.dateTabRow}>
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dateTabScroll}
          >
            {dates.slice(0, 10).map((date, index) => {
              const isActive = index === selectedDateIndex;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.dateTab, isActive && styles.dateTabActive]}
                  onPress={() => setSelectedDateIndex(index)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.dateTabText,
                      isActive && styles.dateTabTextActive,
                    ]}
                  >
                    {formatDateTab(date)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={styles.calendarIcon}
            onPress={() => setCalendarVisible(true)}
            activeOpacity={0.7}
          >
            <MaterialIcon name="calendar" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Session Info */}
        <View style={styles.sessionRow}>
          <MaterialIcon name="sparkle" size={18} color={Colors.primary} />
          <Text style={styles.sessionText}>Evening , TrueGold Office</Text>
        </View>

        {/* Time Slots or No Slots */}
        {hasSlots ? (
          <View style={styles.slotsGrid}>
            {TIME_SLOTS.map((slot) => (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.slotChip,
                  selectedSlot === slot && styles.slotChipSelected,
                ]}
                onPress={() => handleSlotSelect(slot)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.slotText,
                    selectedSlot === slot && styles.slotTextSelected,
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.noSlotsText}>
            Sorry, No available slots for this day
          </Text>
        )}
      </ScrollView>

      {/* Calendar Modal */}
      <Modal
        visible={calendarVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCalendarVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setCalendarVisible(false)}
        >
          <View style={styles.calendarModal}>
            {/* Month Navigation */}
            <View style={styles.calendarHeader}>
              <TouchableOpacity
                onPress={() => {
                  if (calendarMonth === 0) {
                    setCalendarMonth(11);
                    setCalendarYear(calendarYear - 1);
                  } else {
                    setCalendarMonth(calendarMonth - 1);
                  }
                }}
                activeOpacity={0.6}
              >
                <Text style={styles.calendarArrow}>◀</Text>
              </TouchableOpacity>
              <Text style={styles.calendarTitle}>
                {MONTHS[calendarMonth]} {calendarYear}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (calendarMonth === 11) {
                    setCalendarMonth(0);
                    setCalendarYear(calendarYear + 1);
                  } else {
                    setCalendarMonth(calendarMonth + 1);
                  }
                }}
                activeOpacity={0.6}
              >
                <Text style={styles.calendarArrow}>▶</Text>
              </TouchableOpacity>
            </View>

            {/* Day Headers */}
            <View style={styles.calendarRow}>
              {DAYS_SHORT.map((d) => (
                <View key={d} style={styles.calendarCell}>
                  <Text style={styles.calendarDayHeader}>{d}</Text>
                </View>
              ))}
            </View>

            {/* Calendar Days */}
            {renderCalendar()}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xl,
    paddingBottom: Metrics.spacing.xxl,
  },
  title: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.lg,
  },
  dateTabRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  dateTabScroll: {
    flexDirection: "row",
    paddingRight: Metrics.spacing.sm,
  },
  dateTab: {
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginRight: Metrics.spacing.sm,
    borderRadius: Metrics.borderRadius.small,
  },
  dateTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  dateTabText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  dateTabTextActive: {
    color: Colors.primary,
  },
  calendarIcon: {
    padding: Metrics.spacing.xs,
    marginLeft: Metrics.spacing.sm,
  },
  sessionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Metrics.spacing.lg,
  },
  sessionText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    marginLeft: Metrics.spacing.sm,
  },
  slotsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  slotChip: {
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    borderRadius: Metrics.borderRadius.small,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginRight: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.sm,
  },
  slotChipSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.secondary,
  },
  slotText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
  },
  slotTextSelected: {
    color: Colors.primary,
    fontWeight: "600",
  },
  noSlotsText: {
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    marginTop: Metrics.spacing.md,
  },
  // Calendar Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarModal: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.lg,
    width: "85%",
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Metrics.spacing.md,
  },
  calendarArrow: {
    fontSize: 16,
    color: Colors.textSecondary,
    padding: Metrics.spacing.sm,
  },
  calendarTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
  },
  calendarRow: {
    flexDirection: "row",
  },
  calendarCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Metrics.spacing.sm,
  },
  calendarCellSelected: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  calendarDayHeader: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  calendarDayText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
  },
  calendarDayPast: {
    color: Colors.dotInactive,
  },
  calendarDayToday: {
    color: "#4CAF50",
    fontWeight: "700",
  },
  calendarDaySelected: {
    color: Colors.white,
    fontWeight: "700",
  },
});

export default BookAppointmentScreen;
