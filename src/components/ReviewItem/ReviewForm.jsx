import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15
    },
    submit: {
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" keyboardType="numeric" />
            <FormikTextInput name="text" placeholder="Review" />
            <Pressable onPress={onSubmit}>
                <Text fontWeight="bold" style={styles.submit}>Create a review</Text>
            </Pressable>
        </View>
    );
};

export default ReviewForm;