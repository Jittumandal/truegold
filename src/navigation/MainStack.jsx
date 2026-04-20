import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcon from "../components/common/MaterialIcon";
import {
  AboutScreen,
  AboutTrueGoldScreen,
  AccountDetailsScreen,
  AppointmentDetailsScreen,
  AppointmentSuccessScreen,
  AppointmentSummaryScreen,
  AutopaysScreen,
  BookAppointmentScreen,
  CheckoutScreen,
  DashboardScreen,
  DeleteAccountScreen,
  DownloadReceiptScreen,
  ExpertProfileScreen,
  GoldAnalysisReportScreen,
  GoldRecordsDetailsScreen,
  GoldRecordsScreen,
  IdentityVerificationScreen,
  InvestDashboardScreen,
  MissionVisionScreen,
  NomineeDetailsScreen,
  PermissionScreen,
  PrivacyPolicyScreen,
  ProfileScreen,
  ReportsScreen,
  SetAutopayScreen,
  SIPStepUpScreen,
  SIPSuccessScreen,
  TermsConditionsScreen,
  TransactionFailedScreen,
  TransactionsScreen,
  TransactionSuccessScreen,
  UserPreferencesScreen,
  ViewDetailsScreen,
} from "../screens";
import { Colors } from "../theme";
import { SCREENS } from "./screenNames";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Tab Stack
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.DASHBOARD} component={DashboardScreen} />
    <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    <Stack.Screen
      name={SCREENS.ACCOUNT_DETAILS}
      component={AccountDetailsScreen}
    />
    <Stack.Screen
      name={SCREENS.USER_PREFERENCES}
      component={UserPreferencesScreen}
    />
    <Stack.Screen
      name={SCREENS.NOMINEE_DETAILS}
      component={NomineeDetailsScreen}
    />
    <Stack.Screen name={SCREENS.PERMISSION} component={PermissionScreen} />
    <Stack.Screen
      name={SCREENS.MISSION_VISION}
      component={MissionVisionScreen}
    />
    <Stack.Screen
      name={SCREENS.IDENTITY_VERIFICATION}
      component={IdentityVerificationScreen}
    />
    <Stack.Screen name={SCREENS.ABOUT} component={AboutScreen} />
    <Stack.Screen
      name={SCREENS.ABOUT_TRUEGOLD}
      component={AboutTrueGoldScreen}
    />
    <Stack.Screen
      name={SCREENS.TERMS_CONDITIONS}
      component={TermsConditionsScreen}
    />
    <Stack.Screen
      name={SCREENS.PRIVACY_POLICY}
      component={PrivacyPolicyScreen}
    />
    <Stack.Screen
      name={SCREENS.DELETE_ACCOUNT}
      component={DeleteAccountScreen}
    />
    <Stack.Screen name={SCREENS.REPORTS} component={ReportsScreen} />
  </Stack.Navigator>
);

// Records Tab Stack
const RecordsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.GOLD_RECORDS} component={GoldRecordsScreen} />
    <Stack.Screen
      name={SCREENS.GOLD_RECORDS_DETAILS}
      component={GoldRecordsDetailsScreen}
    />
    <Stack.Screen
      name={SCREENS.GOLD_ANALYSIS_REPORT}
      component={GoldAnalysisReportScreen}
    />
  </Stack.Navigator>
);

// History Tab Stack
const HistoryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.TRANSACTIONS} component={TransactionsScreen} />
    <Stack.Screen
      name={SCREENS.TRANSACTION_SUCCESS}
      component={TransactionSuccessScreen}
    />
    <Stack.Screen
      name={SCREENS.TRANSACTION_FAILED}
      component={TransactionFailedScreen}
    />
    <Stack.Screen
      name={SCREENS.DOWNLOAD_RECEIPT}
      component={DownloadReceiptScreen}
    />
  </Stack.Navigator>
);

