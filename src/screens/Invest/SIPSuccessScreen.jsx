import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const SIPSuccessScreen = ({navigation}) => {
  return (
    <View style={GlobalStyles.containerWhite}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SIP Setup Successfull</Text>
      </View>

      {/* Gold Background Top */}
      <View style={styles.goldTop}>
        {/* Safe / Vault Icon */}
        <View style={styles.vaultContainer}>
          <MaterialIcon name="bank" size={48} color={Colors.primary} />
          <View style={styles.checkBadge}>
            <MaterialIcon name="check" size={16} color={Colors.white} />
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.successTitle}>SIP Setup Successful</Text>
        <Text style={styles.successSubtitle}>Gold bought with first SIP installment</Text>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <MaterialIcon name="gold" size={18} color={Colors.primary} />
            <Text style={styles.statText}>₹50 Daily</Text>
          </View>
          <Text style={styles.statDivider}>|</Text>
          <View style={styles.statItem}>
            <MaterialIcon name="gold" size={18} color={Colors.primary} />
            <Text style={styles.statText}>0.0032gm bought</Text>
          </View>
        </View>

        {/* Total Gold in Vault */}
        <View style={styles.vaultCard}>
          <View style={styles.vaultCardHeader}>
            <View>
              <Text style={styles.vaultLabel}>Total Gold in Vault</Text>
              <Text style={styles.vaultValue}>0.0032gm</Text>
            </View>
            <View style={styles.vaultIconBox}>
              <MaterialIcon name="secureLock" size={24} color={Colors.primary} />
            </View>
          </View>
        </View>

        {/* BIS Badge */}
        <View style={styles.bisBadge}>
          <MaterialIcon name="check" size={14} color="#4CAF50" />
          <Text style={styles.bisText}> BIS Hallmarked | 24K 999 Pure Gold</Text>
        </View>
      </View>

      {/* GO HOME Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.goHomeButton}
          onPress={() => navigation.popToTop()}
          activeOpacity={0.8}>
          <Text style={styles.goHomeText}>GO HOME</Text>
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
    zIndex: 10,
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
  goldTop: {
    backgroundColor: Colors.gold,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  vaultContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vaultEmoji: {
    fontSize: 64,
  },
  checkBadge: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  checkIcon: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.xl,
  },
  successTitle: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: Metrics.spacing.sm,
  },
  successSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginBottom: Metrics.spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.spacing.xl,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  statText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.text,
  },
  statDivider: {
    fontSize: Metrics.fontSize.body,
    color: Colors.dotInactive,
    marginHorizontal: Metrics.spacing.md,
  },
  vaultCard: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: Metrics.spacing.md,
  },
  vaultCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vaultLabel: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  vaultValue: {
    fontSize: Metrics.fontSize.heading,
    fontWeight: '800',
    color: Colors.text,
  },
  vaultIconBox: {
    width: 44,
    height: 44,
    borderRadius: Metrics.borderRadius.medium,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vaultSmallIcon: {
    fontSize: 24,
  },
  bisBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
  },
  bisCheck: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4CAF50',
  },
  bisText: {
    fontSize: Metrics.fontSize.small,
    fontWeight: '600',
    color: '#2E7D32',
  },
  bottomBar: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  goHomeButton: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },
  goHomeText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 1,
  },
});

export default SIPSuccessScreen;
