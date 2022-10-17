 import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './login';
import Cover from './profile/Cover.js'
function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
  console.log(loggedIn, "Login")
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ loggedIn ? <Cover/> : <Login />}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
