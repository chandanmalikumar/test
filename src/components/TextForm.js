import { useState } from "react";
export default function TextForm(props){
  const[text,setText]= useState(' ');
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLolick =()=>{
 let newText = text.toLowerCase();
 setText(newText)
  }
  const handleToCleanText=()=>{
    // let newText = text.toLowerCase();
    setText(" ")
    props.showAlert("Converted to lowercase!","success");
  }
  const handleOnChange=(event)=>{
  // console.log("On change");
  setText(event.target.value);

  }
  // Credits A
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard!',"seccess");
  }
  // Credits: Coding Wala
  const handleExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
 
//  text = "new text";// Wrong way to change the state
//   setText("new text");//Correct way to change the  state
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'wthite':"black"}} id="myBox" rows="8"></textarea>
      </div>
<button  className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
<button  className="btn btn-success mx-2"onClick={handleLolick}>Convert to Lowrcase</button>
<button  className="btn btn-danger mx-2"onClick={handleToCleanText}>Clear Text</button>
<button className="btn btn-secondary mx-2"onClick={handleCopy}>Copy Text</button>
<button className="btn btn-dark mx-2"onClick={handleExtraSpaces}>Remove Extre Space</button>
<div className="contaner my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2> you text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length}Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0? text:"Enter something in the textbox above it here"}</p>

</div>
    </div>

  );
}


// import { useState } from "react";
// function TextForm(props) {
//     const handleUpClick=()=> {
//         // console.log(" Uppecase was clicked" + text);
//         // setText(" You hava clicked on handleUpClick")
//         let newText = text.toUpperCase();
//         setText(newText)
//     }
//   const handleToCleanText = ()=>{
//     let newText=text.toLowerCase();
//     setText(newText)
//   }
//   const handleLoclik = () =>{
//     let newText = text.toLowerCase();
//     setText(newText)
//   }
//     const handleOnChange = (event)=>{
//         // console.log("On change")
//         setText(event.target.value)
//     }

//     const[text,setText] = useState('Enter text here2');
//   return (
//     <>
//     <div className="container">
//         <h1>{props.heading}</h1>
//         <div className='mb=3'>
//         <textarea className='form-control' value={text}onChange={handleOnChange}id="myBox"rows="8"></textarea>
//     </div>
//     <br/>
//     <button className='btn btn-primary mx-2 'onClick={handleUpClick}>Convert to Uppecase</button>
//     <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppecase</button>
//     <button className='btn btn-primary mx-2' onClick={handleUpClick}>Clear Text</button>
//    </div>
//    <div className="container my -3">
//     <h1>Your text summary</h1>
//     <p>{text.split(" ").length} words and {text.length} characters</p>
//     <p>{0.008 * text.split(" ").length}Minutes read</p>
//     <h2>Preview</h2>
//     <p>{text}</p>
//    </div>
//    </>
//   );
// }

// export default TextForm;