import "../styles/mainPage/mainPage.css";
import Header from "../components/Header";
import MainName from "../components/mainPage/MainName";
import MainData from "../components/mainPage/MainData";
import MainMake from "../components/mainPage/MainMake";
import MainLevel from "../components/mainPage/MainLevel";

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
        <img src=".\images\line.png" alt="구분선1" id="line1" />
        <MainMake scrollPosition={scrollPosition} />
        <img src=".\images\line.png" alt="구분선1" id="line2" />
        <MainLevel scrollPosition={scrollPosition} />
      </div>
    </>
  );
}
