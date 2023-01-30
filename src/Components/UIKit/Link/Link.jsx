// router
import { Link as RouterLink } from "react-router-dom";

// style
import Style from "./Link.module.css";

const Link = ({ to, children, dark }) => {
  return (
    <RouterLink to={to} className={dark ? Style.linkDark : Style.link}>
      {children}
    </RouterLink>
  );
};

export default Link;
