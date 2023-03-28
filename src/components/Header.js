import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="div-logo">
        <img src=".\images\logo.png" alt="로고" id="logo"></img>
      </div>
      <div className="div-name">
        <Link to="/" id="name">
          Way of Rhythm
        </Link>
      </div>
      <div className="div-map">
        <Link to="/map">맵 추천</Link>
      </div>

      <div className="div-guide">
        <Link to="/guide">가이드</Link>
      </div>
    </div>
  );
}
