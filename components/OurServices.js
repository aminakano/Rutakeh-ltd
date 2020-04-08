import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faChalkboardTeacher, faGlobe, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import data from "../asset/json/data.json";
import Button from "./Button";

const Services = () => {
  const services = data.info.service;
  const icons = [faLaptop, faChalkboardTeacher, faGlobe, faUserFriends];
  const name = "With us?";
  return (
    <div className="services" id="services">
      <h3>Our services</h3>
      <ul className="services-list">
        {services.map((service, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={icons[i]} className="icon" />
            <div>
              <h4>{service.title}</h4>
              <p>{service.item}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button name={name} />
    </div>
  );
};

export default Services;