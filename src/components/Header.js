import "../styles/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const url = "https://github.com/sjy1410/WayofRythm";

  const toggleBtn = document.querySelector(".navbar-toggleBtn");
  const menu = document.querySelector(".navbar-menu");
  const icon = document.querySelector(".navbar-icon");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  });
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
            <button id="btn-github" onClick={() => window.open(url)}>
              <FontAwesomeIcon icon={faGithub} color="white" size="2xl" />
            </button>
          </li>
        </ul>
        <Link to="#" className="navbar-toggleBtn">
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </nav>
    </>
  );
}
