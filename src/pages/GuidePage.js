import Header from "../components/Header";
import "../styles/guidePage.css";

export default function GuidePage() {
  console.log(window.scrollY);
  return (
    <>
      <div className="guide-header">
        <Header />
      </div>
      <div className="guide-background">
        <div>
          <img src=".\images\rabbits.svg" alt="토끼들" id="rabbits" />
        </div>
        <div>
          <div>
            <img
              src=".\images\content1.svg"
              alt="목차1"
              id="content1"
              onClick={() => window.scrollTo(0, 850)}
            />
          </div>
          <div>
            <img
              src=".\images\content2.svg"
              alt="목차1"
              id="content2"
              onClick={() => window.scrollTo(0, 1670)}
            />
          </div>
        </div>
      </div>
      <img
        src=".\images\topBtn.svg"
        alt="목차로"
        id="topBtn"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </>
  );
}
