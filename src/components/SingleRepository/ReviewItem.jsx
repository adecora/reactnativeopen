import React from 'react';
import { format } from 'date-fns';
import { View,  StyleSheet} from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const reviewItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 15,
    },
    ratingContainer: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'flex-start', 
    },
    textContainer: {
        marginTop: 5,
    },
});

const ReviewItem = ({ review }) => {

    return (
        <View style={reviewItemStyles.container}>
            <View style={reviewItemStyles.ratingContainer}>
                <Text color="primary"fontWeight="bold" border>{review.rating}</Text>
            </View>
            <View style={reviewItemStyles.infoContainer}>
                <Text fontWeight="bold">{review.user.username}</Text>
                <Text  color="textSecondary" >{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
                <Text style={reviewItemStyles.textContainer}>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;