import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

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

const AppBarTab = ({ title, to, ...props }) => {
    return (
        <Pressable style={styles.actionTouchable} {...props}>
            { to
                ? (
                    <Link to={to}>
                        <Text fontSize="subheading" fontWeight="bold" style={styles.actionText}>
                            {title}
                        </Text>
                    </Link>)
                : (
                    <Text fontSize="subheading" fontWeight="bold" style={styles.actionText}>
                        {title}
                    </Text>)
            }
        </Pressable >
    );
};

export default AppBarTab;