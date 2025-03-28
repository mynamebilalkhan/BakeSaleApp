import { Animated, StyleSheet } from 'react-native'
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import React, { useEffect, useState } from 'react';
import {fetchInitialDeals} from '../api';
import DealList from './DealList';
import DealDetail from './DealDetail';

const App = () => {

const titleXPos = new Animated.Value(0);
const [dealList, setDealList] = useState([]);
const [currentDeal, setCurrentDeal] = useState(null);

const animateTitle = (direction = 1) => {
	Animated.spring(
		titleXPos,
		{
			toValue: direction * -100,
			useNativeDriver: false,
		}
	).start(() => animateTitle(-1 * direction));
};

useEffect(() => {
	animateTitle();
	const fetchDeals = async () => {
		const deals = await fetchInitialDeals();
		setDealList(deals.products);
	};
	fetchDeals();
}, []);

const setCurrentDealFunc = (dealId) => {
	setCurrentDeal(dealId);
}; 

const unSetCurrentDealFunc = () => {
	setCurrentDeal(null);
}; 

const findCurrentDeal = () => {
	return dealList.find((deal) => deal.id === currentDeal) || {};
};

return (
	<>	
		{currentDeal ?  
			<DealDetail deal={findCurrentDeal()} onBack={unSetCurrentDealFunc} />
			: dealList.length > 0 ? 
				<DealList deals={dealList} onItemPress={setCurrentDealFunc} /> 
				: <Animated.View style={[{left: titleXPos}, styles.container]}>
					<Text style={styles.header}>Bakesale</Text>
				</Animated.View>
		}
	</>
);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		fontSize: 40,
	}
});

export default App;