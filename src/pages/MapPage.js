import { Link } from "react-router-dom";

import Header from "../components/Header";
import "../styles/mapPage.css";

import data from "../db/data.json";

export default function MapPage() {
  console.log(data);
  return (
    <div className="mappage">
      <img src=".\images\mapBackground.png" alt="배경" id="map-background" />
      <Header />
      <div className="div-userLevel-explain">
        실력에 맞는 맵풀을 골라보세요!
      </div>
      <ul className="user-level">
        {data.levels.map((level) => (
          <li key={level.id}>
            <Link to={`/level/${level.id}`}>{level.player}</Link>
            <div>{level.explain}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
