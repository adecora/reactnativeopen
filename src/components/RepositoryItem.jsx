import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';


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
                <Image style={itemHeaderStyles.image}
                    source={{ uri: image }}
                />
            </View>
            <View style={itemHeaderStyles.infoContainer}>
                <Text fontWeight="bold" style={itemHeaderStyles.infoItem}>{fullName}</Text>
                <Text color="textSecondary" style={itemHeaderStyles.infoItem}>{description}</Text>
                <Text style={itemHeaderStyles.languageItem}>{language}</Text>
            </View>
        </View >
    );
};


const footItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        paddingVertical: 2,
    },
});

const FootItem = ({ title, value }) => {
    const number = value >= 1000
        ? (value / 1000).toFixed(1).slice(-1) === '0'
            ? `${(value / 1000).toFixed(0)} k`
            : `${(value / 1000).toFixed(1)} k`
        : `${value}`;

    return (
        <View style={footItemStyles.container}>
            <Text fontWeight="bold" style={footItemStyles.item}>{number}</Text>
            <Text color="textSecondary" style={footItemStyles.item}>{title}</Text>
        </View>
    );
};


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