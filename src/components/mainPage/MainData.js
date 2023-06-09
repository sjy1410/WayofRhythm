import "../../styles/mainPage/mainData.css";

export default function MainData(props) {
  const data1 =
    "https://docs.google.com/spreadsheets/d/1PzLHfWmVWJHrBGnNSsLTsdH0ibdk0hB4MpKHET1nkpU/";
  const data2 = "https://adofai.gg/";

  const { scrollPosition } = props;

  return (
    <>
      <p id="p-main1">
        <span>Data From</span>
      </p>
      <button
        id="btn-data1"
        className={scrollPosition < 800 ? "btn-data1-hidden" : "btn-data1"}
        onClick={() => window.open(data1)}
      >
        <img
          src=".\images\adofaiForum.svg"
          alt="비공식포럼"
          id="img-data1"
        ></img>
      </button>
      <img src=".\images\dataLine.svg" id="dataLine" alt="구분선" />
      <button
        id="btn-data2"
        className={scrollPosition < 800 ? "btn-data2-hidden" : "btn-data2"}
        onClick={() => window.open(data2)}
      >
        <img src=".\images\ADOFAIgg.svg" alt="ADOFAI.gg" id="img-data2" />
      </button>
    </>
  );
}
