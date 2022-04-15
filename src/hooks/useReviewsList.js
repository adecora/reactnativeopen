import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useReviewList = (variables) => {
    const { data, loading, fetchMore, ...result } = useQuery(ME, {
        variables,
        fetchPolicy: 'cache-and-network',
    });
    
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

        if(!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        reviews: data?.me.reviews,
        fetchMore: handleFetchMore,
       loading,
        ...result
    };
};

export default useReviewList;