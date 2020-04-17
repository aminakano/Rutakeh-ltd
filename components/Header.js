import { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavBar from "./NavBar";

class Header extends Component {
  componentDidMount() {
    const header = document.getElementById("header");
    let scrollPos = 0;
    // const hamburger = document.getElementById("hamburger");

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

    // hamburger.addEventListener("click", (e) => {
    //   header.classList.toggle("active");
    // });
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
        {/* <ul>
          <li>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services">Services</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
        <div className="hamburger" id="hamburger">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <NavBar />
      </header>
    );
  }
}

export default Header;