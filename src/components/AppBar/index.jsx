import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../../theme';
import useUserInfo from '../../hooks/useUserInfo';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
});


const AppBar = () => {
    const [signOut, me] = useUserInfo();
     
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab title="Repositories" to="/" />
                { me === null
                    ? (
                        <>
                            <AppBarTab title="Sign in" to="/sign-in" />
                            <AppBarTab title="Sign up" to="/sign-up" />
                        </>
                        )
                    :  (
                        <>
                            <AppBarTab title="Create a review" to="/review" />
                            <AppBarTab title="Sign out" onPress={signOut} />
                        </>
                        )
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;