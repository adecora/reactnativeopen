import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Text from '../Text';
import ReviewForm from './ReviewForm';
import useReview from '../../hooks/useCreateReview';

const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingTop: 15,
        color: 'red',
    },
});

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
};

const validationSchema = Yup.object().shape({
    ownerName: Yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: Yup
        .string()
        .required('Repository name is required'),
    rating: Yup
        .number()
        .min(0, 'Rating must be between 0 and 100')
        .max(100, 'Rating must be between 0 and 100')
        .required('Rating is required'),
    text: Yup
        .string(),
});

const ReviewItem = () => {
    const [ error, setError ] = useState(null);
    const [ addReview ] = useReview();
    const navigate = useNavigate();
    
    const onSubmit = async({
        ownerName,
        repositoryName,
        rating,
        text,
    }, { resetForm }) => {
    
        const reviewObject = {
            ownerName,
            repositoryName,
            rating : Number(rating),
            text,
        };

        try {
            const { createReview: { repositoryId }}  = await addReview(reviewObject);
            navigate(`/user/${repositoryId}`, { replace: true });
        } catch (e) {
            setError(e.message);
            setTimeout(() =>{
                resetForm();
                setError(null);
            }, 5000);
            
        }
    };

    return (
        <>
            { error && <Text fontWeight="bold" style={styles.errorContainer}>{error}</Text> }
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
            </Formik>
        </>
    );
};

export default ReviewItem;