import React from 'react';
import { Text, View,TouchableHighlight}  from 'react-native';

import styles from './styles';

const ListItem = ({text, onPress, selected}) => (
    <TouchableHighlight onPress={onPress}>
        <View style = {styles.row}>
            <Text style = {styles.text}> {text} </Text> 
            {selected ? <Text> Selected </Text> : null }
            </View>
        </TouchableHighlight>
);

export default ListItem;