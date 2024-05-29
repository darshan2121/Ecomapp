import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


interface Product {
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    imageUri: string;
}
const productsData: Product[] = [
    {
        name: 'Pullover',
        color: 'Black',
        size: 'L',
        price: 51,
        quantity: 1,
        imageUri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLQM--QnS8u5ExtOYLvPzFHTHtibUEltdjbd9bz2q8QZKHKyooys8Cz5_MLJUWRwE8TKHw26Ft_H6nzpS3mR7P5jFqNGwBsngapNANBfv0&usqp=CAE', // Replace with actual image URI
    },
    {
        name: 'T-Shirt',
        color: 'Gray',
        size: 'L',
        price: 30,
        quantity: 1,
        imageUri: 'https://hummel.net.in/cdn/shop/products/ascon-men-blue-t-shirts-2.jpg?v=1708583372', // Replace with actual image URI
    },
    {
        name: 'Sport Dress',
        color: 'Black',
        size: 'M',
        price: 43,
        quantity: 1,
        imageUri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20872038/2023/5/26/e7a5c678-7c8e-4515-807f-883babf471a51685096648647-Blissclub-Women-CloudFlo-Extra-Softness-The-Greatest-Legging-11.jpg', // Replace with actual image URI
    },
];

const Bag: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(productsData);

    const handleQuantityChange = (index: number, change: number) => {
        const newProducts = [...products];
        newProducts[index].quantity += change;
        if (newProducts[index].quantity < 1) newProducts[index].quantity = 1;
        setProducts(newProducts);
    };

    const getTotalPrice = () => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const renderItem = ({ item, index }: { item: Product, index: number }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.imageUri }} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemMeta}>Color: {item.color} Size: {item.size}</Text>
                <View style={styles.cartItemQuantityContainer}>
                    <TouchableOpacity onPress={() => handleQuantityChange(index, -1)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.cartItemQuantityText}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleQuantityChange(index, 1)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Bag</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                style={styles.cartList}
            />
            <TextInput
                style={styles.promoCodeInput}
                placeholder="Enter your promo code"
            />
            <TouchableOpacity style={styles.applyPromoButton}>
                <Image source={require('../../assets/icons/arrowbtn.png')} style={styles.forwardIcon} />
            </TouchableOpacity>
            <Text style={styles.totalText}>Total amount: ${getTotalPrice()}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        width: windowWidth, // Set container width to the device's width
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartList: {
        flex: 1,
        marginBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
    },
    cartItemImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    cartItemDetails: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemMeta: {
        fontSize: 14,
        color: '#888',
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItemQuantityText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    quantityButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        width: 30,
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 16,
    },
    promoCodeInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    applyPromoButton: {
        position: 'absolute',
        right: 30,
        bottom: 90,
        width: 30,
        height: 30,
    },
    forwardIcon: {
        width: 24,
        height: 24,
        tintColor: '#9B9B9B',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkoutButton: {
        backgroundColor: '#DB3022',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Bag;
