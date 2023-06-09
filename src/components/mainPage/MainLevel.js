import "../../styles/mainPage/mainLevel.css";

export default function MainLevel(props) {
  const { scrollPosition } = props;
  return (
    <>
      <p id="p-main3-1">
        사용자의<span id="p-main3-1-bold"> 실력대별</span>로
      </p>
      <p id="p-main3-2">추천맵을 구분해놨습니다.</p>
      <div
        className={
          scrollPosition < 1900 ? "official-icon-hidden" : "official-icon"
        }
      >
        <img src=".\images\official.svg" alt="공식맵" />
      </div>
      <div
        className={scrollPosition < 1900 ? "crown-icon-hidden" : "crown-icon"}
      >
        <img src=".\images\crown.svg" alt="왕관섬" />
      </div>
      <div
        className={scrollPosition < 1900 ? "custom-icon-hidden" : "custom-icon"}
      >
        <img src=".\images\custom.svg" alt="커스텀" />
      </div>
      <div className="arrows">
        <img src=".\images\arrows.svg" alt="화살표들" />
      </div>
      <div className="whitespace" />
    </>
  );
}
