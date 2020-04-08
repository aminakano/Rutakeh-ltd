import { Component } from "react";

class Header extends Component {
  componentDidMount() {
    const header = document.getElementById("header");
    let scrollPos = 0;

    const blueHeader = (position) => {
      if (position > 32) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", (e) => {
      scrollPos = window.scrollY;
      blueHeader(scrollPos);
    });
  }
  render () {
    return (
      <header id="header">
        <h2>
          <span>Rutakeh</span>
          <span>龍武株式会社</span>
        </h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;