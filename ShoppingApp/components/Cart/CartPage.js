import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartPage = ({ cartItems }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Page</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>{item.name}</Text>
          <Text>Price: ${item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
  },
});

export default CartPage;

