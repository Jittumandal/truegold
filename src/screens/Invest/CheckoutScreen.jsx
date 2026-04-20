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

const UPI_OPTIONS = [
  {id: 'phonepe', label: 'PhonePe', iconName: 'mobile'},
  {id: 'gpay', label: 'GPay', iconName: 'creditcard'},
  {id: 'credpay', label: 'CredPay', iconName: 'diamond'},
  {id: 'other', label: 'Other UPI', iconName: 'bank'},
];

const CheckoutScreen = ({navigation}) => {
  const amount = 50;
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
        {/* Amount Card */}
        <View style={styles.amountCard}>
          <Text style={styles.autosaveLabel}>Daily Autosave</Text>
          <Text style={styles.amountValue}>₹ {amount}</Text>
          <Text style={styles.amountSub}>in Digital Gold</Text>
          <Text style={styles.gstNote}>1% GST Applicable on all transactions</Text>
          <View style={styles.poweredRow}>
            <Text style={styles.poweredText}>powered by </Text>
            <View style={styles.upiBadge}>
              <Text style={styles.upiText}>UPI</Text>
            </View>
            <Text style={styles.poweredText}> Autopay</Text>
          </View>
        </View>

        {/* Offers */}
        <View style={styles.offerRow}>
          <View style={styles.offerLeft}>
            <MaterialIcon name="tag" size={18} color={Colors.primary} />
            <Text style={[styles.offerLabel, {marginLeft: 6}]}>Offers</Text>
          </View>
          <TouchableOpacity style={styles.viewAllBtn} activeOpacity={0.7}>
            <Text style={styles.viewAllText}>View all offers</Text>
            <Text style={styles.viewAllArrow}> ▸</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Offers */}
        <View style={styles.offerRow}>
          <View style={styles.offerLeft}>
            <MaterialIcon name="money" size={18} color={Colors.primary} />
            <Text style={[styles.offerLabel, {marginLeft: 6}]}>Payment Offers</Text>
          </View>
          <TouchableOpacity style={styles.viewAllBtn} activeOpacity={0.7}>
            <Text style={styles.viewAllText}>View all offers</Text>
            <Text style={styles.viewAllArrow}> ▸</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Pay via UPI */}
        <Text style={styles.sectionTitle}>Pay via UPI</Text>
        <View style={styles.upiGrid}>
          {UPI_OPTIONS.map(opt => (
            <TouchableOpacity key={opt.id} style={styles.upiOption} activeOpacity={0.7}>
              <View style={styles.upiIconBox}>
                <MaterialIcon name={opt.iconName} size={22} color={Colors.primary} />
              </View>
              <Text style={styles.upiLabel}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Secured */}
        <View style={styles.securedRow}>
          <MaterialIcon name="lock" size={16} color={Colors.primary} />
          <Text style={styles.securedText}> 100% secured payment</Text>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={CommonStyles.bottomBar}>
        <TouchableOpacity
          style={styles.autosaveButton}
          onPress={() => navigation.navigate('SetAutopay')}
          activeOpacity={0.8}>
          <Text style={styles.autosaveText}>Autosave ₹ {amount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.gold,
    marginBottom: Metrics.spacing.lg,
  },
  autosaveLabel: {
    fontSize: Metrics.fontSize.medium,
    fontStyle: 'italic',
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.sm,
  },
  amountValue: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 4,
  },
  amountSub: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.sm,
  },
  gstNote: {
    fontSize: 10,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.sm,
  },
  poweredRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  poweredText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  upiBadge: {
    backgroundColor: '#5F259F',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  upiText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.white,
  },
  /* Offers */
  offerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  offerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerIcon: {
    fontSize: 18,
    marginRight: Metrics.spacing.sm,
  },
  offerLabel: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '600',
    color: Colors.text,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: Metrics.spacing.xs,
  },
  viewAllText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: '600',
    color: Colors.text,
  },
  viewAllArrow: {
    fontSize: Metrics.fontSize.small,
    color: Colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: Metrics.spacing.md,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  upiGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.spacing.lg,
  },
  upiOption: {
    alignItems: 'center',
    width: '22%',
  },
  upiIconBox: {
    width: 52,
    height: 52,
    borderRadius: Metrics.borderRadius.medium,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: Metrics.spacing.xs,
  },
  upiIcon: {
    fontSize: 24,
  },
  upiLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },
  securedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.spacing.md,
  },
  securedIcon: {
    fontSize: 14,
  },
  securedText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  autosaveButton: {
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },
  autosaveText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
});

export default CheckoutScreen;
