import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Home from '../Screens/Home/Home';
import Favourite from '../Screens/Favourite/Favourite';
import Bag from '../Screens/Bag/Bag';
import Profile from '../Screens/Profiles/Profile';
import Shop from '../Screens/Shop/Shop';

const IMAGES = {
    HOME: require('../assets/icons/home.png'),
    SHOP: require('../assets/icons/shop.png'),
    BAG: require('../assets/icons/Bag.png'),
    FAVOURITE: require('../assets/icons/favorite.png'),
    PROFILE: require('../assets/icons/profile.png'),
};

const COLORS = {
    RED: '#DB3022',
    BLACK: '#808080',
};

const CustomBottomNavigator = () => {
    const [activeScreen, setActiveScreen] = useState('Home');

    const renderScreen = () => {
        switch (activeScreen) {
            case 'Home':
                return <Home />;
            case 'Shop':
                return <Shop />;
            case 'Bag':
                return <Bag />;
            case 'Favorite':
                return <Favourite />;
            default:
                return <Profile />;
        }
    };

    const renderNavItem = (screen: React.SetStateAction<string>, label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined, icon: ImageSourcePropType | undefined) => (
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveScreen(screen)}>
            <Image
                source={icon}
                style={[
                    styles.navIcon,
                    { tintColor: activeScreen === screen ? COLORS.RED : COLORS.BLACK },
                ]}
            />
            <Text
                style={[
                    styles.navText,
                    { color: activeScreen === screen ? COLORS.RED : COLORS.BLACK },
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {renderScreen()}
            </View>
            <View style={styles.navBar}>
                {renderNavItem('Home', 'Home', IMAGES.HOME)}
                {renderNavItem('Shop', 'Shop', IMAGES.SHOP)}
                {renderNavItem('Bag', 'Bag', IMAGES.BAG)}
                {renderNavItem('Favorite', 'Facorite', IMAGES.FAVOURITE)}
                {renderNavItem('Profile', 'Profile', IMAGES.PROFILE)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBar: {
        flexDirection: 'row',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    navItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    navIcon: {
        height: 30,
        width: 30,
        marginBottom: 5,
    },
    navText: {
        fontSize: 16,
    },
});

export default CustomBottomNavigator;
