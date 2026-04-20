import React from 'react';
import {View} from 'react-native';

const initialMetrics = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, bottom: 0, left: 0, right: 0},
};

export const SafeAreaInsetsContext = React.createContext(initialMetrics.insets);
export const SafeAreaFrameContext = React.createContext(initialMetrics.frame);

export const SafeAreaProvider = ({children}) => (
  <SafeAreaInsetsContext.Provider value={initialMetrics.insets}>
    <SafeAreaFrameContext.Provider value={initialMetrics.frame}>
      {children}
    </SafeAreaFrameContext.Provider>
  </SafeAreaInsetsContext.Provider>
);

export const SafeAreaView = ({children, style}) => (
  <View style={style}>{children}</View>
);

export const useSafeAreaInsets = () => initialMetrics.insets;
export const useSafeAreaFrame = () => initialMetrics.frame;
export const SafeAreaConsumer = SafeAreaInsetsContext.Consumer;
export const initialWindowMetrics = initialMetrics;
export default {SafeAreaProvider, SafeAreaView, useSafeAreaInsets, useSafeAreaFrame, SafeAreaInsetsContext, SafeAreaFrameContext, initialWindowMetrics};
