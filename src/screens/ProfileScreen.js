import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const initialData = {
    name: 'Theshan Geeth',
    address: 'Matara, Sri Lanka',
    email: 'theshangeeth@gmail.com',
    phone: '+94 77 123 4567',
  };

  const [formData, setFormData] = useState(initialData);

  const handleSave = () => {
    Alert.alert('Profile Updated', 'Your profile details have been successfully updated!');
  };

  const handleCancel = () => {
    setFormData(initialData);
  };

  const handleChangeAvatar = () => {
    Alert.alert('Change Avatar', 'Choose an option to update your profile photo', [
      { text: 'Camera', onPress: () => {} },
      { text: 'Choose from Gallery', onPress: () => {} },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Top Section */}
          <View style={styles.topSection}>
            {/* Top Right ShopEase Logo */}
            <View style={styles.logoRow}>
              <Image
                source={require('../../assets/ShopEase.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            {/* Avatar Container with Coral Circle & Plus Button */}
            <View style={styles.avatarWrapper}>
              <View style={styles.avatarCircle}>
                <View style={styles.avatarIllustration}>
                  {/* Hair */}
                  <View style={styles.hair} />
                  {/* Face */}
                  <View style={styles.face} />
                  {/* Neck */}
                  <View style={styles.neck} />
                  {/* White Collar / Shirt */}
                  <View style={styles.shirt} />
                  {/* Suit / Jacket */}
                  <View style={styles.suitJacket}>
                    <View style={styles.jacketLeft} />
                    <View style={styles.jacketRight} />
                  </View>
                </View>
              </View>

              {/* Plus Badge Button */}
              <TouchableOpacity
                style={styles.plusButton}
                activeOpacity={0.8}
                onPress={handleChangeAvatar}
              >
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            {/* User Title & Location */}
            <Text style={styles.profileName}>{formData.name || 'Theshan Geeth'}</Text>
            <Text style={styles.profileLocation}>{formData.address || 'Matara, Sri Lanka'}</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Name Field */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Name :</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(val) => setFormData((prev) => ({ ...prev, name: val }))}
                placeholder="Enter your name"
                placeholderTextColor="#94A3B8"
              />
            </View>

            {/* Address Field */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Address :</Text>
              <TextInput
                style={styles.input}
                value={formData.address}
                onChangeText={(val) => setFormData((prev) => ({ ...prev, address: val }))}
                placeholder="Enter your address"
                placeholderTextColor="#94A3B8"
              />
            </View>

            {/* Email Field */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Email :</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(val) => setFormData((prev) => ({ ...prev, email: val }))}
                placeholder="Enter your email"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Phone Field */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Phone :</Text>
              <TextInput
                style={styles.input}
                value={formData.phone}
                onChangeText={(val) => setFormData((prev) => ({ ...prev, phone: val }))}
                placeholder="Enter your phone number"
                placeholderTextColor="#94A3B8"
                keyboardType="phone-pad"
              />
            </View>

            {/* Action Buttons Row */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.editBtn}
                activeOpacity={0.85}
                onPress={handleSave}
              >
                <Text style={styles.editBtnText}>Edit Now</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                activeOpacity={0.7}
                onPress={handleCancel}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  topSection: {
    backgroundColor: '#FFF7F6',
    paddingTop: 12,
    paddingBottom: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoRow: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  logoImage: {
    width: 85,
    height: 85,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 175,
    height: 175,
    borderRadius: 87.5,
    backgroundColor: '#FF6B5E',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatarIllustration: {
    width: 175,
    height: 175,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  hair: {
    position: 'absolute',
    top: 24,
    width: 44,
    height: 48,
    backgroundColor: '#1E232B',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 8,
    zIndex: 1,
  },
  face: {
    position: 'absolute',
    top: 32,
    right: 64,
    width: 38,
    height: 44,
    backgroundColor: '#FDD5CD',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 12,
    zIndex: 2,
  },
  neck: {
    position: 'absolute',
    top: 66,
    width: 22,
    height: 24,
    backgroundColor: '#FDD5CD',
    zIndex: 2,
  },
  shirt: {
    position: 'absolute',
    top: 76,
    width: 28,
    height: 42,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
    zIndex: 3,
  },
  suitJacket: {
    width: 135,
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 4,
  },
  jacketLeft: {
    width: 58,
    height: 85,
    backgroundColor: '#181C24',
    borderTopLeftRadius: 28,
  },
  jacketRight: {
    width: 58,
    height: 85,
    backgroundColor: '#181C24',
    borderTopRightRadius: 28,
  },
  plusButton: {
    position: 'absolute',
    right: 6,
    bottom: 12,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 107, 94, 0.85)',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
    textAlign: 'center',
  },
  profileLocation: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'center',
  },
  formSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F1F6FA',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 12,
    marginBottom: 16,
  },
  editBtn: {
    flex: 1,
    backgroundColor: '#FF6B5E',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF6B5E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  editBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtnText: {
    color: '#64748B',
    fontSize: 16,
    fontWeight: '700',
  },
});
