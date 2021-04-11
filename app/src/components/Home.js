// This is going to be my home page/ the first page seen when my site is opened
// All imports 
import { Link } from "react-router-dom";
import HawkeyeImg from "../images/Hawkeye.png";
function Home(props) {
  return (
    <div id="homepage">
  <header> Welcome!! </header>
  <img src = {HawkeyeImg} />
  </div>
  )}

export default Home;
