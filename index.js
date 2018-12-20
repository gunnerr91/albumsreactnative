import React from "react";
import { View, AppRegistry } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View>
      <Header header="Albums!" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent("albums", () => App);
