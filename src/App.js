import React, {useState} from "react";
import { Popup } from "./components/tutorials/poup/poup";

const App = () => {
  const [open, setOpen] = useState(false);

  return(
    <div>
      <button onClick={() => setOpen(true)}> Open popup</button>
      {open? <Popup text="Hello" closePoup={()=>setOpen(false)}></Popup>:null}
    </div>
  );
}

export default App;
