import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const getScreenDimensions = () => {
  const dim = Dimensions.get('window');
  return {
    screenWidth: dim.width || 400,
    screenHeight: dim.height || 800,
  };
};

export const Metrics = {
  screenWidth: width || 400,
  screenHeight: height || 800,
  borderRadius: {
    small: 8,
    medium: 12,
    large: 20,
    full: 50,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  fontSize: {
    small: 12,
    medium: 14,
    body: 16,
    title: 20,
    heading: 24,
    largeHeading: 28,
  },
};
