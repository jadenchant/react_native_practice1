import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

// Start App expo start
export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your cool app!</Text>
      <Text>Neeto Burrito</Text>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        onChange={arg => setFname(arg)}
        defaultValue={fname}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        onChange={arg => setLname(arg)}
        defaultValue={lname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 100,
    backgroundColor: "#ddd",
  },
});
