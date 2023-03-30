import data from "../db/data.json";
import { useParams } from "react-router";

export default function MapListPage() {
  return (
    <div>
      <tabel>
        <tbody>
          {data.maps.map((map) => (
            <tr key={map.id}>
              <td>{map.level}</td>
              <td>{map.name}</td>
            </tr>
          ))}
        </tbody>
      </tabel>
    </div>
  );
}
