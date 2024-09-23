import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer   = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: true, headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0, }, headerTitle: " ", }} >
          <Drawer.Screen name="Home" component={HomePage} options={{
            drawerIcon: ({ color, size }) => (

                <Ionicons name="home-outline" color={color} size={size} /> ),}}/>

          <Drawer.Screen name="About" component={AboutPage} options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="information-circle-outline" color={color} size={size} /> ), }} />

          <Drawer.Screen name="List" component={ListPage} options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="list-outline" color={color} size={size} /> ), }} />

        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#333333", 
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff", 
    fontSize: 24,
  },
});



