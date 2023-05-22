export default function MainData() {
  const data1 =
    "https://docs.google.com/spreadsheets/d/1PzLHfWmVWJHrBGnNSsLTsdH0ibdk0hB4MpKHET1nkpU/";
  const data2 = "https://adofai.gg/";
  return (
    <>
      <p id="p-datafrom">Maps’ data from</p>
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
      </div>
    </>
  );
}
