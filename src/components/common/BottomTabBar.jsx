import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Metrics } from "../../theme";
import MaterialIcon from "./MaterialIcon";

const TABS = [
  { id: "home", label: "HOME", iconName: "home" },
  { id: "records", label: "RECORDS", iconName: "clipboard" },
  { id: "visit", label: "VISIT", iconName: "store" },
  { id: "history", label: "HISTORY", iconName: "scroll" },
  { id: "more", label: "MORE", iconName: "settings" },
];

const TAB_ROUTES = {
  home: "Home",
  records: "Records",
  visit: "Visit",
  history: "History",
  more: "More",
};

const hasRouteInState = (state, targetName) => {
  if (!state?.routes) {
    return false;
  }

  for (const route of state.routes) {
    if (route.name === targetName) {
      return true;
    }
    if (route.state && hasRouteInState(route.state, targetName)) {
      return true;
    }
  }

  return false;
};

const BottomTabBar = ({ activeTab = "home", onTabPress }) => {
  const navigation = useNavigation();

  const rootState = navigation.getRootState?.();
  const isMainTabsActive = hasRouteInState(rootState, "MainTabs");

  if (isMainTabsActive) {
    return null;
  }

  const handleTabPress = (tabId) => {
    if (onTabPress) {
      onTabPress(tabId);
    }

    const routeName = TAB_ROUTES[tabId];
    if (!routeName) {
      return;
    }

    if (activeTab !== tabId) {
      const params = routeName === "Home" ? { screen: "Dashboard" } : undefined;
      navigation.navigate("MainTabs", { screen: routeName, params });
    }
  };

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => handleTabPress(tab.id)}
            activeOpacity={0.7}
          >
            <MaterialIcon
              name={tab.iconName}
              size={22}
              color={isActive ? Colors.primary : Colors.dotInactive}
            />
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primaryDark,
    paddingVertical: Metrics.spacing.sm,
    paddingBottom: Metrics.spacing.md,
    borderTopLeftRadius: Metrics.borderRadius.large,
    borderTopRightRadius: Metrics.borderRadius.large,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Metrics.spacing.xs,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.dotInactive,
    marginTop: 2,
  },
  tabLabelActive: {
    color: Colors.white,
  },
});

export default BottomTabBar;
