import React,{Component} from 'react';
import { View ,StatusBar, KeyboardAvoidingView } from 'react-native';

import {Container} from '../components/Container';
import Logo from '../components/Logo';
import InputWithButton from '../components/TextInput';
import ClearButton from '../components/Button';
import Header from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'INR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '65';


class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log('Press Base');
        this.props.navigation.navigate('CurrencyList',{title: 'Base Currency'});
    }
    
    handlePressQuoteCurrency =  () => {
        console.log('Press Quote');
        this.props.navigation.navigate('CurrencyList',{title: 'Quote Currency'});
    }

    handleTextChange = (text) => {
        console.log('Logged:' + text)
    }

    handleSwapCurrency = (text) => {
        console.log('Swap Currency');

    }

    handleSettings = () => {
        console.log('Settings');

    }

    render() {  
    return (
        <Container>
            <StatusBar translucent={false} barStyle="light-content" />
            <Header onPress={this.handleSettings}/>
            <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton 
            buttonText = {TEMP_BASE_CURRENCY}
           onPress = {this.handlePressBaseCurrency}
           defaultValue = {TEMP_BASE_PRICE}
           keyboardType = "numeric"
           onChangeText = {this.handleTextChange}
            />
            <InputWithButton 
            buttonText = {TEMP_QUOTE_CURRENCY}
            onPress = {this.handlePressQuoteCurrency}
            editable = {false}
            defaultValue = {TEMP_QUOTE_PRICE}
            />
            <ClearButton 
            text = "Reverse Currency"
            onPress = {this.handleSwapCurrency}
            />
            </KeyboardAvoidingView>
        </Container>
    );
    }
}

export default Home;