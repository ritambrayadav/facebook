import React from 'react'
import './login.css'
function Login() {
    return (
        <div className="App">
            <div className='ritu'>
            <div className='fb loginpage'>
                <h1>facebook</h1>
                <h4>Facebook helps you
                    connect and share with the people in your life.</h4>
            </div>
            <div className='loginpage'>
            <div className='login'>
                <form>
                    <input type='text' placeholder='Email address or phone number' />
                    <input type='password' placeholder='Password' />
                    <br />
                    <input type='button' value='Log in' />
                </form>
                <a href='#'> Forgtten Password?</a>
                <br/>
                <br/>
                <hr />
                <br/>
                <button>Create New Account</button>
                </div>
                <p><a href='#'>Create a Page</a> for a celebrity, brand or business.</p>
            </div>
            </div>
        </div>
    );
}
export default Login;