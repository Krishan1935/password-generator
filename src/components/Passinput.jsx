import { FaRegCopy } from "react-icons/fa";
import React from 'react'
import Font from "react-font";

const Passinput = (props) => {
    function copyHandler() {
        navigator.clipboard.writeText(props.password);
        props.setPassword('')
    }

  return (
    <div className="flex items-center justify-center gap-2">
        <Font family="Mukta">
            <input 
            className="outline-none py-1 px-2 rounded-md text-lg font-semibold"
            value={props.password} type="text" readOnly placeholder='Generate password..'/>
        </Font>
        <button 
        className="flex justify-center items-center p-2 text-white text-xl bg-purple-500 rounded-md"
        onClick={copyHandler}>
            <FaRegCopy /> 
        </button>
    </div>
  )
}

export default Passinput