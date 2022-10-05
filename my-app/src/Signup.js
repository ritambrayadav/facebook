import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <div className="App">
            <h1>Sign Up</h1>
            <h3>It's quick and easy</h3>
            <hr/>
            <form>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='password'/>
            </form>
            <h5>Date of birth</h5>
            <form>
                <input type='number' min='1' max='31'/>
                <input type='month'/>
                <input type='year'/>
            </form>
            <h5>Gender</h5>
            <form>
                <input type='radio'/>
                <input type='radio'/>
                <input type='radio'/>
            </form>
            <p>

            </p>
            <button>Sign Up</button>
        </div>
    );
}
export default Signup;