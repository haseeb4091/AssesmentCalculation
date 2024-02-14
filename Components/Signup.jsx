import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../assets/logoofapp.jpg';

const screenWidth = Dimensions.get('window').width;

const Signup = ({ navigation }) => {
// const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = () => {
        setLoading(true);
        // navigation.navigate('Login');
        // return;
        setError('');
        if (!name.trim()) {
            setLoading(false);
            setError('Name cannot be empty');
            return; // Stop the function if the name is empty
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!emailRegex.test(email)) {
            setLoading(false);
            setError('Invalid email format');
            return; // Stop the function if the email is invalid
        }

        // Validate password length
        if (password.length < 8) {
            setLoading(false);
            setError('Password must be at least 8 characters long');
            return; // Stop the function if the password is too short
        }

        // Optional: Validate name (if required in your application)
        // For example, check if the name is not empty

        // Replace with your API endpoint
        const apiEndpoint = 'http://142.11.210.81:4000/signup';

        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                navigation.navigate('Login');
            })
            .catch(err => {
                setLoading(false);
                setError('Signup failed: ' + err.message);
                console.error('Signup error:', err);
            });
    };


    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />

            <TextInput
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                style={[styles.input, { width: screenWidth * 0.7 }]}
                mode='outlined'
            />

            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={[styles.input, { width: screenWidth * 0.7 }]}
                mode='outlined'
            />

            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={[styles.input, { width: screenWidth * 0.7 }]}
                mode='outlined'
            />

            {loading && <Text>Loading...</Text>}
            {error !== '' && <Text style={styles.errorText}>{error}</Text>}

            <Button
                mode="outlined"
                onPress={handleSignup}
                style={[styles.button, { width: screenWidth * 0.7 }]}
            >
                Signup
            </Button>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 16,
    },
    input: {
        marginBottom: 16,
        height: 40,
        borderRadius: 5,
    },
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    loginText: {
        fontSize: 14,
    },
    loginLink: {
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
    },
});

export default Signup;
