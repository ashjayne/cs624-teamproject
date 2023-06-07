import React, { useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CartButton from './CartButton';
import CartPage from './CartPage';
import CartTotal from './CartTotal';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, isCartVisible, setCartVisible] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleToggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    return total.toFixed(2);
  };

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 40 }}>
      {isCartVisible ? (
        <CartPage cartItems={cartItems} />
      ) : (
        <View>
          <CartButton onPress={handleToggleCart} />
          <FlatList
            data={data}
            keyExtractor={({ name }) => name}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <View style={styles.productContainer}>
                  <Text>
                    {item.name} {'\n'}
                    by {item.author} {'\n'}
                    Published {item.publishDate} {'\n'}
                    Published by {item.publisher} {'\n'}
                    ${item.price} {'\n'}
                  </Text>
                  <Image source={{ uri: item.imgURL }} style={styles.productImage} />
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => handleAddToCart(item)}
                  >
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
      {isCartVisible && <CartTotal total={calculateTotal()} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  productContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 2,
    borderRadius: 20,
    width: 200,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
