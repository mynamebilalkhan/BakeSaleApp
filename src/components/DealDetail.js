import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const DealDetail = ({ deal, onBack }) => {
     if (!deal || Object.keys(deal).length === 0) {
          return <Text>No Deal Found</Text>;
     }
   
     return (
          <View style={{padding: 15, paddingTop: 25}}>
               <ScrollView>
                    <TouchableOpacity style={styles.goBack} onPress={onBack}>
                         <Text style={styles.goBackText}>Go back</Text>
                    </TouchableOpacity>
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
               </ScrollView>
          </View>
     );
};   

const styles = StyleSheet.create({
     card: {
          marginBottom: 15
     },
     cardMeta: {
          
     },
     image: {
          height: 550,
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          backgroundColor: '#ccc',
          marginBottom: 5
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
     },
     goBack: {
          marginBottom: 10,
     },
     goBackText: {
          color: 'blue',
     }
});

export default DealDetail;