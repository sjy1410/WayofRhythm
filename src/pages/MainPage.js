import "../styles/mainPage/mainPage.css";
import Header from "../components/Header";
import MainName from "../components/mainPage/MainName";
import MainData from "../components/mainPage/MainData";
import MainMake from "../components/mainPage/MainMake";
import MainLevel from "../components/mainPage/MainLevel";

import { ReactComponent as Line } from "../images/mainPage/line.svg";

import { useEffect, useState } from "react";

export default function MainPage() {
  console.log(window.scrollY);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <>
      <div className="main-background">
        <div className="main-header">
          <Header />
        </div>
        <MainName />
        <MainData scrollPosition={scrollPosition} />
        <div className="line1">
          <Line />
        </div>
        <MainMake scrollPosition={scrollPosition} />
        <div className="line2">
          <Line />
        </div>
        <MainLevel scrollPosition={scrollPosition} />
      </div>
    </>
  );
}
