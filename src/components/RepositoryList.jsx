import React from 'react';
import { useNavigate } from 'react-router-native';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositoryList';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

// "Pure" code component to use on testing. 
// assume that the useRepositories hook works as intended (preferably through testing it)
export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
        />
    );
};
    

const RepositoryList = () => {
    const { repositories } = useRepositories();
    const navigate = useNavigate();

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => { 

                const repositoryView = () => {
                    navigate(`/user/${item.id}`, { replace: true });
                };

                return (
                    <Pressable onPress={repositoryView}>
                        <RepositoryItem item={item} />
                    </Pressable>
                );
            }}
        />
    );
};

export default RepositoryList;
