import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const url = "https://github.com/sjy1410/WayofRythm";

  return (
    <>
      <nav class="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="\images\logo.svg" alt="로고" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/map">맵 추천</Link>
          </li>
          <li>
            <Link to="/guide">가이드</Link>
          </li>
        </ul>
        <ul className="navbar-icon">
          <li>
            <button onClick={() => window.open(url)}>
              <img src="../images/githubicon.svg" alt="깃헙아이콘" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
