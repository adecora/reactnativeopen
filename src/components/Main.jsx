import React from 'react';
import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import Text from './Text';
import AppBar from './AppBar';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {

    return (
        <View style={styles.container}>
            <AppBar>
                <AppBarTab onPress={() => console.log('Repositories')}>
                    Repositories
                </AppBarTab>
            </AppBar>
            <Text>Rate Repository Application</Text>
            <RepositoryList />
        </View>
    );
};

export default Main;