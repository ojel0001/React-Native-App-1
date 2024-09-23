import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView,Pressable, } from "react-native";

export default function ListPage() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Pressable onPress={() => alert(item.name)}>
              <Text style={styles.listText}>{item.name}</Text>
              <Text style={styles.listText}>Age: {item.age}</Text>
              <Text style={styles.listText}>Email: {item.email}</Text>
              <Text style={styles.listText}>Profession: {item.profession}</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    profession: "Software Engineer",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 35,
    email: "bob.smith@example.com",
    profession: "Product Manager",
  },
  {
    id: 3,
    name: "Charlie Brown",
    age: 22,
    email: "charlie.brown@example.com",
    profession: "Data Analyst",
  },
  {
    id: 4,
    name: "Diana Prince",
    age: 30,
    email: "diana.prince@example.com",
    profession: "UX Designer",
  },
  {
    id: 5,
    name: "Eve Adams",
    age: 27,
    email: "eve.adams@example.com",
    profession: "Marketing Specialist",
  },
  {
    id: 6,
    name: "Frank Thompson",
    age: 40,
    email: "frank.thompson@example.com",
    profession: "Architect",
  },
  {
    id: 7,
    name: "Grace Kelly",
    age: 26,
    email: "grace.kelly@example.com",
    profession: "Graphic Designer",
  },
  {
    id: 8,
    name: "Hank Williams",
    age: 32,
    email: "hank.williams@example.com",
    profession: "Mechanical Engineer",
  },
  {
    id: 9,
    name: "Isabella Wright",
    age: 29,
    email: "isabella.wright@example.com",
    profession: "Content Writer",
  },
  {
    id: 10,
    name: "Jack Daniels",
    age: 38,
    email: "jack.daniels@example.com",
    profession: "IT Manager",
  },
  {
    id: 11,
    name: "Kathy Miller",
    age: 25,
    email: "kathy.miller@example.com",
    profession: "Social Media Manager",
  },
  {
    id: 12,
    name: "Liam O'Neil",
    age: 31,
    email: "liam.oneil@example.com",
    profession: "Accountant",
  },
  {
    id: 13,
    name: "Maya Patel",
    age: 36,
    email: "maya.patel@example.com",
    profession: "Biochemist",
  },
  {
    id: 14,
    name: "Nathan Drake",
    age: 34,
    email: "nathan.drake@example.com",
    profession: "Sales Executive",
  },
  {
    id: 15,
    name: "Olivia Martinez",
    age: 23,
    email: "olivia.martinez@example.com",
    profession: "Photographer",
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  listItem: {
    padding: 16,
    margin: 8,
    backgroundColor: "#fff", 
    borderRadius: 8,
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  listText: {
    fontSize: 16,
    color: "#333", 
    marginBottom: 4,
  },
});


