import { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavBar from "./NavBar";

class Header extends Component {
  componentDidMount() {
    const header = document.getElementById("header");
    let scrollPos = 0;

    const headerEffect = (position) => {
      if (position > 32) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", (e) => {
      scrollPos = window.scrollY;
      headerEffect(scrollPos);
    });
  }
  render() {
    return (
      <header id="header">
        <AnchorLink href="#home">
          <h2>
            <span>Rutakeh</span>
            <span>龍武株式会社</span>
          </h2>
        </AnchorLink>
        <NavBar />
      </header>
    );
  }
}

export default Header;