import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.conatiner}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/icon.png')} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.logintext}>Sign up</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#888"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#888"
                        secureTextEntry
                    />

                </View>

                <TouchableOpacity>
                    <View style={styles.accountContainer}>
                        <Text style={{ marginRight: 5 }} >Already have an account?</Text>
                        <Image source={require('../../assets/icons/round-arrow_right_alt-24px.png')} style={styles.arrowIcon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} onPress={() => { }}>
                    <Text style={styles.signupButtonText}>SIGN UP </Text>
                </TouchableOpacity>

                <View style={styles.txt}>
                    <Text style={{}}>Or sign up with social account</Text>
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                        <Image source={require('../../assets/icons/Google.png')} style={styles.socialIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                        <Image source={require('../../assets/icons/Facebook.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    conatiner: {

    },
    backIcon: {
        marginTop: 15,
        marginLeft: 5,
    },
    logintext: {
        fontSize: 34,
        fontWeight: "bold",
        marginTop: 40,
        marginLeft: 15,
        paddingTop: 20,
    },

    input: {
        height: 64,
        width: 343,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginVertical: 10,
        alignItems: 'center',
        marginLeft: 20,
        borderTopWidth: 0,
        marginTop: 10,
    },
    accountContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        marginLeft: 150
    },
    arrowIcon: {
        width: 30,
        height: 30,
        marginLeft: 5,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    signupButton: {
        marginTop: 20,
        width: '80%',
        height: 48,
        backgroundColor: '#DB3022',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30

    },
    signupButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,
    },
    socialButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
    },
    socialIcon: {
        width: 90,
        height: 90,
        marginRight: 20,
    },
    txt: {
        top: 80,
        textAlign: 'center',
        alignItems: 'center'
    },
})