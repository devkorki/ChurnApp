import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function DetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Churn Prediction</Text>

      <View style={styles.profile}>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.id}>User ID: {user.id}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Churn Risk</Text>
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>{user.churn}%</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Behavior Timeline</Text>
        <LineChart
          data={{
            labels: ["Apr 1", "Apr 5", "Apr 10", "Apr 15", "Apr 20"],
            datasets: [{ data: [2, 3, 1, 4, 2] }],
          }}
          width={Dimensions.get("window").width - 40}
          height={160}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(51, 102, 255, ${opacity})`,
            labelColor: () => "#333",
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#3366ff",
            },
          }}
          style={{ marginVertical: 8, borderRadius: 12 }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recommendations</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Offer discount</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Behavior</Text>
        <Text style={styles.item}>• Page Visit</Text>
        <Text style={styles.item}>• Viewed laptop</Text>
        <Text style={styles.item}>• Added to cart</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  gauge: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#e1e4f0',
    borderRadius: 50,
  },
  gaugeText: {
    fontSize: 32,
    color: '#3366ff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3366ff',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  item: {
    fontSize: 15,
    marginVertical: 4,
  },
});
