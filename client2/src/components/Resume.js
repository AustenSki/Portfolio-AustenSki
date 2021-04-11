import { Link } from "react-router-dom";
import ResumeImg from "../images/Resume.png";
function Resume(props) {
  return (
    <div>
      <header> Resume </header>
      <img id="ResumeImg" src = {ResumeImg} />
    </div>
  );
}

export default Resume;
