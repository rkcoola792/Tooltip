// importing using tippy
import Tippy from "@tippyjs/react";
import { useState } from "react";

// this below import is for the styling of toltip component and is optional
import "tippy.js/dist/tippy.css";

function App() {
  const [position, setPosition] = useState("right");

  return (
    <div className="my-container">
      {/* we are using Tippy component which can pass different prop, like here we are  using placement prop  
          The String passed in over the content prop will be displayed besides the button
      */}

      <form action="">
        <label for="position" className="label">
          <h3>Choose a Position for Hover </h3>{" "}
        </label>
        <select
          className="select"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          id="position"
          name="position"
        >
          <option value="right">Right</option>
          <option value="left">Left</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </form>

      <Tippy
        placement={position}
        content="Thanks for Hovering!, I am a tooltip "
      >
        <button>Hover me</button>
      </Tippy>
    </div>
  );
}

export default App;
