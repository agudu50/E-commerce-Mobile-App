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
  const [selectedSort, setSelectedSort] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredProducts = PRODUCTS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* Hero Banner: New Release OLEVS 5 V13 */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/hero-logo.png')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Action Controls: Sort, Filter, Cart, Search */}
        <View style={styles.controlsRow}>
          <TouchableOpacity style={
              styles.controlPill}>
            <Text style={styles.controlPillText}>Sort By</Text>
            <Feather name="chevron-down" size={16} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlPill}>
            <Text style={styles.controlPillText}>Filter</Text>
            <Ionicons name="options-outline" size={16} color="#FFFFFF" style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.orangeCartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <MaterialCommunityIcons name="cart-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => setShowSearch(!showSearch)}
          >
            <Feather name="search" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Optional Expandable Search Input */}
        {showSearch && (
          <View style={styles.searchContainer}>
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search products..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Product Grid mapped using reusable ProductCard */}
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
              onPress={() => navigation.navigate('ProductDetails', { product })}
              onAddToCart={() => addToCart(product, 1)}
            />
          ))}
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 14,
  },
  menuButton: {
    padding: 6,
    justifyContent: 'center',
  },
  menuIcon: {
    width: 20.67,
    height: 16,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 85,
    height: 85,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#26292E',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 10,
    gap: 2,
    marginRight:-80
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
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    backgroundColor: '#000000',
    paddingVertical: 9,
    paddingHorizontal: 12,
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
});
