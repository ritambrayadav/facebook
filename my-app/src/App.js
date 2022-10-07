import './App.css';
import Login from './login';
import Signup from './Signup';
import Header from './profile/Header.js'
import Cover from './profile/Cover.js'
import Posts from './profile/Posts.js'
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signup/> */}
      <Header/>
      <Cover />
      <Posts />
    </div>
  );
}

export default App;
