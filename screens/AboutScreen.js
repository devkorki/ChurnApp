import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About ChurnApp</Text>
      <Text style={styles.body}>
        ChurnApp is a demo application built with React Native and Expo to simulate churn prediction and user analytics.
        It includes navigation, data visualization, and mock behavior analysis for learning and presentation purposes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
  },
});
