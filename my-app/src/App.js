import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './login';
import Signup from './Signup';
import Cover from './profile/Cover.js'
import Posts from './profile/Posts.js'
import Edit from './profile/Info.js'
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signup/> */}
      <Cover />
      {/* <Posts /> */}
      {/* <Edit /> */}
    </div>
  );
}

export default App;
