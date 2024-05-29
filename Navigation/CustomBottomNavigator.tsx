// // CustomBottomNavigator.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Home from '../Screens/Home/Home';
// import Favourite from '../Screens/Favourite/Favourite';
// import Bag from '../Screens/Bag/Bag';
// import Profile from '../Screens/Profiles/Profile';

// const CustomBottomNavigator = () => {
//     const [activeScreen, setActiveScreen] = useState('Home');

//     const renderScreen = () => {
//         switch (activeScreen) {
//             case 'Home':
//                 return <Home />;
//             case 'Wishlist':
//                 return <Favourite />;
//             case 'Orders':
//                 return <Bag />;
//             case 'Profile':
//                 return <Profile />;
//             default:
//                 return <Home />;
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.content}>
//                 {renderScreen()}
//             </View>
//             <View style={styles.navBar}>
//                 <TouchableOpacity style={styles.navItem} onPress={() => setActiveScreen('Home')}>
//                     <Text style={styles.navText}>Home</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem} onPress={() => setActiveScreen('Wishlist')}>
//                     <Text style={styles.navText}>Wishlist</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem} onPress={() => setActiveScreen('Orders')}>
//                     <Text style={styles.navText}>Orders</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem} onPress={() => setActiveScreen('Profile')}>
//                     <Text style={styles.navText}>Profile</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     navBar: {
//         flexDirection: 'row',
//         height: 60,
//         borderTopWidth: 1,
//         borderTopColor: '#ccc',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#f8f8f8',
//     },
//     navItem: {
//         padding: 10,
//     },
//     navText: {
//         fontSize: 16,
//     },
// });

// export default CustomBottomNavigator;
