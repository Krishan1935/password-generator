import Passinput from "./components/Passinput";
import Generatepass from "./components/Generatepass";
import { useState } from "react";

function App() {
    const [password, setPassword] = useState('');
  return (
    <div>
        <div>
            <Passinput password={password} setPassword={setPassword} ></Passinput>
            <Generatepass setPassword={setPassword}></Generatepass>
        </div>
    </div>
  );
}

export default App;
