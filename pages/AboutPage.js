import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, ScrollView } from "react-native";

export default function AboutPage({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/Cat Picture.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Once upon a time in the bustling underwater world of the living room
            ocean, Captain Whiskers, the bravest cat in the seven seas, donned
            his trusty shark costume and took command of the USS Meowington.
            This wasn’t just any ordinary cardboard box; it was a
            state-of-the-art submarine, complete with paper periscopes and
            hand-drawn control panels. Captain Whiskers had a mission: to
            navigate past the treacherous couch-pillow coral reefs and evade the
            dreaded vacuum cleaner sea monster. As he peered through the
            periscope, his eyes widened at the sight of the vacuum cleaner
            lurking in the distance, its roar echoing like a monstrous sea
            creature. “Full speed ahead!” Captain Whiskers meowed, his tiny paws
            deftly maneuvering the controls.
          </Text>
          <Text style={styles.text}>
            The USS Meowington glided smoothly through the living room ocean,
            narrowly avoiding the vacuum cleaner’s path. The brave captain’s
            heart raced, but he remained focused, determined to complete his
            mission. Suddenly, a school of toy fish swam by, distracting Captain
            Whiskers. He couldn’t resist the urge to pounce, and with a mighty
            leap, he left the safety of his submarine. The toy fish scattered,
            and Captain Whiskers landed gracefully on the carpet, victorious.
            With the vacuum cleaner sea monster defeated and the toy fish
            conquered, Captain Whiskers returned to the USS Meowington, ready
            for his next adventure. After all, in the living room ocean, there’s
            always another quest waiting for the bravest cat in the seven seas.
            🐾🌊 What do you think Captain Whiskers’ next adventure should be?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  image: {
    borderColor: "#eee",
    borderWidth: 5,
    width: 300,
    height: 400,
    aspectRatio: 5 / 5,
    alignSelf: "center",
    borderRadius: 18,
  },

  text: {
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    lineHeight: 24,
  },
});
