import Header from "../components/Header";
import "../styles/mainpage.css";

export default function MapPage() {
  return (
    <div className="mappage">
      <Header />
      <div>맵 추천</div>
      <img src=".\images\mainBackground.png" alt="배경" id="main-background" />
    </div>
  );
}
