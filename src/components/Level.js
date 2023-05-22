import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

export default function Level({ map }) {
  const [isDone, setIsDone] = useState(map.isDone);

  return (
    <tr className={isDone ? "off" : ""}>
      <td id="td-check">
        <input
          type="checkbox"
          id="check-map"
          onChange={() => setIsDone(!isDone)}
        />
      </td>
      <td id="td-level">{map.level} </td>
      <td>{map.artist} </td>
      <td>{map.name}</td>
      <td id="td-workshop">
        <button id="btn-workshop" onClick={() => window.open(map.workshop)}>
          <FontAwesomeIcon icon={faSteam} />
        </button>
      </td>
      <td id="td-youtube">
        <button id="btn-youtube" onClick={() => window.open(map.youtube)}>
          ▶
        </button>
      </td>
    </tr>
  );
}
