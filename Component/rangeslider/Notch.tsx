import React from 'react';
import { View, StyleSheet } from 'react-native';

const Notch = () => {
    return <View style={styles.root} />;
};

const styles = StyleSheet.create({
    root: {
        width: 8,
        height: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#DB3022',
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 8,
    },
});

export default Notch;
