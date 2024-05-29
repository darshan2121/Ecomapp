// OrderCard.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, GestureResponderEvent, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';

interface OrderCardProps {
    orderNumber: string;
    trackingNumber: string;
    quantity: number;
    totalAmount: number;
    onPressDetails?: (event: GestureResponderEvent) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ orderNumber, trackingNumber, quantity, totalAmount, onPressDetails }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <Text style={styles.orderNumber}>Order #{orderNumber}</Text>
                <Text style={styles.trackingNumber}>Tracking: {trackingNumber}</Text>
            </View>
            <View style={styles.cardBottom}>
                <Text style={styles.quantity}>Quantity: {quantity}</Text>
                <Text style={styles.totalAmount}>Total: ${totalAmount}</Text>
            </View>
            {onPressDetails && (
                <View style={styles.detailsButtonContainer}>
                    <Button title="Details" onPress={onPressDetails} color="#DB3022" />
                </View>
            )}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={{ borderRadius: 20, borderWidth: 1, width: 98, height: 36 }}><Text style={{ textAlign: 'center', fontSize: 14, color: '#222222', marginTop: 5 }}>Details</Text></View>
                </TouchableOpacity>
                <Text style={styles.deliveredStatus}>Delivered</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 2,  // for a subtle shadow on Android
        shadowColor: '#000',  // for a subtle shadow on iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.5,
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    orderNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    trackingNumber: {
        fontSize: 16,
        color: '#aaa',
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    quantity: {
        fontSize: 16,
        color: '#333',
    },
    totalAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    detailsButtonContainer: {
        marginTop: 10,
    },
    deliveredStatus: {
        marginTop: 10,
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
        marginLeft: '70%'
    },
});

export default OrderCard;
