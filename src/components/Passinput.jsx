import { FaRegCopy } from "react-icons/fa";
import React from 'react'

const Passinput = (props) => {
    function copyHandler() {
        navigator.clipboard.writeText(props.password);
        props.setPassword('')
    }

  return (
    <div>
        <input value={props.password} type="text" readOnly placeholder='Generate password..'/>
        <button onClick={copyHandler}>
            Copy <FaRegCopy /> 
        </button>
    </div>
  )
}

export default Passinput