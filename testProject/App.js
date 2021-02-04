import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card styles={styles.cardContainer}>
        <Card.Title>OBJECT DETECTION</Card.Title>
        <Card.Divider />
        <View style={styles.viewContainer}></View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: 400,
  },
  viewContainer: {},
});
