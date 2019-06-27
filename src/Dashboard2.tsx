import * as React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import "./Dashboard2.css";

export default class Dashboard2 extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron id="jumbo">
          <h1>Be heard.</h1>
          <h2>
            Create audio ad campaigns from scratch, so you can reach your
            audience in unique, screenless moments on Spotify.
          </h2>

          <p>
            <Button variant="primary">Sign Up</Button>
          </p>
        </Jumbotron>
        <section>
          <div id="section">
            <Row>
              <Col sm={12} md={8}>
                <p>Want to promote your music and find new fans?</p>
              </Col>
              <Col sm={12} md={4}>
                <Button>Learn More</Button>
              </Col>
            </Row>
          </div>
        </section>
        <section>
          <div id="section2">
            <Row>
              <Col md={12}>
                <h2 className="col-md-12">The power of audio</h2>
              </Col>
            </Row>
            <Row>
              <Col md={2} />
              <Col md={8}>
                <img src="https://adstudio.scdn.co/assets/landingpage/ad-studio-landing-how-it-works.jpg" />
              </Col>
            </Row>
            <Row>
              <p className="col-md-12">
                Audio stays with people all day long, reaching them in
                screenless moments where visual media can’t. (Like running,
                driving, cooking and cleaning.) And the more people stream, the
                more we learn — helping us understand our audience through
                music. Tap into the power of audio, so your message can break
                through the clutter.
              </p>
              <Col sm={4}>
                <h1>Some title</h1>
                <p>Some details</p>
              </Col>
              <Col sm={4}>
                <h1>Some title</h1>
                <p>Some details</p>
              </Col>
              <Col sm={4}>
                <h1>Some title</h1>
                <p>Some details</p>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}
