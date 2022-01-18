import React from 'react';
import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.main,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar>
                <AppBarTab
                    title="Repositories"
                    onPress={() => console.log('Repositories')}
                />
            </AppBar>
            <RepositoryList />
        </View>
    );
};

export default Main;