import React from 'react';
import * as Linking from 'expo-linking';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import theme from '../../theme';

const repositoryItemStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
    githubButton:  {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: theme.colors.primary,
        padding: 14,
        marginTop: 10,
        marginHorizontal: 12,
        marginBottom: 5,
        borderRadius: 5
    }
});

const RepositoryItem = ({ item, view }) => {
    
    const onPress = () => {
        Linking.openURL(item.url);
    };

    return (
        <View testID="repositoryItem" style={repositoryItemStyles.container}>
            <ItemHeader
                image={item.ownerAvatarUrl}
                {...item}
            />
            <ItemFooter item={item} />
            { view === "single"  &&
                <Pressable onPress={onPress}>
                    <Text style={repositoryItemStyles.githubButton}>Open in GitHub</Text>
                </Pressable>
            }   
        </View>
    );
};

export default RepositoryItem;