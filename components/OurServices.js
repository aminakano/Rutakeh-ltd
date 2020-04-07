import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faChalkboardTeacher, faGlobe, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import data from "../asset/json/data.json";

const Services = () => {
  const services = data.info.service;
  const icons = [faLaptop, faChalkboardTeacher, faGlobe, faUserFriends];
  return (
    <div className="services">
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
    </div>
  );
};

export default Services;
