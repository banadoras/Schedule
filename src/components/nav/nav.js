import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/connect">Connect</Link>
      </li>
    </ul>
  );
}
