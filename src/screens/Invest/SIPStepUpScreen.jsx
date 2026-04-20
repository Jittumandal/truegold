import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Metrics, GlobalStyles, CommonStyles} from '../../theme';
import MaterialIcon from '../../components/common/MaterialIcon';

const SIPStepUpScreen = ({navigation}) => {
  const [stepUpPercent, setStepUpPercent] = useState(10);

  const handleIncrease = () => setStepUpPercent(prev => Math.min(prev + 1, 50));
  const handleDecrease = () => setStepUpPercent(prev => Math.max(prev - 1, 1));

  // Simple bar chart values
  const barData = [
    {label: '₹50/day SIP', value: 0.5, amount: '₹1.18 L'},
    {label: 'with 10% Step-Up', value: 0.85, amount: '₹1.42 L'},
  ];

  return (
    <View style={GlobalStyles.container}>
      {/* Header */}
      <View style={CommonStyles.headerWithBorder}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={CommonStyles.backBtnSm} activeOpacity={0.7}>
          <Text style={CommonStyles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.headerTitleSm}>Edit Step-up</Text>
        <View style={{flex: 1}} />
        <TouchableOpacity style={styles.faqBtn} activeOpacity={0.7}>
          <Text style={styles.faqText}>FAQs ↗</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={CommonStyles.content}
        contentContainerStyle={CommonStyles.contentContainer}
        bounces={false}>
        {/* Calculator Card */}
        <View style={styles.calcCard}>
          <Text style={styles.calcTitle}>Step-up SIP Calculator</Text>
          <Text style={styles.calcSubtitle}>Step up returns in 5 years</Text>

          {/* Bar Chart */}
          <View style={styles.chartContainer}>
            {barData.map((bar, index) => (
              <View key={index} style={styles.barGroup}>
                <Text style={styles.barAmount}>{bar.amount}</Text>
                <View
                  style={[
                    styles.bar,
                    {
                      height: bar.value * 120,
                      backgroundColor: index === 0 ? Colors.gold : '#4CAF50',
                    },
                  ]}
                />
                <Text style={styles.barLabel}>{bar.label}</Text>
              </View>
            ))}
          </View>

          {/* View Future SIP */}
          <TouchableOpacity style={styles.futureSipBtn} activeOpacity={0.7}>
            <Text style={styles.futureSipText}>View future SIP Amounts →</Text>
          </TouchableOpacity>
        </View>

        {/* Step-Up Percentage */}
        <Text style={styles.sipStepTitle}>Annual SIP Step-Up</Text>

        <View style={styles.percentageRow}>
          <TouchableOpacity onPress={handleDecrease} style={styles.circleBtn} activeOpacity={0.7}>
            <Text style={styles.circleBtnText}>−</Text>
          </TouchableOpacity>
          <View style={styles.percentCenter}>
            <MaterialIcon name="trophy" size={22} color={Colors.primary} />
            <Text style={styles.percentValue}> {stepUpPercent}%</Text>
          </View>
          <TouchableOpacity onPress={handleIncrease} style={styles.circleBtn} activeOpacity={0.7}>
            <Text style={styles.circleBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Slider (simple visual) */}
        <View style={styles.sliderTrack}>
          <View style={[styles.sliderFill, {width: `${(stepUpPercent / 50) * 100}%`}]} />
          <View
            style={[
              styles.sliderThumb,
              {left: `${(stepUpPercent / 50) * 100}%`},
            ]}
          />
        </View>

        {/* Pause/Cancel */}
        <View style={styles.pauseRow}>
          <MaterialIcon name="pause" size={16} color={Colors.primary} />
          <Text style={styles.pauseText}> Pause/Cancel anytime</Text>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View style={CommonStyles.bottomBar}>
        <TouchableOpacity
          style={CommonStyles.primaryButton}
          onPress={() => navigation.navigate('SIPSuccess')}
          activeOpacity={0.8}>
          <Text style={CommonStyles.primaryButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  faqBtn: {
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.xs,
  },
  faqText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '700',
    color: Colors.text,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },
  /* Calculator Card */
  calcCard: {
    backgroundColor: Colors.gold,
    borderRadius: Metrics.borderRadius.large,
    padding: Metrics.spacing.lg,
    alignItems: 'center',
    marginBottom: Metrics.spacing.lg,
  },
  calcTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  calcSubtitle: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    opacity: 0.8,
    marginBottom: Metrics.spacing.lg,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 160,
    marginBottom: Metrics.spacing.md,
    width: '100%',
  },
  barGroup: {
    alignItems: 'center',
    marginHorizontal: Metrics.spacing.lg,
  },
  barAmount: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  bar: {
    width: 60,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  barLabel: {
    fontSize: 10,
    color: Colors.text,
    marginTop: 4,
    textAlign: 'center',
  },
  futureSipBtn: {
    backgroundColor: '#4CAF50',
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.sm,
    width: '100%',
    alignItems: 'center',
  },
  futureSipText: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: '600',
    color: Colors.white,
  },
  /* Step-Up */
  sipStepTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Metrics.spacing.md,
  },
  percentageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.spacing.lg,
  },
  circleBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.dotInactive,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  circleBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  percentCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Metrics.spacing.xl,
  },
  percentIcon: {
    fontSize: 24,
  },
  percentValue: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
  },
  sliderTrack: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginHorizontal: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.lg,
    position: 'relative',
  },
  sliderFill: {
    height: 6,
    backgroundColor: Colors.gold,
    borderRadius: 3,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  sliderThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.gold,
    borderWidth: 3,
    borderColor: Colors.white,
    position: 'absolute',
    top: -6,
    marginLeft: -9,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pauseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  pauseIcon: {
    fontSize: 16,
  },
  pauseText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.textSecondary,
  },
});

export default SIPStepUpScreen;
