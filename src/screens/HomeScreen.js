import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HomeScreen({ navigation }) {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const isSearching = searchQuery.trim().length > 0;
  const filteredProducts = PRODUCTS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const firstSection = PRODUCTS.slice(0, 4);
  const secondSection = PRODUCTS.slice(4);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header: Menu & ShopEase Logo */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#111827" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/ShopEase.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Top Hero Banner: New Release OLEVS 5 V13 */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/hero-logo.png')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Action Controls: Sort, Filter, Cart, Search */}
        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.controlPill}>
            <Text style={styles.controlPillText}>Sort By</Text>
            <Feather name="chevron-down" size={16} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlPill}>
            <Text style={styles.controlPillText}>Filter</Text>
            <Ionicons
              name="options-outline"
              size={16}
              color="#FFFFFF"
              style={styles.filterIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.orangeCartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => setShowSearch(!showSearch)}
          >
            <Feather name="search" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Expandable Search Input */}
        {showSearch && (
          <View style={styles.searchContainer}>
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search products..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* If user is searching, display matching results directly */}
        {isSearching ? (
          <View style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                bgColor={product.bgColor}
                isFavorite={product.isFavorite}
                imageStyle={product.imageStyle}
                imageWrapperStyle={product.imageWrapperStyle}
                onPress={() =>
                  navigation.navigate('ProductDetails', { product })
                }
                onAddToCart={() => addToCart(product, 1)}
              />
            ))}
          </View>
        ) : (
          <>
            {/* Section 1: First 4 Products */}
            <View style={styles.productsGrid}>
              {firstSection.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  bgColor={product.bgColor}
                  isFavorite={product.isFavorite}
                  imageStyle={product.imageStyle}
                  imageWrapperStyle={product.imageWrapperStyle}
                  onPress={() =>
                    navigation.navigate('ProductDetails', { product })
                  }
                  onAddToCart={() => addToCart(product, 1)}
                />
              ))}
            </View>

            {/* Mid-Page Promo Banner: Free Delivery for First Item */}
            <View style={styles.promoBanner}>
              {/* Background Gift Image */}
              <Image
                source={require('../../assets/pexels-rose.png')}
                style={styles.promoBgImage}
                resizeMode="contain"
              />

              {/* Banner Text */}
              <View style={styles.promoTextContainer}>
                <Text style={styles.promoHeading}>Free delivery</Text>
                <Text style={styles.promoHeading}>for</Text>
                <Text style={styles.promoHeading}>First Item</Text>
              </View>

              {/* Accept Now Button */}
              <TouchableOpacity
                style={styles.acceptButton}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('Cart')}
              >
                <Text style={styles.acceptButtonText}>Accept Now</Text>
              </TouchableOpacity>
            </View>

            {/* Section 2: Continuation Products (4 products) */}
            <View style={styles.productsGrid}>
              {secondSection.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  bgColor={product.bgColor}
                  isFavorite={product.isFavorite}
                  imageStyle={product.imageStyle}
                  imageWrapperStyle={product.imageWrapperStyle}
                  onPress={() =>
                    navigation.navigate('ProductDetails', { product })
                  }
                  onAddToCart={() => addToCart(product, 1)}
                />
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 12,
  },
  menuButton: {
    padding: 6,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 80,
    height: 38,
  },
  bannerContainer: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000000',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  controlPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26292E',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    gap: 4,
  },
  controlPillText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  filterIcon: {
    marginLeft: 2,
  },
  orangeCartButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 14,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  promoBanner: {
    width: '100%',
    height: 180,
    backgroundColor: '#FA7538',
    borderRadius: 16,
    marginVertical: 14,
    padding: 18,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  promoBgImage: {
    position: 'absolute',
    top: -65,
    bottom: 0,
    left: 20,
    right: 0,
    width: 357,
    height: 238,
    alignSelf: 'center',
    
  },
  promoTextContainer: {
    zIndex: 2,
    maxWidth: '65%',
  },
  promoHeading: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 27,
    letterSpacing: -0.3,
  },
  acceptButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#03003E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    zIndex: 3,
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
