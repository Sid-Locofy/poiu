import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BottomTabType = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab = ({ style }: BottomTabType) => {
  return (
    <View style={[styles.bottomTabView, style]}>
      <Image
        style={styles.iconExploreSelected}
        resizeMode="cover"
        source={require("../assets/icon--exploreselected.png")}
      />
      <Text style={[styles.searchText, styles.mt14]}>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconExploreSelected: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  searchText: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#10579b",
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

export default BottomTab;
