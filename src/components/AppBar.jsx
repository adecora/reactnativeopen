import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
});


const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title="Repositories" to="/" />
            <AppBarTab title="SignIn" to="/sign-in" />
        </View>
    );
};

export default AppBar;