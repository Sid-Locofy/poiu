import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type FrameComponent1Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent1 = ({ style }: FrameComponent1Type) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.roundTripText}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTripText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    position: "relative",
    borderRadius: 32,
    backgroundColor: "#1262ae",
    width: 152.5,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent1;
