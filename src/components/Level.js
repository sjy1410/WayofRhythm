import { useState } from "react";

export default function Level({ map }) {
  const [isDone, setIsDone] = useState(map.isDone);

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input
          type="checkbox"
          id="check-map"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
        />
        <label htmlFor="check-map"></label>
      </td>
      <td>{map.level} </td>
      <td>{map.name}</td>
      <td>
        <button>▶</button>
      </td>
    </tr>
  );
}
