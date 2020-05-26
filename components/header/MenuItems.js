import { Link } from "react-scroll";

const MenuItems = ({ menuType }) => (
  <ul className={menuType}>
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
        duration={500}>
        Services
      </Link>
    </li>
    <li>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}>
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

export default MenuItems;