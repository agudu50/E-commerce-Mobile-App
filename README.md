# ShopEase — E-Commerce Mobile App 🛍️

A modern, responsive, and feature-rich E-Commerce mobile application built with **React Native** and **Expo**. Designed with pixel-perfect UI, seamless navigation, fluid animations, and real-time state management for a premium mobile shopping experience.

---

## 📱 Features

### 1. 🏠 Home Screen (`HomeScreen`)
- **Promotional Hero Banner**: Eye-catching seasonal sale banner ("20% OFF ALL ITEMS").
- **Product Catalog Grid**: Reusable 2-column product cards with dynamic background colors.
- **Wishlist & Cart Actions**: Quick toggle to mark favorites or add items to cart directly from cards.
- **Mid-Screen Special Offers**: "Free delivery for First Item" promo banner.
- **Categorized Sections**: Organized into structured product discovery sections.

### 2. 🔍 Product Details Screen (`ProductDetailsScreen`)
- **Showcase Hero Card**: Beautiful pastel stage highlighting product imagery.
- **Discount Badges**: Dynamic percentage off badge (`10% Off`).
- **Interactive Variant Selection**: Switch between available options (e.g., Black / White-Gray shirts) with live image preview updates.
- **Custom Accent Themes**: Color-tailored themes per product (e.g., `#6135FF` for Smart Ultrasonic Wrist Watch).
- **Quantity Selector**: Increment/decrement controls.
- **Action Buttons**: Instant **Buy now** checkout and **Add to cart** with animated feedback.

### 3. 🛒 Shopping Cart (`CartScreen`)
- **Cart Management**: Real-time item listing with item quantity updates and swipe/button item removal.
- **Order Summary**: Subtotal, shipping calculation, tax, discount calculations, and total price.
- **Voucher / Promo Code**: Input field with coupon application support.
- **Checkout Flow**: One-tap checkout button with interactive confirmation alerts.

### 4. 👤 User Profile (`ProfileScreen`)
- **Account Overview**: User avatar, contact info, and membership tier badges.
- **Quick Links**: Orders, Wishlist, Shipping Addresses, Payment Methods, and Settings.
- **Notifications & Preferences**: Dark mode toggles and account security options.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React Native](https://reactnative.dev/) (v0.81) with [Expo](https://expo.dev/) (SDK 54)
- **Navigation**: [@react-navigation/native](https://reactnavigation.org/)
  - Native Stack Navigator
  - Bottom Tabs Navigator
- **State Management**: React Context API (`CartContext`) for global cart and checkout state
- **Icons**: `@expo/vector-icons` (Ionicons, MaterialCommunityIcons, Feather)
- **UI Components & Layout**: `react-native-safe-area-context`, `react-native-screens`

---

## 📂 Project Structure

```text
dcit-324-assign3/
├── assets/                  # Product images, logos, and icon assets
├── src/
│   ├── components/          # Reusable UI components
│   │   └── ProductCard.js   # Product grid card component
│   ├── context/             # Global Context Providers
│   │   └── CartContext.js   # Shopping cart state management
│   ├── data/                # Static mock product catalog
│   │   └── products.js      # Product list, colors, variants & prices
│   └── screens/             # Main application screens
│       ├── HomeScreen.js
│       ├── ProductDetailsScreen.js
│       ├── CartScreen.js
│       └── ProfileScreen.js
├── App.js                   # Root Navigation & Provider Setup
├── app.json                 # Expo configuration
└── package.json             # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- [Expo Go](https://expo.dev/client) app installed on your physical device (iOS / Android) or an emulator.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/agudu50/E-commerce-Mobile-App.git
   cd E-commerce-Mobile-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on your device/emulator:**
   - Press **`a`** to open on an Android emulator / connected device.
   - Press **`i`** to open on iOS simulator.
   - Scan the terminal QR code with **Expo Go** (Android) or the Camera app (iOS).

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm start` | Starts the Expo development server |
| `npm run android` | Starts the project on Android device/emulator |
| `npm run ios` | Starts the project on iOS simulator |
| `npm run web` | Launches the app in a web browser |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
