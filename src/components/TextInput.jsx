import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: theme.colors.textSecondary,
        borderRadius: 5,
    },
});

const TextInput = ({ style, ...props }) => {
    const textInputStyle = [styles.input, style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;