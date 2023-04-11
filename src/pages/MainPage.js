import "../styles/mainPage.css";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <div>
      <Header />
      <img src=".\images\mainBackground.png" alt="배경" id="main-background" />
      <p id="p-webname">
        <span id="red">Way </span>
        <span>of </span>
        <span id="blue">Rhythm</span>
      </p>
      <p id="p-webexplain">Adofai 맵 추천 & 가이드</p>
    </div>
  );
}
