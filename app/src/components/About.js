// This will include my hobbies and interests as well
import { Link } from "react-router-dom";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
function About(props) {
  return (
    <div id="fullaboutpage">
      {" "}
      <header> About Me </header>
      {/* This will discribe what I'm interested in */}
      <div id="interests">
        <span id="interTitle">My Interests</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          in egestas erat imperdiet sed euismod nisi. Lacus viverra vitae congue
          eu consequat ac felis donec. In iaculis nunc sed augue lacus viverra
          vitae congue. At risus viverra adipiscing at in tellus. Duis at
          consectetur lorem donec massa sapien faucibus et molestie. Gravida
          arcu ac tortor dignissim convallis aenean et. Faucibus turpis in eu mi
          bibendum neque egestas. Ullamcorper eget nulla facilisi etiam
          dignissim. Non pulvinar neque laoreet suspendisse interdum. A arcu
          cursus vitae congue mauris. Quisque egestas diam in arcu cursus
          euismod quis viverra nibh. Suscipit tellus mauris a diam maecenas.
          Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse
          faucibus. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Et malesuada fames ac turpis egestas sed.
          Porttitor rhoncus dolor purus non enim praesent. Id aliquet risus
          feugiat in ante metus dictum at tempor.
        </p>
      </div>
      {/* This will discribe my history, where I started, and where I've been  */}
      <div id="history">
        <span id="histTitle">My History</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          in egestas erat imperdiet sed euismod nisi. Lacus viverra vitae congue
          eu consequat ac felis donec. In iaculis nunc sed augue lacus viverra
          vitae congue. At risus viverra adipiscing at in tellus. Duis at
          consectetur lorem donec massa sapien faucibus et molestie. Gravida
          arcu ac tortor dignissim convallis aenean et. Faucibus turpis in eu mi
          bibendum neque egestas. Ullamcorper eget nulla facilisi etiam
          dignissim. Non pulvinar neque laoreet suspendisse interdum. A arcu
          cursus vitae congue mauris. Quisque egestas diam in arcu cursus
          euismod quis viverra nibh. Suscipit tellus mauris a diam maecenas.
          Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse
          faucibus. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Et malesuada fames ac turpis egestas sed.
          Porttitor rhoncus dolor purus non enim praesent. Id aliquet risus
          feugiat in ante metus dictum at tempor.
        </p>
      </div>
      {/* This is going to describe where I want to go and dreams I'll be striving to conquer */}
      <div id="goals">
        <span id="goalTitle">My Goals & Dreams</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          in egestas erat imperdiet sed euismod nisi. Lacus viverra vitae congue
          eu consequat ac felis donec. In iaculis nunc sed augue lacus viverra
          vitae congue. At risus viverra adipiscing at in tellus. Duis at
          consectetur lorem donec massa sapien faucibus et molestie. Gravida
          arcu ac tortor dignissim convallis aenean et. Faucibus turpis in eu mi
          bibendum neque egestas. Ullamcorper eget nulla facilisi etiam
          dignissim. Non pulvinar neque laoreet suspendisse interdum. A arcu
          cursus vitae congue mauris. Quisque egestas diam in arcu cursus
          euismod quis viverra nibh. Suscipit tellus mauris a diam maecenas.
          Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse
          faucibus. Volutpat commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque. Et malesuada fames ac turpis egestas sed.
          Porttitor rhoncus dolor purus non enim praesent. Id aliquet risus
          feugiat in ante metus dictum at tempor.
        </p>
      </div>
    </div>
  );
}
export default About;
