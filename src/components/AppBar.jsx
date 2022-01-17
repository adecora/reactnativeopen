import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
});


const AppBar = (props) => {
    return <View style={styles.container} {...props}></View>;
};

export default AppBar;