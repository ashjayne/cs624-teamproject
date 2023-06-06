import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartTotal = ({ total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: ${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartTotal;

