import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("lowercase was clicked"+ text);
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const[text,setText] = useState('');
    //  text="new text";
  return (
    <>
        <div className='container'style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className='container my-3' style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split("").length}words and {text.length}characters</p>
            <p>{0.008* text.split("").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}
