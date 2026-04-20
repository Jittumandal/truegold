import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Colors, Metrics, GlobalStyles, CommonStyles} from '../../theme';

const AUTOPAY_DATA = [
  {
    id: '1',
    name: 'Digital Gold',
    amount: '50',
    frequency: 'per day',
    until: '2 April 2031',
    upiId: '***ashsing****bl',
    paused: true,
  },
  {
    id: '2',
    name: 'Digital Gold 2',
    amount: '750',
    frequency: 'per month',
    until: '2 April 2031',
    upiId: '***ashsing****bl',
    paused: true,
  },
  {
    id: '3',
    name: 'Digital Gold 3',
    amount: '100',
    frequency: 'one time',
    until: '2 April 2031',
    upiId: '***ashsing****bl',
    paused: true,
  },
];

const AUTOPAY_SECTION_2 = [
  {
    id: '4',
    name: 'Digital Gold',
    amount: '50',
    frequency: 'per day',
    until: '2 April 2031',
    upiId: '***ashsing****bl',
    paused: true,
  },
];

const AutopayCard = ({item, showDelete = true}) => {
  const [paused, setPaused] = useState(item.paused);

  return (
    <View style={styles.autopayCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardName}>{item.name}</Text>
        <View style={styles.pausedRow}>
          <Text style={styles.pausedLabel}>Paused</Text>
          <Switch
            value={!paused}
            onValueChange={v => setPaused(!v)}
            trackColor={{false: '#ccc', true: Colors.gold}}
            thumbColor={Colors.white}
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          />
        </View>
      </View>

      <View style={styles.amountRow}>
        <Text style={styles.amountSymbol}>₹</Text>
        <Text style={styles.amountValue}>{item.amount}</Text>
        <Text style={styles.frequencyText}>  {item.frequency}</Text>
      </View>

      <Text style={styles.detailText}>until {item.until}</Text>
      <Text style={styles.detailText}>upi id: {item.upiId}</Text>

      {showDelete && (
        <TouchableOpacity style={styles.deleteButton} activeOpacity={0.7}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const AutopaysScreen = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={CommonStyles.headerWithBorder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={CommonStyles.backBtnMd}>
          <Text style={CommonStyles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.headerTitleLg}>Autopay's</Text>
      </View>

      <ScrollView
        style={CommonStyles.content}
        contentContainerStyle={CommonStyles.contentContainer}
        bounces={false}>
        {/* First Autopays Section */}
        <Text style={styles.sectionTitle}>Autopays</Text>

        {AUTOPAY_DATA.map(item => (
          <AutopayCard key={item.id} item={item} showDelete={true} />
        ))}

        {/* Second Autopays Section */}
        <Text style={[styles.sectionTitle, {marginTop: Metrics.spacing.lg}]}>
          Autopays
        </Text>

        {AUTOPAY_SECTION_2.map(item => (
          <AutopayCard key={item.id} item={item} showDelete={false} />
        ))}
      </ScrollView>

      {/* Right gold border accent */}
      <View style={styles.rightBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '700',
    fontStyle: 'italic',
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  autopayCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderLeftWidth: 3,
    borderLeftColor: Colors.gold,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.spacing.sm,
  },
  cardName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  pausedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pausedLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginRight: 4,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: Metrics.spacing.xs,
  },
  amountSymbol: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  amountValue: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: '800',
    color: Colors.text,
  },
  frequencyText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
  },
  detailText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  deleteButton: {
    marginTop: Metrics.spacing.sm,
  },
  deleteText: {
    fontSize: Metrics.fontSize.medium,
    color: '#E53935',
    fontWeight: '600',
  },
  rightBorder: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: Colors.gold,
  },
});

export default AutopaysScreen;
