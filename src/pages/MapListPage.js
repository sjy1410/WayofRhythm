import data from "../db/data.json";
import { useParams } from "react-router";

import "../styles/mapListPage.css";

export default function MapListPage() {
  const { id } = useParams();
  const mapList = data.maps.filter((map) => map.id === Number(id));
  const levelList = data.levels.filter((level) => level.id === Number(id));
  return (
    <div>
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
            <tr key={map.id}>
              <td>{map.level} </td>
              <td>{map.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
