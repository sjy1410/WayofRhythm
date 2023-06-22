import Header from "../components/Header";
import "../styles/guidePage.css";
import { ReactComponent as Content1 } from "../images/guidePage/content1.svg";
import { ReactComponent as Content2 } from "../images/guidePage/content2.svg";
import { ReactComponent as Rabbits } from "../images/guidePage/rabbits.svg";
import { ReactComponent as ToContent } from "../images/guidePage/toContent.svg";

export default function GuidePage() {
  console.log(window.scrollY);
  return (
    <>
      <div className="guide-header">
        <Header />
      </div>
      <div className="guide-background">
        <div className="rabbits">
          <Rabbits />
        </div>
        <div>
          <div className="content1" onClick={() => window.scrollTo(0, 850)}>
            <Content1 />
          </div>
          <div className="content2" onClick={() => window.scrollTo(0, 1670)}>
            <Content2 />
          </div>
        </div>
      </div>
      <div></div>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="to-content"
      >
        <ToContent />
      </div>
    </>
  );
}
