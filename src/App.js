// importing using tippy 
import Tippy from "@tippyjs/react";

// this below import is for the styling of toltip component and is optional
import "tippy.js/dist/tippy.css";


function App() {
  return (
    <div className="my-container">
      
      {/* we are using Tippy component which can pass different prop, like here we are  using placement prop  
          The String passed in over the content prop will be displayed besides the button
      */
      }
      <Tippy placement="right" content="Thanks for Hovering!, I am a tooltip ">
        <button>Hover me</button>  
      </Tippy>
    </div>
  );
}

export default App;
