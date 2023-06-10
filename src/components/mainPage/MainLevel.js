import "../../styles/mainPage/mainLevel.css";

import { ReactComponent as Arrows } from "../../images/mainPage/arrows.svg";
import { ReactComponent as Official } from "../../images/mainPage/official.svg";
import { ReactComponent as Crown } from "../../images/mainPage/crown.svg";
import { ReactComponent as Custom } from "../../images/mainPage/custom.svg";

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
        <Official />
      </div>
      <div
        className={scrollPosition < 1900 ? "crown-icon-hidden" : "crown-icon"}
      >
        <Crown />
      </div>
      <div
        className={scrollPosition < 1900 ? "custom-icon-hidden" : "custom-icon"}
      >
        <Custom />
      </div>
      <div className="arrows">
        <Arrows />
      </div>
      <div className="whitespace" />
    </>
  );
}
