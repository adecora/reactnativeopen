import React from 'react';
import { FlatList } from 'react-native';

import ReviewItem from './SingleRepository/ReviewItem';
import useReviewList from '../hooks/useReviewsList';

const ReviewList = () => {
    const { reviews, fetchMore } = useReviewList({ 
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
            onEndReached={onEndReach}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => <ReviewItem myReview={true} review={item} />}
            keyExtractor={({id}) => id }
        />
    );
};

export default ReviewList;