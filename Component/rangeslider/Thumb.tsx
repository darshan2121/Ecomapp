import React from 'react';
import { View, StyleSheet } from 'react-native';

const Thumb = () => {
    return <View style={styles.root} />;
};

const styles = StyleSheet.create({
    root: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#DB3022',
        borderColor: 'white',
        borderWidth: 2,
        elevation: 2,
    },
});

export default Thumb;
