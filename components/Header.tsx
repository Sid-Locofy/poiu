import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";

type HeaderType = {
  style?: StyleProp<ViewStyle>;
};

const Header = ({ style }: HeaderType) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={[styles.headerSafeAreaView, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.hamburgerIconPressable}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hamburger-icon.png")}
          />
        </Pressable>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
        <View style={styles.profileView}>
          <Image
            style={styles.group3Icon}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSafeAreaView: {
    backgroundColor: "#fff",
  },
  icon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  hamburgerIconPressable: {
    position: "relative",
  },
  logoIcon: {
    position: "relative",
    width: 151.7,
    height: 27.95,
    flexShrink: 0,
  },
  group3Icon: {
    position: "relative",
    width: 36,
    height: 36,
    flexShrink: 0,
    zIndex: 0,
  },
  ovalIcon: {
    position: "absolute",
    top: 0,
    left: 26,
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  profileView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
