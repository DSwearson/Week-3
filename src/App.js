import {useEffect, useState} from 'react'
import Login from './components/Login';
import Home from './components/Home';
import "./styles/app.css"

function App() {
  const [screen, setScreen] = useState("home");


  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Week 2";
  }, []);


  return (
    <div className="App">
      { screen == "home" ? <Home setScreen={setScreen} /> : ""}

      { screen == "login" ? <Login setScreen={setScreen} /> : ""}

 
      

    </div>
  );
}

export default App;
