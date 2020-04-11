import AnchorLink from "react-anchor-link-smooth-scroll";
const Button = (props) => {
  return (
    <AnchorLink href={props.url} className="button">
      <button>{props.name}</button>
    </AnchorLink>
  );
};

export default Button;
