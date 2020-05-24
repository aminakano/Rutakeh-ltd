import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <h3>Get in touch!</h3>
        <p>
          <span>法人、個人の方問わず、お気軽にお問合せください。</span>
          <span>
            早めの返信を心がけておりますが、お時間いただくこともございます。
          </span>
          <span>
            3営業日以内に返信がない場合、お手数ですが
            <a href="mailto: contact@rutakeh.com">contact@rutakeh.com</a>
            にご連絡をお願いいたします。
          </span>
        </p>
        <Form />
        <div className="to-top">
          <AnchorLink href="#home">
            <FontAwesomeIcon icon={faArrowUp} />
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};
export default Contact;
