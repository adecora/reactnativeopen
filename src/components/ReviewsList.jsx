import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ReviewItem from './SingleRepository/ReviewItem';
import useReviewList from '../hooks/useReviewsList';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = () => {
    const { reviews, fetchMore, refetch } = useReviewList({ 
        first: 5,
        includeReviews: true,
    });
    
    const onEndReach = () => {
        fetchMore();
      };

    const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.1}
            renderItem={
                ({ item }) => 
                    <ReviewItem 
                        myReview={true} 
                        onDelete={refetch}
                        review={item} 
                    />
            }
            keyExtractor={({id}) => id }
        />
    );
};

export default ReviewList;