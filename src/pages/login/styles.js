import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        flex: 1, 
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 80
    }
})