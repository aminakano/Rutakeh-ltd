import data from "../asset/json/data.json";
import Fade from "react-reveal/Fade";
import { Component } from "react";
import Button from "./Button";

class About extends Component {
  render(){
    const infos = data.info.company;
    const histories = data.info.history;
    const name = "With us?";
    return (
      <div className="about" id="about">
        <h3>About us</h3>
        <div>
          <Fade bottom>
            <h4>会社概要</h4>
            <ul>
              {infos.map((info, i) => (
                <li key={i}>
                  <h5>{info.title}</h5>
                  <p>{info.item}</p>
                </li>
              ))}
            </ul>
            <h4>沿革</h4>
            <ul>
              {histories.map((history, i) => (
                <li key={i}>
                  <h5>{history.title}</h5>
                  <p>{history.item}</p>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        <Button name={name} url={"#contact"} />
      </div>
    );
  }
}

export default About;
