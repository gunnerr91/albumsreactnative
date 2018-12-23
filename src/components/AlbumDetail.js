import React from "react";
import { View, Text, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainers}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.albumCover} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  albumCover: {
    height: 220,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
