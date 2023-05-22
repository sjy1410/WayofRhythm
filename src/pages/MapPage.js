import { Link } from "react-router-dom";
import "../styles/mapPage.css";
import data from "../db/data.json";
import Header from "../components/Header";

export default function MapPage() {
  return (
    <>
      <div className="map-header">
        <Header />
      </div>
      <img src="\images\mapBackground.png" alt="배경" id="mapbackground" />
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
