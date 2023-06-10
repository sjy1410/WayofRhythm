import "../styles/header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Githubicon } from "../images/header/githubicon.svg";
import { ReactComponent as Logo } from "../images/header/logo.svg";

export default function Header() {
  const url = "https://github.com/sjy1410/WayofRythm";

  return (
    <>
      <nav class="navbar">
        <ul className="navbar-logo">
          <li>
            <Link to="/" id="name">
              <Logo />
            </Link>
          </li>
        </ul>
        <ul className="navbar-menu">
          <li>
            <Link to="/map" id="map">
              맵 추천
            </Link>
          </li>
          <li>
            <Link to="/guide" id="guide">
              가이드
            </Link>
          </li>
        </ul>
        <ul className="navbar-icon">
          <li>
            <button onClick={() => window.open(url)}>
              <Githubicon />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
