import { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-scroll";

class Header extends Component {
  componentDidMount() {
    const header = document.getElementById("header");
    let scrollPos = 0;

    const headerEffect = position => {
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
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}>
          <h2>
            <span>Rutakeh</span>
            <span>龍武株式会社</span>
          </h2>
        </Link>
        <NavBar />
      </header>
    );
  }
}

export default Header;