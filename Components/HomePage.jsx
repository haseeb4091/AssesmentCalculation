import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import Logo from "../assets/logoofapp.jpg"; // Replace with the actual path

const HomePage = ({ navigation }) => {
  // const HomePage = () => {

  function handleStartClick() {
    console.log("Starting the assessment");
    navigation.navigate("QuestionPage");
  }
  function handleMembershipClick() {
    // navigation.navigate("MemberShip");
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 16 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Logo */}
          <Image source={Logo} style={styles.logo} resizeMode="cover" />
          {/* Heading */}
          <Text style={styles.heading}>
            Ecotoxicity Test (LC/EC50, EC10, NOEC, LOEC) Assessment Factor
            Calculator to derive EQS/PNEC
          </Text>

          {/* Description */}
          <Text style={styles.description}>
            The key elements of an ecotoxicity test/assay are: the organism used
            to assay the chemical (e.g. new agrochemical) or sample (e.g.
            wastewater, river water of sediment sample, soil sample); the
            specifics of the test/assay (e.g. 2, 7 or 14 days) and the result
            produced; LC50 (the concentration that is lethal to 50% of the
            organisms), and EC10, LOEC (Lowest Observable Effect Concentration)
            and NOEC (NO Effect Concentration), with the effect being reduced
            growth, reduced reproduction, etc. An EC50 is like an LC50 but the
            endpoint is non-lethal, such as reduced growth or reduced
            reproduction. An LC50 or EC50 is a result from an acute or
            short-term test. An EC10, LOEC or NOEC is a result from a chronic or
            long-term test.
          </Text>

          {/* Use of ecotoxicity results */}
          <Text>Use of ecotoxicity results to calculate EQS/PNEC:</Text>
          <Text>1. Trophic level; fish, daphnia and alga</Text>
          <Text>
            2. Types of toxicity tests; acute/short-term (LC/EC50) and
            chronic/long-term (NOEC, EC10) results
          </Text>
          <Text>3. Assessment factors; 1000, 100, 50 or 10</Text>
          <Text>
            4. Assessment factor depends on the type and number of toxicity test
            results (and some other rules)
          </Text>
          <Text>
            5. Divide smallest toxicity test result by the assessment factor
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>!</Text> If several short-term
            results are available for the same species with the same endpoint,
            calculate geometric mean for each species prior to deriving EQS.
          </Text>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              style={styles.button}
              onPress={handleStartClick}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>START</Text>
            </Button>
            {/* <Button
              mode="outlined"
              style={styles.button}
              onPress={handleMembershipClick}
            >
              Membership
            </Button> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "justify",
    // marginBottom: 16,
  },
  description: {
    fontSize: 13,
    textAlign: "justify",
    // marginBottom: 16,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: "center", // Align items (buttons) to the center horizontally
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: "50%",
    marginVertical: 8,
  },
});

export default HomePage;
