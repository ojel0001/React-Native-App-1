import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welcome To The Home Page!!</Text>

          <View style={styles.button}>
            <Button
              style={styles.button}
              title="About Page"
              onPress={() => navigation.navigate("About")}
              color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="List Page"
              onPress={() => navigation.navigate("List")}
              color={"white"}
            />
          </View>

          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  button: {
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10, 
    borderRadius: 10,
    overflow: "hidden", 
    width: "60%",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});




