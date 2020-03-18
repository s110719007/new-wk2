import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "./album";

const Albumlist = () => {
  
  return (
    <ScrollView >
     < View style={styles.ContainerStyle}>
     <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[0].title}</Text>
            <Text>{albumData[0].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[1].title}</Text>
            <Text>{albumData[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[2].title}</Text>
            <Text>{albumData[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[3].title}</Text>
            <Text>{albumData[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[4].title}</Text>
            <Text>{albumData[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
      </View>
     </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
   thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 45,
    width: 45,
    margin: 0
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop:3,
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "white",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 18
  },
  cardSectionStyle: {
    borderRadius:10,
    padding: 10,
    backgroundColor: "#BDB76B",
    borderColor: "white",
    borderBottomWidth: 1.5
  },
  imageStyle: {
    height: 350,
    width: null
  },
  ContainerStyle:{
    marginBottom:90
  }
});

export default Albumlist;