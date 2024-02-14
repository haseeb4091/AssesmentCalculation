import Logo from '../assets/logoofapp.jpg'; // Replace with the actual path
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
  // const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
    // navigation.navigate('HomePage');
    // Define the API endpoint for login
    const apiEndpoint = 'http://142.11.210.81:4000/login'; // Replace with your backend URL

    // Create an object with email and password
    const credentials = {
      email: email,
      password: password,
    };

    // Send a POST request to the login API endpoint
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the login response here
        console.log(data);

        // Check if login was successful (you can customize this based on your backend response)
        if (data.message === 'Login successful') {
          // Navigate to the home page or any other destination upon successful login
          navigation.navigate('HomePage');
        } else {
          // Handle unsuccessful login (e.g., display an error message)
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(err => {
        // Handle any errors that occur during the login API call
        console.error('Login error:', err);
        alert('Login failed. Please try again later.');
      });
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 16, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      {/* Logo */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      {/* Email input */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={[styles.input, { width: screenWidth * 0.7 }]}
        mode='outlined'
      />

      {/* Password input */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={[styles.input, { width: screenWidth * 0.7 }]}
        mode='outlined'
      />

      {/* Login button */}
      <Button mode="outlined" onPress={handleLogin} style={[styles.button, { width: screenWidth * 0.7 }]}>
        Login
      </Button>

      {/* Signup prompt */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Signup');
        }}>
          <Text style={styles.signupLink}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding: 16,
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
    // width: 250
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  signupText: {
    fontSize: 14,
  },
  signupLink: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
