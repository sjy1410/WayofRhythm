import "../../styles/mainPage/mainData.css";

import { ReactComponent as ADOFAIgg } from "../../images/mainPage/ADOFAIgg.svg";
import { ReactComponent as DataLine } from "../../images/mainPage/dataLine.svg";
import { ReactComponent as AdofaiForum } from "../../images/mainPage/adofaiForum.svg";

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
        <AdofaiForum />
      </button>
      <div className="dataLine">
        <DataLine />
      </div>
      <button
        id="btn-data2"
        className={scrollPosition < 800 ? "btn-data2-hidden" : "btn-data2"}
        onClick={() => window.open(data2)}
      >
        <ADOFAIgg />
      </button>
    </>
  );
}
