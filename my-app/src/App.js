 import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"
import Login from './login';
import Signup from './Signup';
import Cover from './profile/Cover.js'
import Posts from './profile/Posts.js'
import Edit from './profile/Info.js'
import Header from './profile/Header';
import Info from './profile/Info.js';
import View from './profile/View';
import Blogs from './Blogs';
function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
  console.log(loggedIn, "Login")
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <Cover /> */}
      {/* <Posts /> */}
      {/* <Edit /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ loggedIn ? <Cover/> : <Login />}/>
        {/* <Route path='blogs' element={<Blogs />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='cover' element={<Cover />} /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
