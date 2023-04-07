import {useState} from 'react'
import './App.css';  
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert'
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-info");
  //   document.body.classList.remove("bg-warning");
  // }
  // const toggleMode = (cls) => {
  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';  
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert = {showAlert} heading="Enter text to analyze" mode = {mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
