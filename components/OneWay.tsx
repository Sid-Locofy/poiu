import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type OneWayType = {
  style?: StyleProp<ViewStyle>;
};

const OneWay = ({ style }: OneWayType) => {
  return (
    <View style={[styles.oneWayView, style]}>
      <Text style={styles.oneWayText}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWayText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 64,
  },
  oneWayView: {
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

export default OneWay;
