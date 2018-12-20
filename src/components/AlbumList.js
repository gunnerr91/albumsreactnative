import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
    console.log("it has mounted");
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => (
      <AlbumDetail key={index} album={album} />
    ));
  }
  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
