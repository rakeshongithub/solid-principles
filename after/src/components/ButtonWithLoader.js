import WithLoader from "../hoc/WithLoader";
import Button from "./Button";

const ButtonComp = (props) => {
  console.log(props);
  return <Button {...props}>Add Comment</Button>;
};

const ButtonWithLoader = WithLoader(ButtonComp);

export default ButtonWithLoader;
