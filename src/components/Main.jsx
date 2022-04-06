import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository/index.jsx';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ReviewItem from './ReviewItem';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.main,
        flexGrow: 1,
        flexShrink: 1
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/user/:id" element={<SingleRepository />} />
                <Route path="/review" element={<ReviewItem />} />
            </Routes>
        </View>
    );
};

export default Main;