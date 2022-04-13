import React , { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';

import ListHeader from './ListHeader';
import Text from '../Text';
import RepositoryItem from '../RepositoryItem';
import useRepositories from '../../hooks/useRepositoryList';


const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    header: {
        padding: 15,
    }, 
    loading: {
        padding: 5,
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
    const [order, setOrder] = useState({
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC'
    });
    const { repositories, loading } = useRepositories(order);
    const navigate = useNavigate();
    
    const onChangeOrder = (orderValue) => {
        setOrder(JSON.parse(orderValue));
    };

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];
    
    if(loading) return <Text  style={styles.loading}>Loading...</Text>;

    return (
        <FlatList
            ListHeaderComponent={<ListHeader order={order} onChange={onChangeOrder} />}
            ListHeaderComponentStyle={styles.header}
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
