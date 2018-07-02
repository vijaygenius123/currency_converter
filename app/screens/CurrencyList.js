import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';


import { ListItem } from '../components/List'
import  currencies from '../data/currencies';


const TEMP_CURRENT_CURRENCY = 'CAD';

class  CurrencyList extends Component {

    handlePress = () => {
        console.log("Currency Pressed");
    }
    
    render(){
    return(
    <View style={{flex:1}}>
        <StatusBar />
        <FlatList
        data={currencies} 
        renderItem = {( {item} ) => (
        <ListItem text={item}
        selected={item  === TEMP_CURRENT_CURRENCY}
        onPress = {this.handlePress}
        />
        )}
        keyExtractor = { item => item }
        />
    </View>
    );}
}


export default CurrencyList;