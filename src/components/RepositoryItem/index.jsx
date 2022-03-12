import React from 'react';
import { View, StyleSheet } from 'react-native';

import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';

const repositoryItemStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={repositoryItemStyles.container}>
            <ItemHeader
                image={item.ownerAvatarUrl}
                {...item}
            />
            <ItemFooter item={item} />
        </View>
    );
};

export default RepositoryItem;