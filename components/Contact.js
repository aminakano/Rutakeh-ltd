import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3>Get in touch!</h3>
      <p>
        法人、個人の方問わず、お気軽にお問合せください。
        <br />
        3営業日以内に返信がない場合、お手数ですが
        <a href="mailto: contact@rutakeh.com">contact@rutakeh.com</a>
        またはお電話にてご連絡をお願いいたします。
      </p>
      <Form />
      <div className="to-top">
        <AnchorLink href="#home">
          <FontAwesomeIcon icon={faArrowUp} />
        </AnchorLink>
      </div>
    </div>
  );
};
export default Contact;
