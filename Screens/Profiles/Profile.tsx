import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import OrderCard from '../Profiles/Ordercard';

const Profile = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.searchIconContainer}>
                <Image source={require('../../assets/icons/baseline-search-24px.png')} style={styles.searchIcon} />
            </TouchableOpacity>


            <Text style={styles.title}>My Profile</Text>


            <View style={styles.profileInfoContainer}>

                <Image source={require('../../assets/images/profileimage.png')} style={styles.profileImage} />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.name}>Matilda Brown</Text>
                    <Text style={styles.email}>matildabrown@mail.com</Text>
                </View>

            </View>


            <View style={{ marginTop: '4%' }}>
                <TouchableOpacity>
                    <View style={styles.ordersContainer}>
                        <Text style={styles.ordersTitle}>My Orders</Text>
                        <TouchableOpacity style={styles.forwardIconContainer}>
                            <Image source={require('../../assets/icons/forward.png')} style={styles.forwardIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ordersCount}>You already have 12 orders</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.ordersContainer}>
                        <Text style={styles.ordersTitle}>Shipping addresses</Text>
                        <TouchableOpacity style={styles.forwardIconContainer}>
                            <Image source={require('../../assets/icons/forward.png')} style={styles.forwardIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ordersCount}>3 ddresses</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.ordersContainer}>
                        <Text style={styles.ordersTitle}>Payment methods</Text>
                        <TouchableOpacity style={styles.forwardIconContainer}>
                            <Image source={require('../../assets/icons/forward.png')} style={styles.forwardIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ordersCount}>Visa  **34</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.ordersContainer}>
                        <Text style={styles.ordersTitle}>Promocodes</Text>
                        <TouchableOpacity style={styles.forwardIconContainer}>
                            <Image source={require('../../assets/icons/forward.png')} style={styles.forwardIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ordersCount}>You have special promocodes</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.ordersContainer}>
                        <Text style={styles.ordersTitle}>My reviews</Text>
                        <TouchableOpacity style={styles.forwardIconContainer}>
                            <Image source={require('../../assets/icons/forward.png')} style={styles.forwardIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ordersCount}>Reviews for 4 items</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.ordersContainer}>
                        <Text style={styles.ordersTitle}>Settings</Text>
                        <TouchableOpacity style={styles.forwardIconContainer}>
                            <Image source={require('../../assets/icons/forward.png')} style={styles.forwardIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ordersCount}>Notifications, password</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,

    },
    searchIconContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
    searchIcon: {
        width: 24,
        height: 24,
        tintColor: '#000',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginTop: '16%',

    },
    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: '15%',

    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileTextContainer: {
        marginLeft: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#888',
    },
    ordersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '-10%',
    },
    ordersTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 10,
    },
    forwardIconContainer: {
        marginLeft: 'auto',
    },
    forwardIcon: {
        tintColor: '#9B9B9B',
        marginRight: '-8%',
    },
    ordersCount: {
        fontSize: 11,
        color: '#888',
        marginBottom: 15,
        marginLeft: '-10%',
    },
});

export default Profile;
{/* <OrderCard orderNumber={''} trackingNumber={''} quantity={0} totalAmount={0} /> */ }
