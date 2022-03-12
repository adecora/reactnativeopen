import React from 'react';
import { View, StyleSheet } from 'react-native';

import FootItem from './FootItem';

const itemFooterStyles = StyleSheet.create({
    container: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

const ItemFooter = ({ item }) => {
    return (
        <View style={itemFooterStyles.container}>
            <FootItem title="Starts" value={item.stargazersCount} />
            <FootItem title="Forks" value={item.forksCount} />
            <FootItem title="Reviews" value={item.reviewCount} />
            <FootItem title="Rating" value={item.ratingAverage} />
        </View>
    );
};

export default ItemFooter;