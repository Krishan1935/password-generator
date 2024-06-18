

import React, { useState } from 'react'

const Generatepass = (props) => {
    const [length, setLength] = useState(8);
    function sliderHandler(e) {
        setLength(e.target.value);
    }

    // checkbox handlers
    const [checks, setChecks] = useState({
        "capital": false,
        "numbers": false,
        "special": false
    });
    function checkHandler(e) {
        let {name, checked} = e.target;
        setChecks(prevChecks => ({
            ...prevChecks,
            [name]: checked
        }));
    }

    // generate password 
    function generatePassword() {
        let small = "abcdefghijklmnopqrstuvwxyz";
        let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let nums = "0123456789";
        let special = "!@#$%^&*()_+<>?;{}[]";

        let charpool = small;
        if (checks.capital) {
            charpool+= caps;
        } 
        if (checks.numbers) {
            charpool+= nums;
        }
        if (checks.special) {
            charpool += special;
        }

        let password = '';
        for(let i = 0; i < length; i++) {
            password += charpool.charAt(Math.floor(Math.random() * charpool.length));
        }
        props.setPassword(password);
    }


  return (
    <div>
        {/* length password */}
        <div>
            <input onChange={sliderHandler} type="range" name="length" max="20" min="8" defaultValue="8" />
            <p> {length} </p>
        </div>

        {/* check boxes */}
        <div>
            <div>
                <input onChange={checkHandler} type="checkbox" name="capital" id="" />
                <label htmlFor="capital">Include Capital Letters</label>
            </div>
            <div>
                <input onChange={checkHandler} type="checkbox" name="numbers" id="" />
                <label htmlFor="numbers">Include Numbers </label>
            </div>
            <div>
                <input onChange={checkHandler} type="checkbox" name="special"/>
                <label htmlFor="special">Include Special Characters </label>
            </div>
        </div>
        {/* strength */}
        <div>
            <p>Strength: </p>
            <div></div>
        </div>

        {/* generate button */}
        <button onClick={generatePassword}>
            Generate Password
        </button>
    </div>
  )
}

export default Generatepass;

