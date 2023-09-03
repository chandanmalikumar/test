import React ,{useState}from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import PropTypes from 'prop-types';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

  function App() {
    const[mode, setMode] = useState('light');// Whether dark mode is enabled or not
      const[alert, setAlert] = useState(null);
      const showAlert = (message,type) =>{
      setAlert({
        msg  :message,
        type :type
      })
      setTimeout(()=>{
        setAlert(null); 
      },1500
      )}
    const toggleMode = () =>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='red';
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode';
        // setInterval(() => {
        //   document.title ="TextUtils is  Amazing Mode";
             
        //   }, 2000);
        //    setInterval(() => {
        //     document.title = 'TextUtils is Amazing Mode';

        //   },1000
        //   );
        // }
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        document.title = 'TextUtils - Light Mode';
      }
    }
       return (
      <>
      <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={Alert}/>
       <div className='container my-3'> 
        <Routes>
        {/* /users---> Component-1
/users/home ---->---->-Component-2 */}
          <Route exact path="/about" element={ <About />}/>
        <Route exact path="/" 
         element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
     
        </Routes>
     </div>
   </Router>
     </>
  );
}
 
export default App;