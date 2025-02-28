import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import DealItem from './DealItem';

const DealList = ({deals, onItemPress}) => {
    	return (
		<View style={styles.container}>
			<FlatList data={deals} renderItem={({item}) => <DealItem deal={item} onPress={onItemPress} />}/>
		</View>
    	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingTop: 50,
		backgroundColor: '#eee',	
	},
});

export default DealList;