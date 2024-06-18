
import Font from 'react-font';
import React, { useState } from 'react'

const Generatepass = (props) => {
    const [length, setLength] = useState(8);
    const [strength, setStr] = useState("bg-red-500");
    function sliderHandler(e) {
        setLength(e.target.value);
        if (length < 12) {
            setStr("bg-red-500")
        } else if (length > 12 && length < 16) {
            setStr("bg-yellow-500")
        } else if(length > 16) {
            setStr("bg-green-500")
        }
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
    <div className='w-full flex flex-col justify-center items-center gap-2 mt-4 mb-3 text-white'>
        {/* length password */}
        <div className='w-full flex gap-3'>
            <input 
            className='w-full'
            onChange={sliderHandler} type="range" name="length" max="20" min="8" defaultValue="8" />
            <Font family='Mukta'>
                <p className='text-lg'> {length} </p>
            </Font>
        </div>

        {/* check boxes */}
        <div className='flex flex-col justify-start w-full gap-[0.2rem] items-start'>
            <div className='flex gap-1 items-center justify-center'>
                <input onChange={checkHandler} type="checkbox" name="capital" id="" />
                <label className='text-lg' htmlFor="capital"><Font family='Mukta'>Include Capital Letters</Font></label>
            </div>
            <div className='flex gap-1 items-center justify-center'>
                <input onChange={checkHandler} type="checkbox" name="numbers" id="" />
                <label className='text-lg' htmlFor="numbers"><Font family='Mukta'>Include Numbers</Font> </label>
            </div>
            <div className='flex gap-1 items-center justify-center'>
                <input onChange={checkHandler} type="checkbox" name="special"/>
                <label className='text-lg' htmlFor="special"><Font family='Mukta'>Include Special Characters</Font> </label>
            </div>
        </div>
        {/* strength */}
        <div className='flex justify-between items-center w-full'>
            <p className='font-bold text-xl'><Font family='Mukta'>Strength</Font></p>
            <div 
            className={`w-5 h-5 rounded-full ${strength} shadow`}></div>
        </div>

        {/* generate button */}
        <button 
        className='font-bold text-xl my-1 bg-indigo-600 w-full py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200'
        onClick={generatePassword}>
            <Font family='Mukta'>Generate Password</Font>
        </button>
    </div>
  )
}

export default Generatepass;

