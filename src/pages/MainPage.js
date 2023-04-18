import "../styles/mainPage.css";

export default function MainPage() {
  return (
    <>
      <img src=".\images\mainBackground.png" alt="배경" id="main-background" />
      <div className="p-mainpage">
        <p id="p-webname">
          <span id="red">Way </span>
          <span>of </span>
          <span id="blue">Rhythm</span>
        </p>
        <p id="p-webexplain">Adofai 맵 추천 & 가이드</p>
      </div>
    </>
  );
}
