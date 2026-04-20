import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Metrics, GlobalStyles, CommonStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const SetAutopayScreen = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={CommonStyles.headerWithBorder}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={CommonStyles.backBtnMd} activeOpacity={0.7}>
          <Text style={CommonStyles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.headerTitleLg}>Checkout</Text>
      </View>

      <ScrollView
        style={CommonStyles.content}
        contentContainerStyle={CommonStyles.contentContainer}
        bounces={false}>
        {/* User Info */}
        <View style={styles.userCard}>
          <View style={styles.avatarBox}>
            <MaterialIcon name="person" size={28} color={Colors.primary} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Rajesh Kumar</Text>
            <Text style={styles.userEmail}>Truegoldmony@yespay</Text>
          </View>
        </View>

        {/* AutoPay Settings */}
        <View style={styles.settingsCard}>
          <Text style={styles.settingsTitle}>AutoPay settings</Text>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Repeats</Text>
            <Text style={styles.settingValue}>: As requested</Text>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Start Date</Text>
            <Text style={styles.settingValue}>: 19th Mar 2026</Text>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>End Date</Text>
            <Text style={styles.settingValue}>: 2nd Apr 2031</Text>
          </View>

          <View style={styles.mandateRow}>
            <Text style={styles.mandateLabel}>Maximum Mandate ⓘ</Text>
          </View>
          <Text style={styles.mandateNote}>Amount up to ₹50 will be auto paid</Text>
        </View>

        {/* Pay Using */}
        <View style={styles.payCard}>
          <View style={styles.payHeader}>
            <Text style={styles.payTitle}>Pay using</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bankRow}>
            <View style={styles.bankIcon}>
              <MaterialIcon name="bank" size={22} color={Colors.primary} />
            </View>
            <View style={styles.bankInfo}>
              <Text style={styles.bankName}>ICICI Bank - XX25</Text>
              <Text style={styles.bankType}>UPI</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Set Autopay Button */}
      <View style={CommonStyles.bottomBar}>
        <TouchableOpacity
          style={styles.autopayButton}
          onPress={() => navigation.navigate('SIPStepUp')}
          activeOpacity={0.8}>
          <Text style={styles.autopayBtnText}>SetAutopay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /* User Card */
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  avatarBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.spacing.md,
  },
  avatarIcon: {
    fontSize: 22,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  userEmail: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  /* Settings Card */
  settingsCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  settingsTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  settingRow: {
    flexDirection: 'row',
    marginBottom: Metrics.spacing.sm,
  },
  settingLabel: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    width: 100,
  },
  settingValue: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
  },
  mandateRow: {
    marginTop: Metrics.spacing.sm,
    marginBottom: 4,
  },
  mandateLabel: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
  },
  mandateNote: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  /* Pay Card */
  payCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  payHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.spacing.md,
  },
  payTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  changeText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.primary,
  },
  bankRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.spacing.md,
  },
  bankEmoji: {
    fontSize: 20,
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '600',
    color: Colors.text,
  },
  bankType: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  autopayButton: {
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },
  autopayBtnText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
});

export default SetAutopayScreen;
