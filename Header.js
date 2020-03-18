import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#8FBC8F",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 35,
    shadowColor: "#8FBC8F",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    elevation: 2
  },
  textStyle: {
    fontSize: 25,
    color:"white",
    fontStyle:"italic"
  },
});

export default Header;