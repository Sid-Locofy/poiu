import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type RoundTripType = {
  style?: StyleProp<ViewStyle>;
};

const RoundTrip = ({ style }: RoundTripType) => {
  return (
    <View style={[styles.roundTripView, style]}>
      <Text style={styles.roundTripText}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTripText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#9eaab6",
    textAlign: "center",
  },
  roundTripView: {
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

export default RoundTrip;
