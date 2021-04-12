// this is the page that holds my resume
// Imports
import { Link } from "react-router-dom";
import ResumeImg from "../images/Resume.png";
function Resume(props) {
  return (
    <div id="resumepage">
      <header> Resume </header>
      {/* //this image is my resume */}
      <img id="ResumeImg" src={ResumeImg} />
    </div>
  );
}

export default Resume;
