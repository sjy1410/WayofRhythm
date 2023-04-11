import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="div-logo">
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
      </header>
    </>
  );
}
