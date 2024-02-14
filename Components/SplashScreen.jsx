import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Logo from "../assets/splashicon.png";

const SplashScreen = ({ navigation }) => {
// const SplashScreen = () => {

  useEffect(() => {
    setTimeout(() => {
     navigation.navigate("HomePage");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 34, // Use a number for font size in points
          fontFamily: "monospace",
          marginBottom: 30,
        }}
      >
        AF Calculator
      </Text>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 16,
  },
});

export default SplashScreen;
