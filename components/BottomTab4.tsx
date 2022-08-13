import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BottomTab4Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab4 = ({ style }: BottomTab4Type) => {
  return (
    <View style={[styles.bottomTabView, style]}>
      <Image
        style={styles.iconOffers}
        resizeMode="cover"
        source={require("../assets/icon--offers.png")}
      />
      <Text style={[styles.searchText, styles.mt14]}>Offers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconOffers: {
    position: "relative",
    width: 20,
    height: 20,
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

export default BottomTab4;
