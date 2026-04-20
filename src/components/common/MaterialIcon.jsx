import { MaterialIcons } from "@expo/vector-icons";

// Map app icon names to MaterialIcons names
const ICON_NAME_MAP = {
  // Profile / Account
  account: "person",
  person: "person",
  preferences: "tune",
  nominee: "description",
  identity: "verified-user",
  shield: "verified-user",

  // App features
  autopay: "sync",
  sync: "sync",
  snapsave: "camera-alt",
  camera: "camera-alt",
  saveonspend: "link",
  link: "link",
  activation: "vpn-key",
  key: "vpn-key",
  reminder: "notifications",
  bell: "notifications",

  // Navigation / UI
  menu: "menu",
  home: "home",
  gold: "emoji-events",
  coin: "emoji-events",
  trophy: "emoji-events",
  gift: "card-giftcard",
  money: "attach-money",
  rupee: "attach-money",
  medal: "military-tech",
  verify: "search",
  search: "search",
  building: "account-balance",
  lock: "lock",
  secureLock: "lock",
  vault: "lock",
  edit: "edit",
  pencil: "edit",

  // Charts / Data
  chart: "bar-chart",
  chartUp: "trending-up",
  reports: "bar-chart",

  // Communication
  phone: "phone",
  mobile: "smartphone",
  email: "email",
  calendar: "calendar-today",
  location: "location-on",
  pin: "location-on",
  briefcase: "work",
  ring: "diamond",
  comment: "chat-bubble-outline",
  heart: "favorite",
  creditcard: "credit-card",
  diamond: "diamond",
  bank: "account-balance",
  tag: "local-offer",
  offer: "local-offer",

  // Actions
  store: "store",
  scroll: "history",
  history: "history",
  help: "help-outline",
  question: "help-outline",
  pause: "pause",
  check: "check-circle",
  clipboard: "assignment",
  settings: "settings",
  sparkle: "star",
  star: "star",

  // Dashboard / Grid
  dashboard: "grid-view",
  grid: "grid-view",
  rewards: "redeem",
  referral: "card-giftcard",
  orders: "assignment",

  // General
  security: "security",
  permission: "security",
  mission: "visibility",
  vision: "visibility",
  trash: "delete",
  deleteAccount: "delete",
  info: "info",
  about: "info",
  share: "share",
  feedback: "share",
  logout: "logout",
};

const MaterialIcon = ({ name, size = 24, color = "#C8922A" }) => {
  const iconName = ICON_NAME_MAP[name] || name;
  return <MaterialIcons name={iconName} size={size} color={color} />;
};

export default MaterialIcon;
