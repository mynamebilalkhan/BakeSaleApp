const API_HOST = 'https://dummyjson.com';

export const fetchInitialDeals = async () =>  {
    try {
        let response = await fetch(API_HOST + `/products?limit=100`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    } 
};