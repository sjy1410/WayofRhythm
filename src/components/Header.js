import "../styles/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <nav class="navbar">
        <div className="navbar-logo">
          <img src="\images\logo.png" alt="로고"></img>
          <Link to="/" id="name">
            Way of Rhythm
          </Link>
        </div>
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
            <FontAwesomeIcon icon={faGithub} color="white" size="2xl" />
          </li>
        </ul>
      </nav>
    </>
  );
}
