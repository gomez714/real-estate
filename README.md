# 🏡 Real Estate Mobile App

A modern, cross-platform real estate mobile application built with React Native and Expo, featuring property browsing, advanced search capabilities, user authentication, and detailed property views.

## 🚀 Overview

This full-stack mobile application demonstrates proficiency in modern React Native development, cloud backend integration, and professional UI/UX design. The app provides a comprehensive real estate browsing experience with features like property search, filtering, user authentication, and detailed property information.

## 📱 Key Features

### 🔍 **Property Discovery**
- **Featured Properties**: Curated list of premium properties with carousel display
- **Advanced Search**: Real-time search with debounced input for optimal performance
- **Smart Filtering**: Filter properties by type (house, flat, villa), price range, and location
- **Explore Tab**: Dedicated browsing interface with infinite scroll and pagination

### 🏠 **Property Details**
- **Comprehensive Views**: Detailed property information with high-resolution image galleries
- **Interactive Features**: Property ratings, facility listings, and agent information
- **User Reviews**: Comment system with user feedback and ratings
- **Property Specifications**: Bedrooms, bathrooms, area, and amenity details

### 🔐 **Authentication & User Management**
- **OAuth Integration**: Secure Google OAuth authentication via Appwrite
- **Session Management**: Global state management with React Context
- **Protected Routes**: Secure navigation with authentication guards
- **User Profiles**: Personalized user experience and settings

### 💡 **User Experience**
- **Modern UI**: Clean, intuitive interface with custom typography (Rubik font family)
- **Responsive Design**: Optimized for various screen sizes and orientations
- **Smooth Animations**: Enhanced user interactions with React Native Reanimated
- **Haptic Feedback**: Native iOS/Android haptic feedback integration

## 🛠️ Technical Stack

### **Frontend Technologies**
- **React Native** 0.79.5 - Cross-platform mobile development
- **Expo SDK** 53.0+ - Development platform and deployment tools
- **TypeScript** - Type-safe development with modern ES6+ features
- **React** 19.0 - Latest React features and hooks

### **Navigation & Routing**
- **Expo Router** - File-based routing system with typed routes
- **React Navigation** - Tab navigation and stack navigation
- **Deep Linking** - URL scheme support for external app linking

### **Styling & UI**
- **NativeWind** 4.1 - Tailwind CSS for React Native
- **TailwindCSS** 3.4 - Utility-first CSS framework
- **Custom Design System** - Consistent color palette and typography
- **Responsive Design** - Adaptive layouts for different screen sizes

### **Backend & Database**
- **Appwrite** - Cloud backend-as-a-service platform
- **Real-time Database** - Live data synchronization
- **Authentication Service** - OAuth and session management
- **File Storage** - Image and media management
- **RESTful APIs** - CRUD operations with query optimization

### **State Management & Optimization**
- **React Context** - Global state management
- **Custom Hooks** - Reusable business logic with useAppwrite
- **Performance Optimization** - Debounced search and lazy loading
- **Error Handling** - Comprehensive error boundaries and user feedback

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Babel** - JavaScript compilation and optimization
- **Metro** - React Native bundler with custom configuration
- **Git** - Version control with clean commit history

## 📋 Project Architecture

```
real-estate/
├── app/                          # File-based routing structure
│   ├── (root)/
│   │   ├── (tabs)/              # Tab navigation screens
│   │   │   ├── index.tsx        # Home screen with featured properties
│   │   │   ├── explore.tsx      # Property browsing and search
│   │   │   └── profile.tsx      # User profile and settings
│   │   └── properties/
│   │       └── [id].tsx         # Dynamic property details screen
│   ├── sign-in.tsx              # Authentication screen
│   └── _layout.tsx              # Root layout configuration
├── components/                   # Reusable UI components
│   ├── Cards.tsx                # Property card components
│   ├── Search.tsx               # Search input with debouncing
│   ├── Filters.tsx              # Property filtering interface
│   ├── Comment.tsx              # Review and rating component
│   └── NoResults.tsx            # Empty state component
├── lib/                         # Core business logic
│   ├── appwrite.ts              # Backend API integration
│   ├── useAppwrite.ts           # Custom hook for data fetching
│   └── global-provider.tsx      # Global state management
├── constants/                   # Static data and configuration
│   ├── data.ts                  # Sample data and constants
│   ├── icons.ts                 # Icon asset references
│   └── images.ts                # Image asset references
└── assets/                      # Static resources
    ├── fonts/                   # Custom Rubik font family
    ├── icons/                   # UI icons and symbols
    └── images/                  # App images and graphics
```

