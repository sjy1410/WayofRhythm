import "../../styles/mainPage/mainMake.css";

export default function MainMake(props) {
  const { scrollPosition } = props;
  return (
    <>
      <div className="compass">
        <img src=".\images\compass.png" alt="나침반" id="compass" />
      </div>
      <div className="compass-in">
        <img src=".\images\compass-in.png" alt="나침반" id="compass-in" />
      </div>
      <p id="p-main2">제작의도</p>
      <p
        id="p-make"
        className={scrollPosition < 1250 ? "p-make-hidden" : "p-make"}
      >
        <p>플레이어의 실력대 별로 할만한 맵을 추천해주며</p>
        <p>얼불춤에 흥미를 느낄 수 있도록 하고</p>
        <p>
          최종적으로는 <span id="span-red">얼불춤의 진입장벽을 낮추고자</span>
        </p>
        <p>하는 목적에서 제작하였습니다.</p>
      </p>
    </>
  );
}
