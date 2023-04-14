import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, RestaurantScreen } from "./src/screens";
import { NativeBaseProvider, Box } from "native-base";
import React from "react";
import { useFonts } from "expo-font";
const fonts = {
  mb: require("./assets/fonts/Montserrat-Bold.ttf"),
  msb: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  mr: require("./assets/fonts/Montserrat-Regular.ttf"),
  wsb: require("./assets/fonts/WorkSans-Bold.ttf"),
  wssb: require("./assets/fonts/WorkSans-SemiBold.ttf"),
  wsr: require("./assets/fonts/WorkSans-Regular.ttf"),
};
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded, error] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  if (error) {
    console.log(error);
    return null;
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Restaurant"
            component={RestaurantScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
