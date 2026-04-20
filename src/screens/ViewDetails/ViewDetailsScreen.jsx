import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const GOLD_INVESTMENTS = [
  {
    id: '1',
    name: 'Digital Gold',
    saved: '95.55',
    amount: '50',
    frequency: 'daily',
    paused: true,
  },
  {
    id: '2',
    name: 'Digital Gold 2',
    saved: '95.55',
    amount: '50',
    frequency: 'daily',
    paused: true,
  },
];

const GoldCard = ({item}) => {
  const [paused, setPaused] = useState(item.paused);
  return (
    <View style={styles.goldCard}>
      <View style={styles.goldCardTop}>
        <View style={{flex: 1}}>
          <Text style={styles.goldCardName}>{item.name}</Text>
          <Text style={styles.goldCardLabel}>YOU SAVED</Text>
          <Text style={styles.goldCardSaved}>₹{item.saved}</Text>
        </View>
        <View style={styles.goldBarImage}>
          <MaterialIcon name="gold" size={40} color={Colors.primary} />
        </View>
      </View>
      <View style={styles.goldCardBottom}>
        <View style={styles.goldCardActions}>
          <Text style={styles.goldCardAmount}>₹{item.amount}</Text>
          <View style={{marginLeft: 4}}><MaterialIcon name="edit" size={14} color={Colors.primary} /></View>
          <Text style={styles.goldCardFreq}>  {item.frequency}</Text>
        </View>
        <View style={styles.goldCardRight}>
          <Text style={styles.pausedText}>PAUSED</Text>
          <Switch
            value={!paused}
            onValueChange={v => setPaused(!v)}
            trackColor={{false: '#ccc', true: Colors.gold}}
            thumbColor={Colors.white}
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          />
          <Text style={styles.untilText}>Until{'\n'}activated</Text>
        </View>
      </View>
    </View>
  );
};

const ViewDetailsScreen = ({navigation}) => {
  const userName = 'Jitendra Mandal';
  const phoneNumber = '9999098558';
  const goldPrice = '15,036.68';
  const [absEnabled, setAbsEnabled] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.topBar}>
          <View style={styles.userInfo}>
            <TouchableOpacity
              style={styles.menuIcon}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}>
              <MaterialIcon name="menu" size={18} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{userName} ▾</Text>
              <Text style={styles.userPhone}>{phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.priceTag}>
            <MaterialIcon name="gold" size={18} color={Colors.primary} />
            <Text style={[styles.priceText, {marginLeft: 4}]}>{goldPrice}/gm</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}>
        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>Summary</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Autopays')}
              activeOpacity={0.7}
              style={styles.viewDetailsBtn}>
              <Text style={styles.viewDetailsText}>View Details →</Text>
            </TouchableOpacity>
          </View>

          {/* Total */}
          <View style={styles.totalRow}>
            <View>
              <Text style={styles.totalLabel}>TOTAL</Text>
              <Text style={styles.totalAmount}>₹692.1</Text>
              <Text style={styles.totalSub}>into 0.0128g Gold</Text>
            </View>
            <View style={styles.absSection}>
              <View style={styles.absRow}>
                <Text style={styles.absLabel}>ABS ⓘ</Text>
                <Switch
                  value={absEnabled}
                  onValueChange={setAbsEnabled}
                  trackColor={{false: '#ccc', true: Colors.gold}}
                  thumbColor={Colors.white}
                  style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                />
              </View>
              <Text style={styles.changeText}>↓ 1.58%</Text>
            </View>
          </View>

          {/* Invested & Rewards */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Invested ⓘ</Text>
              <Text style={styles.statValue}>₹194.17</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Rewards</Text>
              <Text style={styles.statValue}>₹501</Text>
            </View>
          </View>

          {/* TrueGold Case */}
          <View style={styles.caseRow}>
            <MaterialIcon name="trophy" size={20} color={Colors.primary} />
            <Text style={[styles.caseText, {marginLeft: 6}]}>TrueGold Case : ₹501</Text>
            <MaterialIcon name="lock" size={16} color={Colors.primary} />
          </View>
        </View>

        {/* Your TrueGold Section */}
        <Text style={styles.sectionTitle}>Your TrueGold</Text>

        {GOLD_INVESTMENTS.map(item => (
          <GoldCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.gold,
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.lg,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.spacing.sm,
  },
  menuIconText: {
    color: Colors.white,
    fontSize: 16,
  },
  userDetails: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '700',
    color: Colors.text,
  },
  userPhone: {
    fontSize: Metrics.fontSize.small,
    color: Colors.text,
    opacity: 0.7,
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: Metrics.spacing.xs,
  },
  priceIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  priceText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: '700',
    color: Colors.primary,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },
  /* Summary Card */
  summaryCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: Metrics.spacing.lg,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.spacing.md,
  },
  summaryTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  viewDetailsBtn: {
    paddingVertical: Metrics.spacing.xs,
  },
  viewDetailsText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.primary,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Metrics.spacing.md,
    paddingBottom: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  totalLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  totalAmount: {
    fontSize: Metrics.fontSize.largeHeading,
    fontWeight: '800',
    color: Colors.text,
  },
  totalSub: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  absSection: {
    alignItems: 'flex-end',
  },
  absRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  absLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginRight: 4,
  },
  changeText: {
    fontSize: Metrics.fontSize.small,
    color: '#E53935',
    fontWeight: '600',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.spacing.md,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderRadius: Metrics.borderRadius.small,
    padding: Metrics.spacing.sm,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },
  caseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
  },
  caseIcon: {
    fontSize: 16,
    marginRight: Metrics.spacing.sm,
  },
  caseText: {
    flex: 1,
    fontSize: Metrics.fontSize.medium,
    fontWeight: '700',
    color: Colors.text,
  },
  caseLock: {
    fontSize: 16,
  },
  /* Your TrueGold */
  sectionTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  goldCard: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: Metrics.spacing.md,
  },
  goldCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.spacing.sm,
  },
  goldCardName: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  goldCardLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  goldCardSaved: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: '800',
    color: Colors.text,
  },
  goldBarImage: {
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldCardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    borderRadius: Metrics.borderRadius.small,
    paddingHorizontal: Metrics.spacing.sm,
    paddingVertical: Metrics.spacing.sm,
  },
  goldCardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldCardAmount: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.white,
  },
  goldCardEditIcon: {
    fontSize: 12,
    color: Colors.white,
  },
  goldCardFreq: {
    fontSize: Metrics.fontSize.small,
    color: Colors.white,
    opacity: 0.9,
  },
  goldCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pausedText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: '700',
    color: Colors.white,
    marginRight: 4,
  },
  untilText: {
    fontSize: 9,
    color: Colors.white,
    opacity: 0.8,
    textAlign: 'center',
  },
});

export default ViewDetailsScreen;
