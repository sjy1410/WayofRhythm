import Header from "../components/Header";
import "../styles/mainpage.css";

export default function GuidePage() {
  return (
    <div className="guidepage">
      <img src=".\images\mainBackground.png" alt="배경" id="main-background" />
      <Header />
      <div>가이드</div>
    </div>
  );
}
