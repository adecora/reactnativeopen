import React , { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-native';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';

import ListHeader from './ListHeader';
import RepositoryItem from '../RepositoryItem';
import useRepositories from '../../hooks/useRepositoryList';


const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    header: {
        padding: 15,
    }
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
    const [keyword, setKeyword] = useState('');
    const [searchKeyword] = useDebounce(keyword, 500);
    const [order, setOrder] = useState({
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC'
    });
    const { repositories, fetchMore } = useRepositories({
        first: 8,
        ...order, 
        searchKeyword,
    });
    const navigate = useNavigate();
    
    const onChangeOrder = (orderValue) => {
        setOrder(JSON.parse(orderValue));
    };

    const onChangeSearch = (query) => { 
        setKeyword(query);
    };

    const onEndReach = () => {
        fetchMore();
      };

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            ListHeaderComponent={
                <ListHeader 
                    order={order}
                    keyword={keyword}
                    onChangeOrder={onChangeOrder}
                    onChangeSearch={onChangeSearch}
                />
            }
            ListHeaderComponentStyle={styles.header}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.1}
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
