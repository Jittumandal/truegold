// Common reusable styles used across multiple screens
import {StyleSheet} from 'react-native';
import {Colors} from './colors';
import {Metrics} from './metrics';

export const GlobalStyles = StyleSheet.create({
  // Default screen container - cream/beige background (used in 13 screens)
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  // White background container (used in 4 screens)
  containerWhite: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  // Centered container with padding (used in WelcomeScreen)
  containerCentered: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.spacing.xl,
  },
});
