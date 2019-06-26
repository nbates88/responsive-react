import * as React from "react";
import { Album } from "./Dashboard";
import "./Album.css";

interface AlbumProps {
  album: Album;
}

export default class AlbumListItem extends React.Component<AlbumProps> {
  render() {
    const { album } = this.props;
    return (
      <li className="AlbumListItem col-xs-12 col-md-4">
        <img src={album.images[0].url} />
      </li>
    );
  }
}
