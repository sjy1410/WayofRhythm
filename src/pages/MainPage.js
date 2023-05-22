import "../styles/mainPage.css";
import Header from "../components/Header";
import MainName from "../components/mainPage/MainName";
import MainData from "../components/mainPage/MainData";

export default function MainPage() {
  return (
    <>
      <div className="main-header">
        <Header />
      </div>
      <div className="main-background">
        <MainName />
      </div>
      <div className="div-white-background">
        <MainData />
      </div>
      <div className="main-background2" />
    </>
  );
}