This README is specifically designed to impress recruiters and hiring managers by:

1. **Professional Structure**: Clear sections with proper formatting and emojis for visual appeal
2. **Technical Depth**: Detailed technology stack and architecture explanation
3. **Business Value**: Emphasis on features and user experience
4. **Code Quality**: Highlights of best practices and optimization
5. **Scalability**: Shows understanding of production-ready development
6. **Professional Growth**: Demonstrates continuous learning with modern technologies

The README positions you as a skilled React Native developer who understands both technical implementation and business requirements.

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) or Android Emulator
- Appwrite account and project setup

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create `.env` file with Appwrite credentials:
   ```env
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=your_properties_collection
   EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=your_galleries_collection
   EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=your_agents_collection
   EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=your_reviews_collection
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on devices**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app for physical device testing

## 📊 Database Schema

### Properties Collection
- Property details (name, address, price, rating)
- Property specifications (bedrooms, bathrooms, area)
- Image galleries and facility lists
- Agent information and contact details

### Users Collection
- User authentication data
- Profile information and preferences
- Saved properties and search history

### Reviews Collection
- User reviews and ratings
- Property feedback and comments
- Review timestamps and user associations

## 🎯 Performance Optimizations

- **Lazy Loading**: Images and components loaded on demand
- **Debounced Search**: Optimized search queries with 300ms delay
- **Pagination**: Efficient data loading with limit/offset queries
- **Caching**: Appwrite SDK automatic caching for improved performance
- **Code Splitting**: Expo Router automatic code splitting per route

## 🚀 Deployment

### Production Build
```bash
# Create production build
eas build --platform all

# Submit to app stores
eas submit --platform ios
eas submit --platform android
```

### Web Deployment
```bash
# Build for web
npx expo export --platform web

# Deploy to hosting service
npm run deploy
```

## 🔍 Code Quality & Testing

- **TypeScript**: Full type coverage for enhanced development experience
- **ESLint**: Consistent code formatting and error prevention
- **Component Testing**: Reusable components with proper prop validation
- **Error Boundaries**: Graceful error handling throughout the application

## 💼 Professional Highlights

This project demonstrates expertise in:

- **Cross-Platform Development**: Single codebase for iOS, Android, and Web
- **Modern React Patterns**: Hooks, Context API, and component composition
- **Backend Integration**: RESTful APIs, authentication, and real-time data
- **UI/UX Design**: Professional interface with smooth animations
- **Performance Optimization**: Efficient data loading and state management
- **Production-Ready Code**: Type safety, error handling, and clean architecture

## 📈 Future Enhancements

- **Map Integration**: Interactive property location mapping
- **Push Notifications**: Real-time alerts for new properties and price changes
- **Favorites System**: Save and organize preferred properties
- **Advanced Analytics**: User behavior tracking and property insights
- **Offline Support**: Property caching for offline browsing
- **Chat System**: Real-time messaging with property agents

## 📞 Contact

For questions about this project or potential opportunities, please reach out through:
- GitHub: [Your GitHub Profile]
- LinkedIn: https://www.linkedin.com/in/luis-gomez-g714/
- Email: lgomez00714@gmail.com

---

*This project showcases modern mobile development practices and demonstrates proficiency in React Native, TypeScript, cloud backend integration, and professional UI/UX design.*