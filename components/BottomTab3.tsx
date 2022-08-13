import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BottomTab3Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab3 = ({ style }: BottomTab3Type) => {
  return (
    <View style={[styles.bottomTabView, style]}>
      <Image
        style={styles.iconUserprofile}
        resizeMode="cover"
        source={require("../assets/icon--userprofile.png")}
      />
      <Text style={[styles.searchText, styles.mt14]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconUserprofile: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    opacity: 0.8,
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

export default BottomTab3;
