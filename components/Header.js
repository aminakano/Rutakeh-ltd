import { Component } from "react";
import window from "global";

class Header extends Component {
  componentDidMount() {
    const header = document.getElementById("header");
    let scrollPos = 0;
    const hamburger = document.getElementById("hamburger");

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


    hamburger.addEventListener("click", (e) => {
      header.classList.toggle("active");
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
        <div className="hamburger" id="hamburger">
          <input type="checkbox"/>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    );
  }
}

export default Header;