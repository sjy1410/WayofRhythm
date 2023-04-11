import data from "../db/data.json";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "../styles/mapListPage.css";
import Level from "../components/Level";

export default function MapListPage() {
  const { id } = useParams();
  console.log(id);
  const mapList = data.maps.filter((map) => map.id === Number(id));
  const levelList = data.levels.filter((level) => level.id === Number(id));
  return (
    <>
      <img src="\images\mapBackground.png" alt="배경" id="map-background" />
      <ul className="show-level">
        {levelList.map((level) => (
          <li key={level.id}>
            <div>Level: {level.level}</div>
          </li>
        ))}
      </ul>
      <table border="1">
        <tbody>
          {mapList.map((map) => (
            <Level map={map} key={map.id}></Level>
          ))}
        </tbody>
      </table>
      <div className="link-map">
        <Link to="/map">다 깼다면?</Link>
      </div>
    </>
  );
}
