import React from 'react'
function Login() {
    return (
        <div className="App">
            <div className='fb loginpage'>
                <h1>facebook</h1>
                <h4>Facebook helps you 
                    connect and share with the people in your life.</h4>
            </div>
            <div className='login loginpage'>
                <form>
                    <input type='text'/>
                    <input type='text'/>
                    <input  type='button'/>
                </form>
                <a href='#'> Forgtten Password?</a>
                <hr/>
                <button>Create New Account</button>
            </div>
        </div>
    );
}
export default Login;