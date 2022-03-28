import { useMutation } from "@apollo/client";

import { REVIEW } from '../graphql/mutations';

const useReview = () => {
    const [mutate, result] = useMutation(REVIEW);

    const addReview = async(reviewObject) => {

        const { data } = await mutate({
            variables: {
                review: reviewObject
            }
        });

        return data;
    };

    return [addReview, result];
};

export default useReview;