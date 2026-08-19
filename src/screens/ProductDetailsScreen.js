import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params || {};
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(product?.isFavorite || false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Product not found.</Text>
          <TouchableOpacity
            style={styles.backHomeBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backHomeBtnText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navIconBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.navTitle}>Product Details</Text>

        <TouchableOpacity
          style={styles.navIconBtn}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? '#EF4444' : '#111827'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Product Image Stage */}
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: product.bgColor || '#F3F4F6' },
          ]}
        >
          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          {product.category && (
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
          )}

          <Text style={styles.productName}>{product.name}</Text>



          {/* Price */}
          <View style={styles.priceRow}>
            <Text style={styles.unitPrice}>${Number(product.price).toFixed(2)}</Text>
            <Text style={styles.priceNote}>Inclusive of all taxes</Text>
          </View>

          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>

          {/* Quantity Selector Section (Managed with useState) */}
          <View style={styles.quantitySection}>
            <Text style={styles.quantityLabel}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={[
                  styles.qtyButton,
                  quantity === 1 && styles.qtyButtonDisabled,
                ]}
                onPress={handleDecrease}
                disabled={quantity === 1}
              >
                <Feather
                  name="minus"
                  size={18}
                  color={quantity === 1 ? '#9CA3AF' : '#111827'}
                />
              </TouchableOpacity>

              <View style={styles.qtyDisplay}>
                <Text style={styles.qtyText}>{quantity}</Text>
              </View>

              <TouchableOpacity style={styles.qtyButton} onPress={handleIncrease}>
                <Feather name="plus" size={18} color="#111827" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sticky Action Bar: Total & Add to Cart */}
      <View style={styles.bottomBar}>
        <View style={styles.totalBlock}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalAmount}>${totalPrice}</Text>
        </View>

        <TouchableOpacity
          style={[styles.addToCartBtn, added && styles.addedBtn]}
          onPress={handleAddToCart}
          activeOpacity={0.85}
        >
          <MaterialCommunityIcons
            name={added ? 'check' : 'cart-plus'}
            size={22}
            color="#FFFFFF"
          />
          <Text style={styles.addToCartBtnText}>
            {added ? 'Added to Cart!' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  navIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
  scrollContent: {
    paddingBottom: 110,
  },
  imageContainer: {
    width: '100%',
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 10,
    lineHeight: 28,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 6,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingScore: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginLeft: 4,
  },
  reviewsCount: {
    fontSize: 13,
    color: '#6B7280',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 18,
    gap: 8,
  },
  unitPrice: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
  },
  priceNote: {
    fontSize: 12,
    color: '#6B7280',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 4,
  },
  qtyButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },
  qtyDisplay: {
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  totalBlock: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    gap: 8,
  },
  addedBtn: {
    backgroundColor: '#10B981',
  },
  addToCartBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#EF4444',
    marginBottom: 12,
  },
  backHomeBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#111827',
    borderRadius: 8,
  },
  backHomeBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
