import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const FREQUENCY_TABS = ['Daily', 'Monthly', 'Onetime'];

const InvestDashboardScreen = ({navigation}) => {
  const [selectedFrequency, setSelectedFrequency] = useState('Daily');
  const [amount, setAmount] = useState(50);
  const [sipStepUp, setSipStepUp] = useState(true);

  const handleIncrement = () => setAmount(prev => prev + 10);
  const handleDecrement = () => setAmount(prev => (prev > 10 ? prev - 10 : prev));

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>INVEST Dashboard</Text>
        <View style={styles.headerIcons}>
          <View style={{marginLeft: Metrics.spacing.sm}}><MaterialIcon name="chart" size={18} color={Colors.primary} /></View>
          <View style={{marginLeft: Metrics.spacing.sm}}><MaterialIcon name="bell" size={18} color={Colors.primary} /></View>
          <View style={{marginLeft: Metrics.spacing.sm}}><MaterialIcon name="person" size={18} color={Colors.primary} /></View>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}>
        {/* Estimated Returns Badge */}
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Estimated Gold Returns Over 5 Years</Text>
          </View>
        </View>

        {/* Estimated Value Card */}
        <View style={styles.estimateCard}>
          <Text style={styles.estimateLabel}>Estimated Value</Text>
          <View style={styles.estimateValueRow}>
            <MaterialIcon name="gold" size={22} color={Colors.primary} />
            <Text style={styles.estimateValue}> 1,18,1222</Text>
          </View>

          <View style={styles.estimateStats}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}><MaterialIcon name="chartUp" size={14} color={Colors.primary} /><Text style={styles.statItem}> Investment: ₹ 91,250</Text></View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 8}}><MaterialIcon name="money" size={14} color={Colors.primary} /><Text style={styles.statItem}> Earnings: ₹ 26,872</Text></View>
          </View>

          {/* Gold Image */}
          <View style={styles.goldImageContainer}>
            <MaterialIcon name="gold" size={60} color={Colors.primary} />
          </View>
        </View>

        {/* Frequency Tabs */}
        <View style={styles.frequencyRow}>
          {FREQUENCY_TABS.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.frequencyTab,
                selectedFrequency === tab && styles.frequencyTabActive,
              ]}
              onPress={() => setSelectedFrequency(tab)}
              activeOpacity={0.7}>
              <Text
                style={[
                  styles.frequencyTabText,
                  selectedFrequency === tab && styles.frequencyTabTextActive,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Amount Selector */}
        <View style={styles.amountRow}>
          <MaterialIcon name="gold" size={22} color={Colors.primary} />
          <View style={styles.amountCenter}>
            <TouchableOpacity onPress={handleDecrement} style={styles.amountBtn} activeOpacity={0.7}>
              <Text style={styles.amountBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.amountValue}>₹ {amount}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.amountBtn} activeOpacity={0.7}>
              <Text style={styles.amountBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SIP Step-up */}
        <TouchableOpacity
          style={styles.sipRow}
          onPress={() => setSipStepUp(!sipStepUp)}
          activeOpacity={0.7}>
          <View style={styles.sipCheckbox}>
            {sipStepUp && <MaterialIcon name="check" size={14} color={Colors.white} />}
          </View>
          <Text style={styles.sipLabel}>Annual SIP Step-up (10%)</Text>
          <View style={{flex: 1}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}><MaterialIcon name="edit" size={14} color={Colors.primary} /><Text style={styles.sipEdit}> Edit</Text></View>
        </TouchableOpacity>
      </ScrollView>

      {/* Proceed Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Checkout')}
          activeOpacity={0.8}>
          <Text style={styles.proceedText}>Proceed</Text>
        </TouchableOpacity>
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
    backgroundColor: Colors.white,
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
    flex: 1,
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 18,
    marginLeft: Metrics.spacing.sm,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  badgeContainer: {
    alignItems: 'center',
    marginTop: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
  },
  badge: {
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
  },
  badgeText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: '600',
    color: Colors.text,
  },
  estimateCard: {
    backgroundColor: Colors.gold,
    marginHorizontal: Metrics.spacing.lg,
    borderRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.lg,
    alignItems: 'center',
    marginBottom: Metrics.spacing.lg,
  },
  estimateLabel: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  estimateValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.spacing.md,
  },
  coinIcon: {
    fontSize: 24,
  },
  estimateValue: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
  },
  estimateStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.spacing.md,
  },
  statItem: {
    fontSize: Metrics.fontSize.small,
    color: Colors.text,
    fontWeight: '500',
  },
  goldImageContainer: {
    width: 100,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldEmoji: {
    fontSize: 50,
  },
  frequencyRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
  },
  frequencyTab: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.sm,
    borderRadius: Metrics.borderRadius.full,
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    marginHorizontal: 4,
    backgroundColor: Colors.white,
  },
  frequencyTabActive: {
    backgroundColor: Colors.primaryDark,
    borderColor: Colors.primaryDark,
  },
  frequencyTabText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
  },
  frequencyTabTextActive: {
    color: Colors.white,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
  },
  amountIcon: {
    fontSize: 28,
    marginRight: Metrics.spacing.md,
  },
  amountCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  amountBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  amountValue: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginHorizontal: Metrics.spacing.lg,
  },
  sipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Metrics.spacing.lg,
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  sipCheckbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.gold,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.spacing.sm,
  },
  sipCheck: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '700',
  },
  sipLabel: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
  },
  sipEdit: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.primary,
    fontWeight: '600',
  },
  bottomBar: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  proceedButton: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },
  proceedText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.white,
  },
});

export default InvestDashboardScreen;
