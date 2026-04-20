import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import {Colors, Metrics, GlobalStyles, CommonStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const RELATIONSHIPS = [
  'Father',
  'Mother',
  'Husband',
  'Wife',
  'Brother',
  'Sister',
  'Son',
  'Daughter',
  'Other',
];

const NomineeDetailsScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [relationship, setRelationship] = useState('');
  const [showRelationship, setShowRelationship] = useState(false);

  const renderRelationshipItem = ({item}) => {
    const isSelected = relationship === item;
    return (
      <TouchableOpacity
        style={[styles.relationItem, isSelected && styles.relationItemActive]}
        onPress={() => {
          setRelationship(item);
          setShowRelationship(false);
        }}
        activeOpacity={0.7}>
        <Text style={[styles.relationText, isSelected && styles.relationTextActive]}>
          {item}
        </Text>
        <View style={[styles.radioCircle, isSelected && styles.radioCircleActive]}>
          {isSelected && <View style={styles.radioDot} />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={CommonStyles.headerWithBorder}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={CommonStyles.backBtnMd} activeOpacity={0.7}>
          <Text style={CommonStyles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.headerTitleLg}>Add Nominee</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        {/* Enter Name */}
        <View style={styles.inputRow}>
          <MaterialIcon name="person" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, {marginLeft: 8}]}
            placeholder="Enter Name"
            placeholderTextColor={Colors.primary}
            value={name}
            onChangeText={setName}
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* Phone Number */}
        <View style={styles.inputRow}>
          <MaterialIcon name="phone" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, {marginLeft: 8}]}
            placeholder="Phone Number"
            placeholderTextColor={Colors.primary}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* Date of Birth */}
        <View style={styles.inputRow}>
          <MaterialIcon name="calendar" size={20} color={Colors.primary} />
          <TextInput
            style={[styles.textInput, {marginLeft: 8}]}
            placeholder="Select Date of Birth"
            placeholderTextColor={Colors.textSecondary}
            value={dob}
            onChangeText={setDob}
          />
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </View>

        {/* Relationship */}
        <TouchableOpacity
          style={styles.inputRow}
          onPress={() => setShowRelationship(true)}
          activeOpacity={0.7}>
          <MaterialIcon name="heart" size={20} color={Colors.primary} />
          <Text
            style={[
              styles.inputValue,
              {marginLeft: 8},
              !relationship && {color: Colors.primary},
            ]}>
            {relationship || 'Relationship'}
          </Text>
          <MaterialIcon name="edit" size={16} color={Colors.primary} />
        </TouchableOpacity>
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

      {/* Relationship Picker Modal */}
      <Modal
        visible={showRelationship}
        transparent
        animationType="slide"
        onRequestClose={() => setShowRelationship(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowRelationship(false)}>
          <View style={styles.modalContent}>
            {/* Top fields (condensed) */}
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => setShowRelationship(false)}
                style={styles.modalBackBtn}
                activeOpacity={0.7}>
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>
              <Text style={styles.modalHeaderTitle}>Add Nominee</Text>
            </View>

            <View style={styles.modalFields}>
              <View style={styles.inputRowSmall}>
                <MaterialIcon name="person" size={14} color={Colors.primary} />
                <Text style={[styles.inputSmallText, {marginLeft: 4}]}>{name || 'Enter Name'}</Text>
                <MaterialIcon name="edit" size={12} color={Colors.primary} />
              </View>
              <View style={styles.inputRowSmall}>
                <MaterialIcon name="phone" size={14} color={Colors.primary} />
                <Text style={[styles.inputSmallText, {marginLeft: 4}]}>{phone || 'Phone Number'}</Text>
                <MaterialIcon name="edit" size={12} color={Colors.primary} />
              </View>
              <View style={styles.inputRowSmall}>
                <MaterialIcon name="calendar" size={14} color={Colors.primary} />
                <Text style={[styles.inputSmallText, {marginLeft: 4}]}>{dob || 'Select Date of Birth'}</Text>
                <MaterialIcon name="edit" size={12} color={Colors.primary} />
              </View>
            </View>

            {/* Relationship List */}
            <FlatList
              data={RELATIONSHIPS}
              renderItem={renderRelationshipItem}
              keyExtractor={item => item}
              style={styles.relationList}
              bounces={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
  inputIcon: {
    fontSize: 18,
    marginRight: Metrics.spacing.sm,
  },
  inputValue: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    fontWeight: '500',
  },
  textInput: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    padding: 0,
  },
  editIcon: {
    fontSize: 16,
    marginLeft: Metrics.spacing.sm,
  },
  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.sm,
  },
  modalBackBtn: {
    marginRight: Metrics.spacing.md,
    padding: Metrics.spacing.xs,
  },
  modalHeaderTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  modalFields: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.sm,
  },
  inputRowSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Metrics.borderRadius.full,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: 6,
    marginBottom: Metrics.spacing.sm,
    minHeight: 36,
  },
  inputIconSmall: {
    fontSize: 14,
    marginRight: Metrics.spacing.xs,
  },
  inputSmallText: {
    flex: 1,
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  editIconSmall: {
    fontSize: 12,
    marginLeft: Metrics.spacing.xs,
  },
  relationList: {
    paddingHorizontal: Metrics.spacing.lg,
  },
  relationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },
  relationItemActive: {
    backgroundColor: Colors.gold,
    marginHorizontal: -Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    borderBottomColor: Colors.gold,
  },
  relationText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '500',
    color: Colors.text,
  },
  relationTextActive: {
    fontWeight: '700',
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleActive: {
    borderColor: Colors.primary,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
});

export default NomineeDetailsScreen;
