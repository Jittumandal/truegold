import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {Colors, Metrics, GlobalStyles} from '../../theme';
import {onboardingSlides} from '../../constants';
import {OnboardingSlide, PaginationDots} from '../../components/onboarding';
import {AppButton} from '../../components/common';
import DecorativeBackground from '../../components/onboarding/DecorativeBackground';

const OnboardingScreen = ({navigation}) => {
  const {width: screenWidth} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  const handleMomentumScrollEnd = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    const index = Math.round(offset / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.background}
        translucent={false}
      />

      {/* Decorative Background Elements */}
      <DecorativeBackground />

      {/* Slider */}
      <View style={styles.sliderContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          decelerationRate="fast"
          snapToInterval={screenWidth}
          snapToAlignment="start"
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}>
          {onboardingSlides.map(item => (
            <OnboardingSlide key={item.id} item={item} screenWidth={screenWidth} />
          ))}
        </ScrollView>
      </View>

      {/* Bottom Section: Dots + Button */}
      <View style={styles.bottomContainer}>
        <PaginationDots
          totalSlides={onboardingSlides.length}
          activeIndex={activeIndex}
          scrollX={scrollX}
          screenWidth={screenWidth}
        />

        <View style={styles.buttonContainer}>
          <AppButton
            title="Get Started"
            onPress={handleGetStarted}
            variant="primary"
            size="large"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  bottomContainer: {
    paddingBottom: Metrics.spacing.xl,
    paddingHorizontal: Metrics.spacing.lg,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    marginTop: Metrics.spacing.md,
  },
});

export default OnboardingScreen;
