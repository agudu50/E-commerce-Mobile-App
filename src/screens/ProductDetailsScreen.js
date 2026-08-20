import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params || {};
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(2);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
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

  const options = product.options || [
    { id: '1', name: 'Option 1', image: product.image, isDark: true },
    { id: '2', name: 'Option 2', image: product.image, isDark: false },
  ];

  const currentImage = options[selectedOptionIndex]?.image || product.image;

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        image: currentImage,
        selectedOption: options[selectedOptionIndex],
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(
      {
        ...product,
        image: currentImage,
        selectedOption: options[selectedOptionIndex],
      },
      quantity
    );
    navigation.navigate('MainTabs', { screen: 'Cart' });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
      {/* Top Header: Close button on left, ShopEase logo on right */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="close" size={24} color="#111827" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/ShopEase.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Main Product Hero Card */}
        <View
          style={[
            styles.heroCard,
            { backgroundColor: product.bgColor || '#D2F4DC' },
          ]}
        >
          {/* Left badge: 10% inside circle + Off text below */}
          <View style={styles.badgeColumn}>
            <View style={styles.discountCircle}>
              <Text style={styles.discountText}>
                {product.discount || '10%'}
              </Text>
            </View>
            <Text style={styles.offText}>Off</Text>
          </View>

          {/* Right: Product Image */}
          <View style={styles.imageContainer}>
            <Image
              source={currentImage}
              style={[styles.productImage, product.imageStyle]}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationRow}>
          <View
            style={[
              styles.dot,
              selectedOptionIndex === 0 ? styles.activeDot : null,
            ]}
          />
          <View
            style={[
              styles.dot,
              selectedOptionIndex === 1 ? styles.activeDot : null,
            ]}
          />
          <View style={styles.dot} />
        </View>

        {/* Product Details Information */}
        <View style={styles.detailsContainer}>
          {/* Product Title */}
          <Text style={styles.productTitle}>{product.name}</Text>

          {/* Color / Variant Subtitle */}
          <Text style={styles.variantSubtitle}>
            {product.variantLabel || 'White/Black'}
          </Text>

          {/* Green Price Badge */}
          <View style={styles.pricePill}>
            <Text style={styles.priceText}>
              ${Number(product.price).toFixed(2)}
            </Text>
          </View>

          {/* Available Options Label */}
          <Text style={styles.optionsLabel}>Available Options</Text>

          {/* Options Thumbnail Cards */}
          <View style={styles.optionsRow}>
            {options.map((option, index) => {
              const isSelected = selectedOptionIndex === index;
              return (
                <TouchableOpacity
                  key={option.id || index}
                  activeOpacity={0.8}
                  style={[
                    styles.optionCard,
                    isSelected
                      ? styles.optionCardSelected
                      : styles.optionCardUnselected,
                  ]}
                  onPress={() => setSelectedOptionIndex(index)}
                >
                  <Image
                    source={option.image}
                    style={styles.optionImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Quantity Selector: [+]  Qty  [-] */}
          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.qtyBox}
              onPress={handleIncrease}
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.qtyText}>{quantity}</Text>

            <TouchableOpacity
              style={[styles.qtyBox, quantity === 1 && styles.qtyBoxDisabled]}
              onPress={handleDecrease}
              disabled={quantity === 1}
              activeOpacity={0.7}
            >
              <Ionicons name="remove" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Bottom Action Buttons: [Buy now] [Add to cart] */}
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity
              style={styles.buyNowButton}
              onPress={handleBuyNow}
              activeOpacity={0.85}
            >
              <Text style={styles.buyNowText}>Buy now</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.addToCartButton, added && styles.addedButtonState]}
              onPress={handleAddToCart}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  styles.addToCartText,
                  added && styles.addedButtonTextState,
                ]}
              >
                {added ? 'Added!' : 'Add to cart'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 10,
  },
  closeButton: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 65,
    height: 48,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    height: 190,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 12,
    overflow: 'hidden',
  },
  badgeColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  discountCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  offText: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 8,
  },
  imageContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  productImage: {
    width: '90%',
    height: '90%',
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 16,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E5E7EB',
  },
  activeDot: {
    backgroundColor: '#60A5FA',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 26,
    marginBottom: 6,
  },
  variantSubtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  pricePill: {
    backgroundColor: '#50D86A',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 14,
  },
  priceText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  optionsLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },
  optionCard: {
    width: 78,
    height: 82,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  optionCardSelected: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#818CF8',
  },
  optionCardUnselected: {
    backgroundColor: '#F3F6FF',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  optionImage: {
    width: '100%',
    height: '100%',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  qtyBox: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBoxDisabled: {
    opacity: 0.4,
  },
  qtyText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginHorizontal: 16,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  buyNowButton: {
    backgroundColor: '#3CD049',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  buyNowText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  addToCartButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#3CD049',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  addToCartText: {
    color: '#3CD049',
    fontSize: 15,
    fontWeight: '700',
  },
  addedButtonState: {
    backgroundColor: '#3CD049',
  },
  addedButtonTextState: {
    color: '#FFFFFF',
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
