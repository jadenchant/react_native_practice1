import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

// Start App expo start
export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [err, setErr] = useState("");

  function handleSubmit() {
    console.log("submit");
  }

  // Not useful now that I know it's onChangeText and not onChange
  // function handleChange(input: any, isFname: boolean) {
  //   if (isFname) {
  //     if (typeof input === "string") {
  //       setFname(input);
  //     } else {
  //       setErr("First Name is a " + typeof input);
  //       console.log(input);
  //     }
  //   } else {
  //     if (typeof input === "string") {
  //       setLname(input);
  //     } else {
  //       setErr("Last Name is a " + typeof input);
  //       console.log(input);
  //     }
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text>Neeto Burrito</Text>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        onChangeText={input => setFname(input)}
        defaultValue={fname}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        onChangeText={input => setFname(input)}
        defaultValue={lname}
      />
      <Button onPress={handleSubmit} title='Submit' />
      <Text>{err}</Text>
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
