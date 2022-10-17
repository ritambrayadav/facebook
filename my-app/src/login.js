import { Alert } from 'bootstrap'
import { useState } from 'react';
import './login.css'
import Signup from './Signup';
import Cover from './profile/Cover';



function Login() {
    const [emaillog, setEmaillog] = useState("")
    const [passwordlog, setPasswordlog] = useState("")
    const [flag, setFlag] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [cover, setCover] = useState(true)


    function handleLogin(e) {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        
        window.localStorage.setItem("isLoggedIn",true)
        
        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("Empty");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true)
        } else {
            setCover(!cover);
            setFlag(false)
        }
    }
    return (
        <div className="app_login">

            {
                cover ? (
            <div className='login_container'>
                <div className='fb loginpage'>
                    <h1>facebook</h1>
                    <h4>Facebook helps you
                        connect and share with the people in your life.</h4>
                </div>
                <div className='loginpage'>
                    <div className='login'>

                        <form className='login_form' onSubmit={handleLogin}>
                            <input type='email'
                                placeholder='Email address'
                                onChange={(event) => setEmaillog(event.target.value)}
                            />

                            <input type='password'
                                placeholder='Password'
                                onChange={(event) => setPasswordlog(event.target.value)}
                            />
                            <br />
                            <button type='submit'> Log in</button>

                            {flag && (
                                <Alert color="primary" varient='danger'>
                                    Please Fill Correct Information
                                </Alert>
                            )
                            }
                        </form>
                        <a href='#'> Forgotten Password?</a>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <button onClick={() => {
                            setModalOpen(true);
                        }}>
                            Create New Account
                        </button>
                    </div>
                    <p><a href='#'>Create a Page</a> for a celebrity, brand or business.</p>
                </div>
                {(modalOpen) && <Signup setOpenModal={setModalOpen} />}
            </div>
            ) : <Cover />}
        </div>
    );
}
export default Login;