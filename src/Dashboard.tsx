import * as React from "react";
import { Col, Button, Row } from "react-bootstrap";
import { take } from "lodash";
import AlbumListItem from "./Album";
import "./Dashboard.css";

export interface Album {
  external_urls: {};
  followers: {};
  generes: Array<string>;
  href: string;
  id: string;
  images: Array<{ url: string }>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface DashboardProps {
  accessToken: string;
}

interface DashboardState {
  albums: Array<Album>;
}

export default class Dashboard extends React.Component<
  DashboardProps,
  DashboardState
> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = { albums: [] };
  }
  componentDidMount() {
    const { accessToken } = this.props;
    const request = new Request("https://api.spotify.com/v1/me/top/artists", {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken }
    });

    fetch(request)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ albums: take(data.items, 6) });
      });
  }

  render() {
    let albumList = this.state.albums.map(a => <AlbumListItem album={a} />);
    return (
      <div id="container">
        <Row flex-row>
          <Col xs={12} md={4}>
            <small>Recently Played</small>
            <h1>Jump back in</h1>
            <h3>Pick up your music right where you left off.</h3>
            <Button>Open Web Player</Button>
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <ul>{albumList}</ul>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
