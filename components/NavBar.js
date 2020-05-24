import { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerMenu from "react-hamburger-menu";
import window from "global";
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={25}
        height={20}
        strokeWidth={3}
        rotate={0}
        color={this.state.open ? "white" : "#3e4348"}
        borderRadius={2}
        animationDuration={0.5}
      />
    );
  };

  displayNavBar = () => {
    return (
      <ul className="nav">
        {/* <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#services">
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li> */}

        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    );
  };

  displayMobileMenu = () => {
    return (
      <ul className="hamburgerDropDown">
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
    );
  };

  render() {
    return (
      <div className="navbar">
        {this.state.open ? this.displayMobileMenu() : null}
        {window.innerWidth > 767
          ? this.displayNavBar()
          : this.displayHamburgerMenu()}
      </div>
    );
  }
}

export default NavBar;
