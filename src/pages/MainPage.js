import Header from "../components/Header";
import "../styles/mainpage.css";

export default function MainPage() {
  return (
    <div className="mainpage">
      <img src=".\images\mainBackground.png" alt="배경" id="main-background" />
      <Header />
      <div className="div-webname">
        <p id="p-webname">
          <span id="red">Way </span>
          <span>of </span>
          <span id="blue">Rhythm</span>
        </p>
      </div>
      <div className="div-webexplain">
        <p id="p-webexplain">Adofai 맵 추천 & 가이드</p>
      </div>
    </div>
  );
}
