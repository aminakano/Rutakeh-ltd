import data from "../asset/json/data.json";
import Fade from "react-reveal/Fade";
import { Component } from "react";
import Button from "./Button";
import ListMapping from "./ListMapping";

class About extends Component {

  render() {
    const infos = data.info.company;
    const histories = data.info.history;
    const name = "With us?";
    return (
      <div className="about" id="about">
        <h3>About us</h3>
        <div>
          <Fade bottom>
            <ListMapping title="会社概要" array={infos} />
            <ListMapping title="沿革" array={histories} />
          </Fade>
        </div>
        <Button name={name} url={"#contact"} />
      </div>
    );
  }
}

export default About;
