import { Link } from "react-router-dom";

import "../styles/mapPage.css";

import data from "../db/data.json";

export default function MapPage() {
  return (
    <>
      <img src="\images\mapBackground.png" alt="배경" id="map-background" />
      <div className="home-btn">
        <Link to="/">
          <img src="\images\logo.png" alt="로고"></img>
          <p id="p-logo">홈화면으로</p>
        </Link>
      </div>
      <div className="div-userLevel-explain">
        실력에 맞는 맵풀을 골라보세요!
      </div>
      <ul className="user-level">
        {data.levels.map((level) => (
          <li key={level.id}>
            <Link to={`id/${level.id}`}>{level.player}</Link>
            <div>{level.explain}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
