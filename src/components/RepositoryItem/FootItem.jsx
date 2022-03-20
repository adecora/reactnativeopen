import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';

const footItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        paddingVertical: 2,
    },
});

const FootItem = ({ title, value, ...props }) => {
    const number = value >= 1000
        ? (value / 1000).toFixed(1).slice(-1) === '0'
            ? `${(value / 1000).toFixed(0)} k`
            : `${(value / 1000).toFixed(1)} k`
        : `${value}`;

    return (
        <View style={footItemStyles.container} {...props} >
            <Text fontWeight="bold" style={footItemStyles.item}>{number}</Text>
            <Text color="textSecondary" style={footItemStyles.item}>{title}</Text>
        </View>
    );
};

export default FootItem;