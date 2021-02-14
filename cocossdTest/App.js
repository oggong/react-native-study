import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Canvas, { Image as CanvasImage } from "react-native-canvas";

export default function App() {
  const handleCanvas = (canvas) => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, 100, 100);
    // add
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Canvas ref={handleCanvas}></Canvas>
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
});
