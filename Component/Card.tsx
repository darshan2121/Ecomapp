import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/photo2.png')} style={styles.productImage} />
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-20%</Text>
                </View>
                <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={require('../assets/icons/favoriteborder.png')} style={styles.favoriteIconImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.ratingContainer}>
                    <Image source={require('../assets/icons/activated.png')} style={styles.ratingStar} />
                    <Image source={require('../assets/icons/activated.png')} style={styles.ratingStar} />
                    <Image source={require('../assets/icons/activated.png')} style={styles.ratingStar} />
                    <Image source={require('../assets/icons/activated.png')} style={styles.ratingStar} />
                    <Image source={require('../assets/icons/activated.png')} style={styles.ratingStar} />
                    <Text style={styles.ratingText}>(10)</Text>
                </View>
                <Text style={styles.brandName}>Dorothy Perkins</Text>
                <Text style={styles.productName}>Evening Dress</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.originalPrice}>$15</Text>
                    <Text style={styles.discountedPrice}>$12</Text>
                </View>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 5,
        width: 164,
        height: 260,
    },
    imageContainer: {
        position: 'relative',
        height: '60%',
    },
    productImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#FF6347',
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    discountText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        padding: 5,
    },
    favoriteIconImage: {
        width: 14,
        height: 14,
    },
    detailsContainer: {
        padding: 10,
        height: '40%',
        justifyContent: 'space-between',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingStar: {
        width: 14,
        height: 14,
    },
    ratingText: {
        marginLeft: 5,
        color: '#888',
        fontSize: 12,
    },
    brandName: {
        color: '#888',
        fontSize: 12,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    originalPrice: {
        color: '#888',
        textDecorationLine: 'line-through',
        marginRight: 5,
        fontSize: 12,
    },
    discountedPrice: {
        color: '#FF6347',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
