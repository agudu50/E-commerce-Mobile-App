import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * Reusable Product Card Component
 * Receives: image, name, price, rating through props
 */
export default function ProductCard({
  image,
  name,
  price,
  rating,
  bgColor = '#F3F4F6',
  isFavorite = false,
  onPress,
  onAddToCart,
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[styles.cardContainer, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      {/* Top row: Favorite heart icon */}
      <View style={styles.topRow}>
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            size={20}
            color="#111827"
          />
        </TouchableOpacity>

        {rating !== undefined && (
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={12} color="#F59E0B" />
            <Text style={styles.ratingText}>{Number(rating).toFixed(1)}</Text>
          </View>
        )}
      </View>

      {/* Product Image */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.productImage} resizeMode="contain" />
      </View>

      {/* Product Name */}
      <Text style={styles.productName} numberOfLines={2}>
        {name}
      </Text>

      {/* Bottom row: Price and Cart icon */}
      <View style={styles.bottomRow}>
        <Text style={styles.productPrice}>${Number(price).toFixed(2)}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cartButton}
          onPress={(e) => {
            if (onAddToCart) {
              onAddToCart();
            } else if (onPress) {
              onPress();
            }
          }}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <MaterialCommunityIcons
            name="cart-outline"
            size={20}
            color="#111827"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    justifyContent: 'space-between',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1F2937',
    marginLeft: 3,
  },
  imageWrapper: {
    height: 110,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  productImage: {
    width: '90%',
    height: '100%',
  },
  productName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111827',
    lineHeight: 18,
    minHeight: 36,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  cartButton: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
