import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
    actionTouchable: {
        padding: 15,
    },
    actionText: {
        color: theme.colors.appElement,
    },
});

const AppBarTab = ({ children, ...props }) => {
    return (
        <Pressable style={styles.actionTouchable} {...props}>
            <Text fontSize="subheading" fontWeight="bold" style={styles.actionText}>
                {children}
            </Text>
        </Pressable>
    );
};

export default AppBarTab;