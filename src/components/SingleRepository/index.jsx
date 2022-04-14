import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryInfo from './RepositoryInfo';
import useRepository from '../../hooks/useRepositoryView';
import ReviewItem from './ReviewItem';

const SingleRepository = () => {
    let { id } = useParams();
    const { repository, fetchMore } = useRepository({
        first: 5,
        id,
    });

    if(!repository) {
        return null;
    }

    const onEndReach = () => {
        fetchMore();
    };

    const reviews = repository.reviews 
        ? repository.reviews.edges.map(edge => edge.node)
        : [];
    
    return (
        <FlatList
            data={reviews}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({id}) => id }
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        />
    );
};

export default SingleRepository;