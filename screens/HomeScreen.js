import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const users = [
  { id: '1', name: 'Vaggelis', churn: 83 },
  { id: '2', name: 'Maria', churn: 52 },
  { id: '3', name: 'Notis', churn: 12 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { user: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sub}>Tap to view churn details</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#eef0f7',
    borderRadius: 10,
  },
  name: { fontSize: 18, fontWeight: '600' },
  sub: { fontSize: 14, color: '#555' },
});
