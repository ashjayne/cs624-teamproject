import {useEffect, useState, Component} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, StyleSheet, Platform} from 'react-native';

const ProductGallery = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getSuperheroes = async () => {
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
      getSuperheroes();
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
                  <Text>
                    {item.name} {'\n'}
                    by {item.author} {'\n'}
                    Published {item.publishDate} {'\n'}
                    Published by {item.publisher} {'\n'}
                    ${item.price} {'\n'}
                  </Text>
                    <Image source={{uri: item.imgURL}}
                      style={styles.productImage} />
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
      padding: 10
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
      height: 100
    }
  })

  export default ProductGallery