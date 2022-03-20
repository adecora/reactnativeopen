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
            <FootItem testID="starts" title="Starts" value={item.stargazersCount} />
            <FootItem testID="forks" title="Forks" value={item.forksCount} />
            <FootItem testID="reviews" title="Reviews" value={item.reviewCount} />
            <FootItem testID="rating" title="Rating" value={item.ratingAverage} />
        </View>
    );
};

export default ItemFooter;