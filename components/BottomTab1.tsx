import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BottomTab1Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab1 = ({ style }: BottomTab1Type) => {
  return (
    <View style={[styles.bottomTabView, style]}>
      <Image
        style={styles.iconItinerary}
        resizeMode="cover"
        source={require("../assets/icon--itinerary.png")}
      />
      <Text style={[styles.searchText, styles.mt14]}>Bookings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconItinerary: {
    position: "relative",
    width: 20,
    height: 20.26,
    flexShrink: 0,
  },
  searchText: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTabView: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default BottomTab1;
