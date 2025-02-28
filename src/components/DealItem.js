import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
// import { Image } from 'react-native-ui-lib';

const DealItem = ({deal, onPress}) => {

     const handlePress = () => {
          onPress(deal.id);
     };

     return (
     <Pressable onPress={handlePress}>
          <View style={styles.card}>
               <Image source={{uri: deal.images[0]}} style={styles.image} />
               <View style={styles.cardMeta}>     
                    <View style={styles.titlePriceCont}>
                         <Text style={styles.title}>{deal.title}</Text>
                         <Text style={styles.price}>${deal.price}</Text>
                    </View>
                    <Text style={styles.category}>{deal.category}</Text>
                    <Text style={styles.description}>{deal.description}</Text>
               </View>
          </View>
     </Pressable>
     )
}

const styles = StyleSheet.create({
     card: {
          borderBlockColor: '#333',
          borderWidth: 1,
          borderStyle: 'solid',
          marginBottom: 15
     },
     cardMeta: {
          padding: 15,
          borderTopColor: '#333',
          borderTopWidth: 1,
          borderTopStyle: 'solid',
     },
     image: {
          height: 250,
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          backgroundColor: '#ccc'
     },
     titlePriceCont: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10
     },
     title: {
          fontSize: 18,
          fontWeight: 500
     },
     price: {
          fontSize: 15,
          fontWeight: 400
     },
     category: {
          fontSize: 15,
          fontWeight: 400,
          textTransform: 'capitalize',
          marginBottom: 5,
     },
     description: {
          fontSize: 16,
          fontWeight: 400,
     }
});

export default DealItem;