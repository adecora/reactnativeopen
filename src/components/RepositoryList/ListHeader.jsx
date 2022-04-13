import React from 'react';
import { Picker } from '@react-native-picker/picker' ;
import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
});

const ListHeader = ({order, onChange}) => {
    
    return (
        <Picker
            selectedValue={JSON.stringify(order)}
            onValueChange={onChange}
        >
            <Picker.Item label="Select an item..." style={styles.colorTextSecondary} enabled={false} />
            <Picker.Item label="Latest repositories" value='{"orderBy":"CREATED_AT","orderDirection":"DESC"}' />
            <Picker.Item label="Highest rated repositories" value='{"orderBy":"RATING_AVERAGE","orderDirection":"DESC"}' />
            <Picker.Item label="Lowest rated repositories" value='{"orderBy":"RATING_AVERAGE","orderDirection":"ASC"}' />
        </Picker>);
};

 export default ListHeader;