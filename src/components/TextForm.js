import React, {useState} from 'react';


export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("on change as clicked");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success")
    }
    
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied", "success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success")
    }

    const [text, setText] = useState('');
    return (
        <>
        <div  className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0f3f65':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lower case</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0} ).length} words {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    );
}
