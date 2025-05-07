# ChurnApp

ChurnApp is a cross-platform mobile application built using React Native and Expo. It allows users to view churn prediction analytics and behavioral insights for a list of mock users. The app features multiple screens, charts, and recommendations, and runs on Android, iOS (via Expo Go), and the web.

---

## Features

- Multi-screen app with React Navigation
- User list with dynamic churn risk data
- Churn visualization (gauge + line chart)
- Behavioral timeline and activity insights
- Expo-compatible for fast development
- Web preview using React Native Web

---

## Requirements

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Optional: Expo Go app for mobile preview




## Install Project Dependencies

Run the following commands in order from the root of the project directory:


# Install Expo CLI globally (if not already installed)
npm install -g expo-cli

# Install EAS CLI globally (for building APKs)
npm install -g eas-cli

# Navigate to the project folder (if not already there)
cd ChurnApp

# Install base project dependencies
npm install

# Install chart and SVG libraries
npm install react-native-chart-kit react-native-svg

# Install React Navigation core
npm install @react-navigation/native

# Install React Navigation dependencies required by Expo
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

# Install native stack navigator (screen stack)
npm install @react-navigation/native-stack

# (Optional) Install web support dependencies for running in browser
npx expo install react-dom react-native-web @expo/metro-runtime


## Clone the Project


git clone https://github.com/devkorki/ChurnApp.git
cd ChurnApp


## Running the App
# Navigate to the project's directory and run in the console:
npx expo start

## Run in the Browser (login required)
npx expo start --web


