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
import AppButton from "../../components/common/AppButton";

const DELIVERY_PRODUCTS = [
  {
    id: "1",
    name: "1 Gram Gold Coin",
    weight: "1 gm",
    purity: "24K (999.9)",
    price: "₹15,537",
    image: "coin",
    makingCharge: "₹500",
  },
  {
    id: "2",
    name: "2 Gram Gold Coin",
    weight: "2 gm",
    purity: "24K (999.9)",
    price: "₹30,573",
    image: "coin",
    makingCharge: "₹800",
  },
  {
    id: "3",
    name: "5 Gram Gold Coin",
    weight: "5 gm",
    purity: "24K (999.9)",
    price: "₹75,684",
    image: "coin",
    makingCharge: "₹1,200",
  },
  {
    id: "4",
    name: "10 Gram Gold Bar",
    weight: "10 gm",
    purity: "24K (999.9)",
    price: "₹1,50,867",
    image: "coin",
    makingCharge: "₹2,000",
  },
  {
    id: "5",
    name: "20 Gram Gold Bar",
    weight: "20 gm",
    purity: "24K (999.9)",
    price: "₹3,01,234",
    image: "coin",
    makingCharge: "₹3,500",
  },
];

const GoldDeliveryScreen = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const goldBalance = 5.234;

  return (
    <View style={GlobalStyles.containerWhite}>
      {/* (header removed) */}

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        {/* Balance Info */}
        <View style={styles.balanceCard}>
          <MaterialIcon name="gold" size={24} color={Colors.primary} />
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>Your Gold Balance</Text>
            <Text style={styles.balanceValue}>{goldBalance} grams</Text>
          </View>
        </View>

        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <MaterialIcon name="info" size={16} color={Colors.primary} />
          <Text style={styles.infoText}>
            Get your digital gold delivered as physical coins or bars. Making
            charges and delivery fees apply.
          </Text>
        </View>

        {/* Products */}
        <Text style={styles.sectionTitle}>Choose Product</Text>
        {DELIVERY_PRODUCTS.map((product) => {
          const isSelected = selectedProduct === product.id;
          const hasBalance = goldBalance >= parseFloat(product.weight);
          return (
            <TouchableOpacity
              key={product.id}
              style={[
                styles.productCard,
                isSelected && styles.productSelected,
                !hasBalance && styles.productDisabled,
              ]}
              onPress={() => hasBalance && setSelectedProduct(product.id)}
              activeOpacity={hasBalance ? 0.7 : 1}
            >
              <View style={styles.productIconWrap}>
                <MaterialIcon name="coin" size={32} color={Colors.primary} />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDetails}>
                  {product.weight} • {product.purity}
                </Text>
                <Text style={styles.productMaking}>
                  Making: {product.makingCharge}
                </Text>
              </View>
              <View style={styles.productPriceCol}>
                <Text style={styles.productPrice}>{product.price}</Text>
                {!hasBalance && (
                  <Text style={styles.insufficientText}>Insufficient</Text>
                )}
                {isSelected && (
                  <View style={styles.selectedCheck}>
                    <MaterialIcon name="check" size={16} color={Colors.white} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Delivery Info */}
        <Text style={[styles.sectionTitle, { marginTop: Metrics.spacing.lg }]}>
          Delivery Details
        </Text>
        <View style={styles.deliveryInfo}>
          {[
            { icon: "location", text: "Free delivery across India" },
            { icon: "calendar", text: "Delivered within 5-7 business days" },
            { icon: "shield", text: "BIS Hallmarked & Certified" },
            { icon: "secureLock", text: "Tamper-proof sealed packaging" },
          ].map((item, i) => (
            <View key={i} style={styles.deliveryRow}>
              <MaterialIcon name={item.icon} size={18} color={Colors.primary} />
              <Text style={styles.deliveryText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <AppButton
          title="Proceed to Order"
          onPress={() => {
            const product = DELIVERY_PRODUCTS.find(
              (p) => p.id === selectedProduct,
            );
            if (product) {
              navigation.navigate("Checkout", { type: "delivery", product });
            }
          }}
          disabled={!selectedProduct}
        />
      </View>
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
    paddingBottom: 20,
  },
  balanceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.md,
  },
  balanceInfo: { marginLeft: Metrics.spacing.md },
  balanceLabel: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
  },
  balanceValue: {
    fontSize: Metrics.fontSize.title,
    fontWeight: "800",
    color: Colors.text,
  },
  infoBanner: {
    flexDirection: "row",
    backgroundColor: "#FFF9EF",
    borderRadius: Metrics.borderRadius.small,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.lg,
  },
  infoText: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    flex: 1,
    marginLeft: Metrics.spacing.sm,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: Metrics.fontSize.body,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Metrics.spacing.md,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    marginBottom: Metrics.spacing.sm,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  productSelected: { borderColor: Colors.primary, backgroundColor: "#FFF9EF" },
  productDisabled: { opacity: 0.5 },
  productIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.spacing.md,
  },
  productInfo: { flex: 1 },
  productName: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.text,
  },
  productDetails: {
    fontSize: Metrics.fontSize.small,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  productMaking: { fontSize: 11, color: Colors.dotInactive, marginTop: 2 },
  productPriceCol: { alignItems: "flex-end" },
  productPrice: {
    fontSize: Metrics.fontSize.medium,
    fontWeight: "700",
    color: Colors.primary,
  },
  insufficientText: { fontSize: 10, color: "#E53935", marginTop: 2 },
  selectedCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  deliveryInfo: {
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.spacing.sm,
  },
  deliveryText: {
    fontSize: Metrics.fontSize.medium,
    color: Colors.text,
    marginLeft: Metrics.spacing.md,
  },
  bottomBar: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
});

export default GoldDeliveryScreen;
