// import { StyleSheet } from "react-native";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import HomePage from "./Components/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TreeScreen from "./Components/QuestionandAnsweres";
import SplashScreen from "./Components/SplashScreen";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://d53f59d65fd29f791805da18fa92d8a7@o4506681574096896.ingest.sentry.io/4506681577111552",
});
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionPage"
          component={TreeScreen}
          options={{
            title: "What are the data available?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
