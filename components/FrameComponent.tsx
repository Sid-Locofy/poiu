import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent = ({ style }: FrameComponentType) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.oneWayText}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWayText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#9eaab6",
    textAlign: "center",
  },
  frameView: {
    position: "relative",
    borderRadius: 32,
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

export default FrameComponent;
