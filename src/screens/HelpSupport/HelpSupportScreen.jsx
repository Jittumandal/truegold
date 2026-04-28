import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Colors, Metrics, GlobalStyles } from "../../theme";
import MaterialIcon from "../../components/common/MaterialIcon";

const FAQ_DATA = [
  {
    category: "Gold Investment",
    questions: [
      {
        q: "What is Digital Gold?",
        a: "Digital Gold allows you to buy, sell, and accumulate 24K gold in small amounts digitally. The gold is stored in secure insured vaults by our partner.",
      },
      {
        q: "What is the minimum investment?",
        a: "You can start investing in Digital Gold with as little as ₹100 or 0.001 grams.",
      },
      {
        q: "Is my gold safe?",
        a: "Yes, your gold is stored in secure LBMA-accredited vaults. It is 100% insured and you can get it delivered anytime.",
      },
    ],
  },
  {
    category: "SIP & AutoPay",
    questions: [
      {
        q: "What is Gold SIP?",
        a: "Gold SIP lets you invest a fixed amount daily, weekly, or monthly automatically. It helps you build your gold savings systematically.",
      },
      {
        q: "Can I modify or cancel my SIP?",
        a: "Yes, you can modify the amount or cancel your SIP anytime from the Autopays section.",
      },
      {
        q: "What is SIP Step-Up?",
        a: "SIP Step-Up automatically increases your SIP amount by a percentage yearly, helping your savings grow with your income.",
      },
    ],
  },
  {
    category: "KYC & Account",
    questions: [
      {
        q: "Why is KYC required?",
        a: "KYC (Know Your Customer) is mandatory as per RBI guidelines for all financial transactions. It helps us verify your identity.",
      },
      {
        q: "What documents are needed for KYC?",
        a: "You need your PAN card and Aadhaar card for completing KYC verification.",
      },
      {
        q: "How long does KYC take?",
        a: "KYC verification is usually instant. In some cases, it may take up to 24–48 hours.",
      },
    ],
  },
  {
    category: "Transactions & Delivery",
    questions: [
      {
        q: "How do I sell my gold?",
        a: "Go to Sell Gold from the dashboard. Enter the amount or weight you want to sell. The amount will be credited to your bank account within 2 business days.",
      },
      {
        q: "Can I get physical gold delivered?",
        a: "Yes! You can order physical gold coins or bars from the Gold Delivery section. Delivery takes 5-7 business days.",
      },
      {
        q: "What payment methods are supported?",
        a: "We support UPI, Net Banking, and Debit Cards for gold purchases.",
      },
    ],
  },
];

const HelpSupportScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [expandedQ, setExpandedQ] = useState(null);

  const toggleQuestion = (key) => {
    setExpandedQ(expandedQ === key ? null : key);
  };

  const filteredData = FAQ_DATA.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchText.toLowerCase()) ||
        q.a.toLowerCase().includes(searchText.toLowerCase()),
    ),
  })).filter((cat) => cat.questions.length > 0);

  return (
    <View style={GlobalStyles.containerWhite}>
      {/* Header (stack header will be used; keep the in-screen header minimal) */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Search */}
        <View style={styles.searchBar}>
          <MaterialIcon name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help..."
            placeholderTextColor={Colors.dotInactive}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
            <View style={styles.quickIconWrap}>
              <MaterialIcon name="phone" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.quickLabel}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
            <View style={styles.quickIconWrap}>
              <MaterialIcon name="email" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.quickLabel}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
            <View style={styles.quickIconWrap}>
              <MaterialIcon name="comment" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.quickLabel}>Chat</Text>
          </TouchableOpacity>
        </View>

        {/* FAQ */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        {filteredData.map((category, catIndex) => (
          <View key={catIndex}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            {category.questions.map((item, qIndex) => {
              const key = `${catIndex}-${qIndex}`;
              const isExpanded = expandedQ === key;
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.faqItem}
                  onPress={() => toggleQuestion(key)}
                  activeOpacity={0.7}
                >
                  <View style={styles.faqHeader}>
                    <Text style={styles.faqQuestion}>{item.q}</Text>
                    <Text style={styles.faqArrow}>
                      {isExpanded ? "−" : "+"}
                    </Text>
                  </View>
                  {isExpanded && <Text style={styles.faqAnswer}>{item.a}</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {/* Contact Info */}
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Still need help?</Text>
          <Text style={styles.contactText}>
            Our support team is available Mon-Sat, 9 AM - 7 PM
          </Text>
          <Text style={styles.contactEmail}>support@truegold.in</Text>
          <Text style={styles.contactPhone}>1800-123-4567 (Toll Free)</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backBtn: { padding: Metrics.spacing.xs },
  backArrow: { fontSize: 22, color: Colors.text, fontWeight: "700" },
  headerTitle: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "700",
    color: Colors.text,
  },
  content: { flex: 1 },
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.full,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.lg,
  },
  searchInput: {
    flex: 1,
    marginLeft: Metrics.spacing.sm,
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    paddingVertical: 0,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Metrics.spacing.xl,
  },
  quickAction: { alignItems: "center" },
  quickIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.spacing.sm,
  },
  quickLabel: {
    fontSize: Metrics.fontSize.small,
    fontWeight: "600",
    color: Colors.text,
  },
  categoryTitle: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.primary,
    marginBottom: Metrics.spacing.sm,
    marginTop: Metrics.spacing.md,
  },
  faqItem: {
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.text,
    flex: 1,
    marginRight: Metrics.spacing.sm,
  },
  faqArrow: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.primary,
  },
  faqAnswer: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginTop: Metrics.spacing.sm,
  },
  contactCard: {
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.lg,
    marginTop: Metrics.spacing.xl,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Metrics.spacing.xs,
  },
  contactText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: Metrics.spacing.sm,
  },
  contactEmail: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "600",
    color: Colors.primary,
  },
});

export default HelpSupportScreen;
