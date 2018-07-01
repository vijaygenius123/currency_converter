import EStyleSheet from 'react-native-extended-stylesheet';
import StyleSheet from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    container:{
        backgroundColor : 'white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius : BORDER_RADIUS,
        marginVertical : 11,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerDisabled: {
        backgroundColor : 'green',
    },
    buttonContainer:{
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius : BORDER_RADIUS,
        borderTopRightRadius : BORDER_RADIUS,
    },
    buttonText: {
        paddingHorizontal: 16,
        fontWeight: '600',
        fontSize: 20,
        color : '$primaryBlue'
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color : '$primaryBlue'
    },
    border:{
        height: INPUT_HEIGHT,
        backgroundColor:  '$primaryBlue',
        width: 1,
    },
});