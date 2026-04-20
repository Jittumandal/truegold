import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors, Metrics, GlobalStyles, CommonStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const INCOME_OPTIONS = ['Below 3 Lakhs', '3-5 Lakhs', '5-10 Lakhs', '10-20 Lakhs', 'Above 20 Lakhs'];
const OCCUPATION_OPTIONS = ['Salaried', 'Self-Employed', 'Business', 'Student', 'Retired', 'Homemaker'];
const MARITAL_OPTIONS = ['Single', 'Married', 'Divorced', 'Widowed'];
const INSTRUMENT_OPTIONS = ['Fixed Deposits', 'Mutual Funds', 'Stocks', 'Gold', 'Real Estate', 'PPF/EPF', 'Crypto'];

const UserPreferencesScreen = ({navigation}) => {
  const [income, setIncome] = useState('');
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [occupation, setOccupation] = useState('');
  const [occupationOpen, setOccupationOpen] = useState(false);
  const [marital, setMarital] = useState('');
  const [maritalOpen, setMaritalOpen] = useState(false);
  const [instrument, setInstrument] = useState('');
  const [instrumentOpen, setInstrumentOpen] = useState(false);
  const [otherApps, setOtherApps] = useState('');

  const renderDropdown = (label, icon, value, open, setOpen, options, setValue) => (
    <View>
      <TouchableOpacity
        style={styles.inputRow}
        onPress={() => {
          setIncomeOpen(false);
          setOccupationOpen(false);
          setMaritalOpen(false);
          setInstrumentOpen(false);
          setOpen(!open);
        }}
        activeOpacity={0.7}>
        <Text style={CommonStyles.inputIcon}>{icon}</Text>
        <Text style={[CommonStyles.inputValue, !value && {color: Colors.textSecondary}]}>
          {value || label}
        </Text>
        <Text style={CommonStyles.dropdownArrow}>▾</Text>
      </TouchableOpacity>
      {open && (
        <View style={CommonStyles.dropdown}>
          {options.map(opt => (
            <TouchableOpacity
              key={opt}
              style={[CommonStyles.dropdownItem, value === opt && CommonStyles.dropdownItemActive]}
              onPress={() => {
                setValue(opt);
                setOpen(false);
              }}>
              <Text
                style={[
                  CommonStyles.dropdownItemText,
                  value === opt && CommonStyles.dropdownItemTextActive,
                ]}>
                {opt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={CommonStyles.headerWithBorder}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={CommonStyles.backBtnMd} activeOpacity={0.7}>
          <Text style={CommonStyles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.headerTitleLg}>User Preferences</Text>
      </View>

      <ScrollView
        style={CommonStyles.content}
        contentContainerStyle={CommonStyles.contentContainer}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        {renderDropdown('Income Range', 'money', income, incomeOpen, setIncomeOpen, INCOME_OPTIONS, setIncome)}
        {renderDropdown('Occupation', 'briefcase', occupation, occupationOpen, setOccupationOpen, OCCUPATION_OPTIONS, setOccupation)}
        {renderDropdown('Marital Status', 'ring', marital, maritalOpen, setMaritalOpen, MARITAL_OPTIONS, setMarital)}
        {renderDropdown('What instruments do you save in currently?', 'chart', instrument, instrumentOpen, setInstrumentOpen, INSTRUMENT_OPTIONS, setInstrument)}

        {/* Text Area */}
        <View style={[styles.inputRow, {alignItems: 'flex-start', minHeight: 80}]}>
          <View style={{marginTop: 4}}><MaterialIcon name="comment" size={20} color={Colors.primary} /></View>
          <TextInput
            style={[styles.textInput, {textAlignVertical: 'top', marginLeft: 8}]}
            placeholder="Do you use any other app for savings/investments? If yes, can you please share the names?"
            placeholderTextColor={Colors.textSecondary}
            value={otherApps}
            onChangeText={setOtherApps}
            multiline
            numberOfLines={3}
          />
          <View style={{marginTop: 4}}><MaterialIcon name="edit" size={16} color={Colors.primary} /></View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View style={CommonStyles.bottomBar}>
        <TouchableOpacity
          style={CommonStyles.primaryButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <Text style={CommonStyles.primaryButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.full,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.md,
    minHeight: 50,
  },
  textInput: {
    flex: 1,
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    padding: 0,
  },
  editIcon: {
    fontSize: 16,
    marginLeft: Metrics.spacing.sm,
  },
});

export default UserPreferencesScreen;
