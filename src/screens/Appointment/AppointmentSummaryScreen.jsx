import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const AppointmentSummaryScreen = ({navigation, route}) => {
  const {
    date: dateISO,
    timeSlot = '06:20 PM',
    expertName = 'Rajesh Kumar',
    expertPhone = '+918744090761',
  } = route?.params ?? {};

  const dateObj = dateISO ? new Date(dateISO) : new Date();
  const dateFormatted = `Mar ${dateObj.getDate()}`;
  const dayName = DAYS[dateObj.getDay()];
  const fullDate = `${SHORT_MONTHS[dateObj.getMonth()]} ${dateObj.getDate()}`;

  const [customers] = useState([{name: 'Sathvik Singh Parihar'}]);
  const [selectedCustomer, setSelectedCustomer] = useState(0);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');

  const handleConfirm = () => {
    navigation.navigate('AppointmentSuccess', {
      date: dateISO,
      timeSlot,
      expertName,
      expertPhone,
      customerName: customers[selectedCustomer]?.name ?? 'Customer',
    });
  };

  const handleAddCustomer = () => {
    if (firstName.trim()) {
      setAddModalVisible(false);
      setFirstName('');
      setLastName('');
      setDob('');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.headerTitle}>Appointment Summary</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}>
        {/* Service Type */}
        <Text style={styles.serviceLabel}>Hallmark Verification</Text>

        {/* Expert Info */}
        <View style={styles.expertRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {expertName.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </Text>
          </View>
          <View>
            <Text style={styles.expertName}>{expertName}</Text>
            <Text style={styles.expertPhone}>{expertPhone}</Text>
          </View>
        </View>

        {/* Appointment Date */}
        <Text style={styles.sectionLabel}>Appointment Date</Text>
        <View style={styles.dateRow}>
          <MaterialIcon name="calendar" size={18} color={Colors.primary} />
          <Text style={styles.dateText}>
            {fullDate}  |  {dayName}  |  {timeSlot}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Customer Selection */}
        <Text style={styles.sectionLabel}>Whom is this appointment for?</Text>
        <View style={styles.customerRow}>
          {customers.map((c, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.customerChip,
                selectedCustomer === i && styles.customerChipActive,
              ]}
              onPress={() => setSelectedCustomer(i)}
              activeOpacity={0.7}>
              <Text
                style={[
                  styles.customerChipText,
                  selectedCustomer === i && styles.customerChipTextActive,
                ]}>
                {c.name}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.addCustomerChip}
            onPress={() => setAddModalVisible(true)}
            activeOpacity={0.7}>
            <Text style={styles.addCustomerText}>+ Add Customer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={handleConfirm}
          activeOpacity={0.8}>
          <Text style={styles.confirmBtnText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Add Customer Modal */}
      <Modal
        visible={addModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setAddModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setAddModalVisible(false)}
              activeOpacity={0.6}>
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              placeholderTextColor={Colors.dotInactive}
            />

            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor={Colors.dotInactive}
            />

            <Text style={styles.inputLabel}>DOB</Text>
            <View style={styles.dobRow}>
              <TextInput
                style={[styles.input, {flex: 1}]}
                value={dob}
                onChangeText={setDob}
                placeholder="DOB"
                placeholderTextColor={Colors.dotInactive}
              />
              <TouchableOpacity style={styles.dobIcon} activeOpacity={0.6}>
                <MaterialIcon name="calendar" size={22} color={Colors.primary} />
              </TouchableOpacity>
            </View>

            {/* Gender */}
            <View style={styles.genderRow}>
              {['Male', 'Female'].map(g => (
                <TouchableOpacity
                  key={g}
                  style={[
                    styles.genderBtn,
                    gender === g && styles.genderBtnActive,
                  ]}
                  onPress={() => setGender(g)}
                  activeOpacity={0.7}>
                  <Text
                    style={[
                      styles.genderBtnText,
                      gender === g && styles.genderBtnTextActive,
                    ]}>
                    {g}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={handleAddCustomer}
              activeOpacity={0.8}>
              <Text style={styles.addBtnText}>+ Add Customer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 20,
    color: Colors.text,
    marginRight: Metrics.spacing.sm,
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '600',
    color: Colors.text,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: 120,
  },
  serviceLabel: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  expertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.spacing.lg,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.spacing.md,
    borderWidth: 2,
    borderColor: Colors.goldLight,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  expertName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  expertPhone: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  sectionLabel: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.sm,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.spacing.lg,
  },
  dateText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: Metrics.spacing.sm,
    flex: 1,
  },
  changeText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
  customerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  customerChip: {
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginRight: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.sm,
  },
  customerChipActive: {
    borderColor: Colors.text,
  },
  customerChipText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
  },
  customerChipTextActive: {
    color: Colors.text,
    fontWeight: '600',
  },
  addCustomerChip: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.sm,
  },
  addCustomerText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Metrics.spacing.lg,
    backgroundColor: Colors.background,
  },
  confirmBtn: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },
  confirmBtnText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
  },
  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrics.borderRadius.large,
    borderTopRightRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.xl,
  },
  modalClose: {
    alignSelf: 'flex-end',
    padding: Metrics.spacing.xs,
  },
  modalCloseText: {
    fontSize: 22,
    color: Colors.text,
  },
  inputLabel: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Metrics.spacing.xs,
    marginTop: Metrics.spacing.md,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.dotInactive,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    paddingVertical: Metrics.spacing.sm,
  },
  dobRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dobIcon: {
    marginLeft: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },
  genderRow: {
    flexDirection: 'row',
    marginTop: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
  },
  genderBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    borderRadius: Metrics.borderRadius.small,
    paddingVertical: Metrics.spacing.sm,
    alignItems: 'center',
    marginRight: Metrics.spacing.sm,
  },
  genderBtnActive: {
    borderColor: Colors.text,
  },
  genderBtnText: {
    fontSize: Metrics.fontSize.body,
    color: Colors.textSecondary,
  },
  genderBtnTextActive: {
    color: Colors.text,
    fontWeight: '600',
  },
  addBtn: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },
  addBtnText: {
    color: Colors.white,
    fontSize: Metrics.fontSize.body,
    fontWeight: '600',
  },
});

export default AppointmentSummaryScreen;
