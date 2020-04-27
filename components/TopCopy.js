import Button from "./Button";
import Fade from "react-reveal/Fade";
import window from "global";

import { Component } from 'react';
class TopCopy extends Component {
  render() {
    const name = "Get started!";
    return (
      <div className="top-copy" id="home">
        <div className="mask">
          <div className="copy-container">
            <Fade top>
              <h1>
                <span>Let's set </span>
                <span>your goals and </span>
                <span>achieve it! </span>
              </h1>
              <p>
                <span>
                  私たちは、夢や目標を持って学習し、それにより成長を続ける方を応援します。
                </span>
                <span>
                  ゴールできた時の喜びを忘れずに、さらなる成長に繋げましょう！
                </span>
              </p>
            </Fade>
          </div>
          <Button name={name} url={"#services"} />
        </div>
      </div>
    );
  }
};

export default TopCopy;