import {useEffect, useState, Component} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, StyleSheet} from 'react-native';
import CartButton from '../Cart/CartButton';

const ProductGallery = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/ashjayne/cs624_API/main/API_test.json');
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getBooks();
  }, []);

    return (
      <View style={{flex: 1, padding: 24, paddingTop: 40}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({name}) => name}
            renderItem={({item}) => (
              <View style={styles.container}>
                <View style={styles.productContainer}>
                  <Text style={styles.productName}>
                    {item.name} {'\n'}
                  </Text>
                  <Text>
                    by {item.author} {'\n'}
                    Published {item.publishDate} {'\n'}
                    Published by {item.publisher} {'\n'}
                  </Text>
                  <Image source={{uri: item.imgURL}}
                      style={styles.productImage} />
                  <Text style={styles.productPrice}>
                    ${item.price} {'\n'}
                  </Text>
                    <CartButton />
                </View>
              </View>
            )}
          />
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    productContainer: {
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 2,
      borderRadius: 20,
      width: 250,
    },
    productImage: {
      width: 150,
      height: 200,
      margin: 10
    },
    productName: {
      fontWeight: 'bold',
    },
    productPrice: {
      fontWeight: 'bold',
    }
  })

  export default ProductGallery