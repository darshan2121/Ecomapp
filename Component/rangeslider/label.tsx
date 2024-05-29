import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 5,
        backgroundColor: '#DB3022',
        borderRadius: 4,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default Label;
