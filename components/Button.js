import AnchorLink from "react-anchor-link-smooth-scroll";
const Button = (props) => {
  return (
    <button>
      <AnchorLink href={props.url}>{props.name}</AnchorLink>
    </button>
  );
};

export default Button;
