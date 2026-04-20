import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';

const PermissionScreen = ({navigation}) => {
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <View style={GlobalStyles.containerWhite}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Permissions</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* WhatsApp Notification */}
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>Whatsapp Notification</Text>
            <Text style={styles.settingDesc}>
              When enabled, you can receive whatsapp notification from Gullak.
            </Text>
          </View>
          <Switch
            value={whatsappEnabled}
            onValueChange={setWhatsappEnabled}
            trackColor={{false: '#D1D1D6', true: Colors.primaryDark}}
            thumbColor={Colors.white}
          />
        </View>

        {/* Unlock with biometric */}
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>Unlock with biometric</Text>
            <Text style={styles.settingDesc}>
              When enabled, you'll need to use biometric to open Gullak.
            </Text>
          </View>
          <Switch
            value={biometricEnabled}
            onValueChange={setBiometricEnabled}
            trackColor={{false: '#D1D1D6', true: Colors.primaryDark}}
            thumbColor={Colors.white}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },
  backBtn: {
    marginRight: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },
  backArrow: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  content: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },
  settingInfo: {
    flex: 1,
    marginRight: Metrics.spacing.md,
  },
  settingTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  settingDesc: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
});

export default PermissionScreen;
