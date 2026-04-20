import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';

const IndiaMap = () => (
  <View style={styles.mapContainer}>
    {/* Stylized India map using geometric shapes */}
    <View style={styles.mapOuter}>
      {/* Map body */}
      <View style={styles.mapBody}>
        {/* Northern region */}
        <View style={styles.mapNorth} />
        {/* Central region */}
        <View style={styles.mapCentral} />
        {/* Southern region */}
        <View style={styles.mapSouth} />
      </View>
      {/* Accent patches */}
      <View style={[styles.mapAccent, {top: '15%', left: '20%'}]} />
      <View style={[styles.mapAccent, {top: '25%', right: '15%', backgroundColor: Colors.primary}]} />
      <View style={[styles.mapAccent, {bottom: '30%', left: '30%', backgroundColor: Colors.primary}]} />
      {/* Ashoka Chakra */}
      <View style={styles.chakra}>
        <View style={styles.chakraInner}>
          {[0, 30, 60, 90, 120, 150].map(deg => (
            <View
              key={deg}
              style={[
                styles.chakraSpoke,
                {transform: [{rotate: `${deg}deg`}]},
              ]}
            />
          ))}
        </View>
      </View>
      {/* Fist / Hand symbol */}
      <View style={styles.fistContainer}>
        <View style={styles.fistBase} />
        <View style={styles.fistThumb} />
        {[0, 1, 2, 3].map(i => (
          <View
            key={i}
            style={[styles.fistFinger, {left: 4 + i * 7}]}
          />
        ))}
      </View>
    </View>
  </View>
);

const MissionVisionScreen = ({navigation}) => {
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
        <Text style={styles.headerTitle}>Our Mission & Vision</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        bounces={false}>
        {/* Heading */}
        <Text style={styles.heading}>
          Helping a Billion Indians{'\n'}Grow their Wealth
        </Text>

        {/* Mission paragraph */}
        <Text style={styles.paragraph}>
          Our Mission is to help a Billion Indians grow their wealth by giving
          people ways to save easily & invest smartly. We aim to create an
          all-inclusive ecosystem of saving which is accessible to all.
        </Text>

        {/* India Map Illustration */}
        <IndiaMap />

        {/* Second heading */}
        <Text style={styles.heading}>
          A Financially Atmanirbhar{'\n'}Bharat
        </Text>

        {/* Vision paragraph */}
        <Text style={styles.paragraph}>
          Our Vision is to create a financially Atmanirbhar Bharat where every
          Indian has the tools and knowledge to build long-term wealth. We
          believe that saving in gold is one of the most trusted and accessible
          ways to secure one's financial future.
        </Text>

        {/* Values Section */}
        <View style={styles.valuesSection}>
          <Text style={styles.valuesTitle}>Our Core Values</Text>

          <View style={styles.valueItem}>
            <View style={styles.valueDot} />
            <View style={styles.valueContent}>
              <Text style={styles.valueHeading}>Accessibility</Text>
              <Text style={styles.valueText}>
                Making wealth creation accessible to every Indian, regardless of
                income level.
              </Text>
            </View>
          </View>

          <View style={styles.valueItem}>
            <View style={styles.valueDot} />
            <View style={styles.valueContent}>
              <Text style={styles.valueHeading}>Trust</Text>
              <Text style={styles.valueText}>
                Building trust through transparency, security, and BIS
                Hallmarked 24K pure gold.
              </Text>
            </View>
          </View>

          <View style={styles.valueItem}>
            <View style={styles.valueDot} />
            <View style={styles.valueContent}>
              <Text style={styles.valueHeading}>Simplicity</Text>
              <Text style={styles.valueText}>
                Keeping savings simple so anyone can start with as little as ₹10
                a day.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.xxl,
  },
  heading: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.text,
    lineHeight: 34,
    marginTop: Metrics.spacing.lg,
    marginBottom: Metrics.spacing.md,
  },
  paragraph: {
    fontSize: Metrics.fontSize.body,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: Metrics.spacing.lg,
  },
  // India Map illustration styles
  mapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.spacing.xl,
    paddingVertical: Metrics.spacing.lg,
  },
  mapOuter: {
    width: 220,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapBody: {
    width: 160,
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  mapNorth: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 120,
    height: 70,
    backgroundColor: '#E8F5E9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 10,
  },
  mapCentral: {
    position: 'absolute',
    top: 50,
    left: 10,
    width: 140,
    height: 80,
    backgroundColor: '#E8F5E9',
    borderRadius: 15,
  },
  mapSouth: {
    position: 'absolute',
    bottom: 0,
    left: 35,
    width: 90,
    height: 90,
    backgroundColor: '#E8F5E9',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mapAccent: {
    position: 'absolute',
    width: 40,
    height: 35,
    backgroundColor: '#FF9800',
    borderRadius: 12,
    opacity: 0.6,
  },
  chakra: {
    position: 'absolute',
    top: '30%',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  chakraInner: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chakraSpoke: {
    position: 'absolute',
    width: 1.5,
    height: 32,
    backgroundColor: '#1565C0',
  },
  fistContainer: {
    position: 'absolute',
    bottom: '18%',
    width: 34,
    height: 44,
    alignItems: 'center',
  },
  fistBase: {
    position: 'absolute',
    bottom: 0,
    width: 30,
    height: 22,
    backgroundColor: Colors.text,
    borderRadius: 4,
  },
  fistThumb: {
    position: 'absolute',
    bottom: 18,
    left: 0,
    width: 8,
    height: 16,
    backgroundColor: Colors.text,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 2,
  },
  fistFinger: {
    position: 'absolute',
    bottom: 18,
    width: 5,
    height: 20,
    backgroundColor: Colors.text,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  // Values section
  valuesSection: {
    marginTop: Metrics.spacing.xl,
    backgroundColor: Colors.background,
    borderRadius: 16,
    padding: Metrics.spacing.lg,
  },
  valuesTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: Metrics.spacing.lg,
  },
  valueItem: {
    flexDirection: 'row',
    marginBottom: Metrics.spacing.lg,
  },
  valueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginTop: 6,
    marginRight: Metrics.spacing.md,
  },
  valueContent: {
    flex: 1,
  },
  valueHeading: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  valueText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
});

export default MissionVisionScreen;