// Visit Tab Stack
const VisitStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={SCREENS.BOOK_APPOINTMENT}
      component={BookAppointmentScreen}
    />
    <Stack.Screen
      name={SCREENS.APPOINTMENT_SUMMARY}
      component={AppointmentSummaryScreen}
    />
    <Stack.Screen
      name={SCREENS.APPOINTMENT_SUCCESS}
      component={AppointmentSuccessScreen}
    />
    <Stack.Screen
      name={SCREENS.APPOINTMENT_DETAILS}
      component={AppointmentDetailsScreen}
    />
    <Stack.Screen
      name={SCREENS.EXPERT_PROFILE}
      component={ExpertProfileScreen}
    />
  </Stack.Navigator>
);

// More Tab Stack
const MoreStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    <Stack.Screen
      name={SCREENS.ACCOUNT_DETAILS}
      component={AccountDetailsScreen}
    />
    <Stack.Screen
      name={SCREENS.USER_PREFERENCES}
      component={UserPreferencesScreen}
    />
    <Stack.Screen
      name={SCREENS.NOMINEE_DETAILS}
      component={NomineeDetailsScreen}
    />
    <Stack.Screen name={SCREENS.PERMISSION} component={PermissionScreen} />
    <Stack.Screen
      name={SCREENS.MISSION_VISION}
      component={MissionVisionScreen}
    />
    <Stack.Screen
      name={SCREENS.IDENTITY_VERIFICATION}
      component={IdentityVerificationScreen}
    />
    <Stack.Screen name={SCREENS.ABOUT} component={AboutScreen} />
    <Stack.Screen
      name={SCREENS.ABOUT_TRUEGOLD}
      component={AboutTrueGoldScreen}
    />
    <Stack.Screen
      name={SCREENS.TERMS_CONDITIONS}
      component={TermsConditionsScreen}
    />
    <Stack.Screen
      name={SCREENS.PRIVACY_POLICY}
      component={PrivacyPolicyScreen}
    />
    <Stack.Screen
      name={SCREENS.DELETE_ACCOUNT}
      component={DeleteAccountScreen}
    />
    <Stack.Screen name={SCREENS.REPORTS} component={ReportsScreen} />
  </Stack.Navigator>
);

// Invest/Appointment Stack (Shared for flows not in tabs)
const SharedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={SCREENS.INVEST_DASHBOARD}
      component={InvestDashboardScreen}
    />
    <Stack.Screen name={SCREENS.CHECKOUT} component={CheckoutScreen} />
    <Stack.Screen name={SCREENS.SET_AUTOPAY} component={SetAutopayScreen} />
    <Stack.Screen name={SCREENS.SIP_STEP_UP} component={SIPStepUpScreen} />
    <Stack.Screen name={SCREENS.SIP_SUCCESS} component={SIPSuccessScreen} />
    <Stack.Screen name={SCREENS.AUTOPAYS} component={AutopaysScreen} />
    <Stack.Screen name={SCREENS.VIEW_DETAILS} component={ViewDetailsScreen} />
    <Stack.Screen
      name={SCREENS.BOOK_APPOINTMENT}
      component={BookAppointmentScreen}
    />
    <Stack.Screen
      name={SCREENS.APPOINTMENT_SUMMARY}
      component={AppointmentSummaryScreen}
    />
    <Stack.Screen
      name={SCREENS.APPOINTMENT_SUCCESS}
      component={AppointmentSuccessScreen}
    />
    <Stack.Screen
      name={SCREENS.APPOINTMENT_DETAILS}
      component={AppointmentDetailsScreen}
    />
    <Stack.Screen
      name={SCREENS.EXPERT_PROFILE}
      component={ExpertProfileScreen}
    />
  </Stack.Navigator>
);

// Main Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Records") {
          iconName = "clipboard";
        } else if (route.name === "Visit") {
          iconName = "store";
        } else if (route.name === "History") {
          iconName = "scroll";
        } else if (route.name === "More") {
          iconName = "settings";
        }
        return <MaterialIcon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.dotInactive,
      tabBarStyle: {
        backgroundColor: Colors.white,
        borderTopColor: Colors.border,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Records" component={RecordsStack} />
    <Tab.Screen name="Visit" component={VisitStack} />
    <Tab.Screen name="History" component={HistoryStack} />
    <Tab.Screen name="More" component={MoreStack} />
  </Tab.Navigator>
);

// Main Stack (includes tabs and shared flows)
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen name="Shared" component={SharedStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
