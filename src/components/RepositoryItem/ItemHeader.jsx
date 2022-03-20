import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const itemHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 45 / 8,
    },
    imageContainer: {
        paddingRight: 15,
    },
    infoContainer: {
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'flex-start',
    },
    infoItem: {
        marginBottom: 8,
    },
    languageItem: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 5,
    },
});

const ItemHeader = ({ image, fullName, description, language }) => {
    return (
        <View style={itemHeaderStyles.container}>
            <View style={itemHeaderStyles.imageContainer}>
                <Image testID="image" style={itemHeaderStyles.image}
                    source={{ uri: image }}
                />
            </View>
            <View style={itemHeaderStyles.infoContainer}>
                <Text testID="fullName" fontWeight="bold" style={itemHeaderStyles.infoItem}>{fullName}</Text>
                <Text testID="description" color="textSecondary" style={itemHeaderStyles.infoItem}>{description}</Text>
                <Text testID="language" style={itemHeaderStyles.languageItem}>{language}</Text>
            </View>
        </View >
    );
};

export default ItemHeader;