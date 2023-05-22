import "../styles/mainPage.css";
import Header from "../components/Header";

export default function MainPage() {
  const data1 =
    "https://docs.google.com/spreadsheets/d/1PzLHfWmVWJHrBGnNSsLTsdH0ibdk0hB4MpKHET1nkpU/";
  const data2 = "https://adofai.gg/";

  return (
    <>
      <div className="main-header">
        <Header />
      </div>
      <img src=".\images\mainBackground.png" alt="배경" id="main-background" />
      <div className="p-mainpage">
        <p id="p-webname">
          <span id="red">Way </span>
          <span>of </span>
          <span id="blue">Rhythm</span>
        </p>
        <p id="p-webexplain">Adofai 맵 추천 & 가이드</p>
      </div>
      <p id="p-datafrom">Maps’ data from</p>
      <div className="div-white-background"></div>
      <div className="div-datapage">
        <div className="div-adofaiforum">
          <button id="btn-data1" onClick={() => window.open(data1)}>
            <img
              src=".\images\adofaiForum.png"
              alt="비공식포럼"
              id="adofai-forum"
            ></img>
          </button>
        </div>
        <div className="div-adofaigg">
          <button id="btn-data2" onClick={() => window.open(data2)}>
            <img
              src=".\images\ADOFAIgg.png"
              alt="ADOFAI.gg"
              id="adofai-gg"
            ></img>
          </button>
        </div>
        <img
          src=".\images\mainBackground2.png"
          alt="배경2"
          id="main-background2"
        />
      </div>
    </>
  );
}
