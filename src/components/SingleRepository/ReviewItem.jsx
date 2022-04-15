import React from 'react';
import { useNavigate } from 'react-router-native';
import { format } from 'date-fns';
import { View,  Pressable, Alert, StyleSheet} from 'react-native';

import Text from '../Text';
import theme from '../../theme';
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    },
    headerContainer: {
        flexDirection: 'row',
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
    buttonContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    pressButton: {
        width: '48%',
    },
    button: {
        height: 40,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    viewButton: {
        backgroundColor: theme.colors.primary,
    },
    deleteButton: {
        backgroundColor: theme.colors.error,
    },
});

const ReviewItem = ({ myReview, onDelete, review }) => {
    const [deleteReview] = useDeleteReview();
    const navigate = useNavigate();

    const containerStyle = [
        styles.container,
        !myReview && { marginTop: 10 },
    ];

    const onPressView = () => {
        navigate(`/user/${review.repository.id}`, { replace: true });
    };

    const onPressDelete = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
                {  
                    text: "Delete", 
                    onPress: async() => {
                        try {
                            await deleteReview(review.id);
                            onDelete();
                        } catch (e) {
                            console.log(e);
                        }
                    },
                }
            ]
        );
    };

    return (
        <View style={containerStyle} >
            <View style={styles.headerContainer}>
                <View style={styles.ratingContainer}>
                    <Text color="primary"fontWeight="bold" border>{review.rating}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text fontWeight="bold">
                        {myReview? review.repository.fullName : review.user.username}
                    </Text>
                    <Text  color="textSecondary" >{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
                    <Text style={styles.textContainer}>{review.text}</Text>
                </View>
            </View>        
            {
                myReview &&
                (<View style={styles.buttonContainer}>
                    <Pressable style={styles.pressButton} onPress={onPressView}>
                        <Text 
                            fontWeight="bold" 
                            style={[styles.button, styles.viewButton]}
                        >
                            View repository
                        </Text>
                    </Pressable>
                    <Pressable style={styles.pressButton} onPress={onPressDelete}>
                        <Text 
                            fontWeight="bold" 
                            style={[styles.button, styles.deleteButton]}
                        >
                            Delete review
                        </Text>
                    </Pressable>
                </View>
                )
            }
        </View>
    );
};

export default ReviewItem;