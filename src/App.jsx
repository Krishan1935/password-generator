import Passinput from "./components/Passinput";
import Generatepass from "./components/Generatepass";
import { useState } from "react";


function App() {
    const [password, setPassword] = useState('');
  return (
    <div className="w-full h-[100vh] bg-gray-700 flex justify-center items-center">
        <div className="bg-purple-800 w-fit p-4 rounded-lg flex flex-col justify-center items-center">
            <Passinput password={password} setPassword={setPassword} ></Passinput>
            <Generatepass setPassword={setPassword}></Generatepass>
        </div>
    </div>
  );
}

export default App;
