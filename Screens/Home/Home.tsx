import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Card from '../../Component/Card';
// import TabNavigator from '../../Navigation/index'
const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../../assets/images/BigBanner.png')} style={styles.banner} />
            <View style={styles.textContainer}>
                <Text style={styles.saleText}>Fashion sale</Text>
                <TouchableOpacity style={styles.signupButton} onPress={() => { }}>
                    <Text style={styles.signupButtonText}>Check</Text>
                </TouchableOpacity>
            </View>

            {/* Section Title */}
            <View style={styles.sectionTitle}>
                <Text style={styles.newText}>New</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitleText}>You’ve never seen it before!</Text>

            {/* Cards */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.cardsContainer}
                contentContainerStyle={styles.cardsContentContainer}
            >
                <Card />
                <Card />
                <Card />
            </ScrollView>

            <View style={styles.sectionTitle}>
                <Text style={styles.newText}>Sale</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitleText}>Super summer sale</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.cardsContainer}
                contentContainerStyle={styles.cardsContentContainer}
            >
                <Card />
                <Card />
                <Card />
            </ScrollView>

            <View>
                <Image source={require('../../assets/images/main.png')} style={{ width: 366, }} />
                <Image source={require('../../assets/images/image.png')} style={{ marginLeft: '45%', marginTop: 0.9 }} />
                <Image source={require('../../assets/images/image(1).png')} style={{ marginTop: -200, marginLeft: -10 }} />
            </View>


        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20,
    },
    banner: {
        width: '100%',
        height: 537, // Adjusted height for better fit
    },
    textContainer: {
        position: 'absolute',
        top: 220, // Adjust this value to position the textContainer as needed
        left: 10,
    },
    saleText: {
        color: 'white',
        fontSize: 48,
        fontWeight: '900',
        marginTop: 150
    },
    signupButton: {
        marginTop: 10,
        width: 160,
        height: 36,
        backgroundColor: '#DB3022',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    sectionTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
    },
    newText: {
        fontSize: 34,
        fontWeight: '900',
        color: 'black',
    },
    viewAllText: {
        fontSize: 11,
        fontWeight: 'normal',
        color: 'black',
        alignSelf: 'center',
        marginTop: 10
    },
    subtitleText: {
        fontSize: 11,
        fontWeight: '300',
        color: 'grey',
        marginVertical: 5,
        width: '90%',
    },
    cardsContainer: {
        width: '100%',
        marginTop: 20,
    },
    cardsContentContainer: {
        alignItems: 'center',
        paddingHorizontal: 10, // Add padding to center the cards
    },
});
