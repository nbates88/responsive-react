import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

interface MyNavBarProps {}
interface MyNavbarState {
  semitransparent: boolean;
}

export default class MyNavbar extends React.Component<
  MyNavBarProps,
  MyNavbarState
> {
  constructor(props: MyNavBarProps) {
    super(props);
    this.state = { semitransparent: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    let scroll = {
      x: supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft,
      y: supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop
    };

    if (scroll.y > 100) {
      this.setState({ semitransparent: true });
    } else {
      this.setState({ semitransparent: false });
    }
  };

  render() {
    return (
      <Navbar
        id="nav"
        className={this.state.semitransparent ? "semi-transparent" : ""}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home">My Responsive App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
