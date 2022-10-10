import { Alert } from 'bootstrap'
import React, { useState } from 'react'
import './Signup.css'

function Signup({ setOpenModal }) {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (!firstname || !lastname || !email || !password || !gender) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem('FirstName', JSON.stringify(firstname));
            localStorage.setItem('LastName', JSON.stringify(lastname));
            localStorage.setItem('Email', JSON.stringify(email));
            localStorage.setItem('Password', JSON.stringify(password));
            localStorage.setItem('Gender', JSON.stringify(gender));
            localStorage.setItem('Gender', JSON.stringify(gender));
            localStorage.setItem('Day', JSON.stringify(day));
            localStorage.setItem('Month', JSON.stringify(month));
            localStorage.setItem('Year', JSON.stringify(year));

            console.log("Saved in local storage")
            setLogin(!login)
        };

        let func = () => {
            setOpenModal(false);
        }
        func();
    }


    return (
        <div className="app_signup">

            <div className='popup'>
                <form onSubmit={handleSubmit}>
                    <div className='header'>

                        <button
                            onClick={() => {
                                setOpenModal(false)
                            }}
                        >
                            X
                        </button>
                        <h1>Sign Up</h1>
                        <p>It's quick and easy</p>
                    </div>
                    <hr />
                    <div className='fullname'>
                        <input type='text' id='firstname' placeholder='First Name' onChange={(event) => setFirstname(event.target.value)} />
                        <input type='text' id='lastname' placeholder='Last name' onChange={(event) => setLastname(event.target.value)} />
                    </div>
                    <div className='add_and_pass'>
                        <input type='email' placeholder='Email address'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input type='password' placeholder='New password' onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='birth'>
                        <p>Date of birth
                            <span style={{ backgroundColor: 'grey', marginLeft: "5px", borderRadius: "50%", padding: "0px 4px", color: "white" }}>
                                ?
                            </span>
                        </p>
                        <div>
                            <select onChange={(event) => setDay(event.target.value)}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option value='17'>17</option>
                                <option value='18'>18</option>
                                <option value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>
                            <select onChange={(event) => setMonth(event.target.value)}>
                                <option value="jan">Jan</option>
                                <option value="feb">Feb</option>
                                <option value="mar">Mar</option>
                                <option value="apr">Apr</option>
                                <option value="may">May</option>
                                <option value="jun">Jun</option>
                                <option value="jul">Jul</option>
                                <option value="aug">Aug</option>
                                <option value="sep">Sep</option>
                                <option value="oct">Oct</option>
                                <option value="nov">Nov</option>
                                <option value="dec">Dec</option>
                            </select>
                            <input type='number' min='1905' max="2022" placeholder='Year' onChange={(event) => setYear(event.target.value)} />
                        </div>
                    </div>
                    <div className='gender'>
                        <p>Gender</p>
                        <div className='div'>
                            <label for='female' >Female</label>
                            <input type='radio' id='female' name='gender' value='Female' onChange={(event) => setGender(event.target.value)} />
                        </div>
                        <div className='div'>
                            <label for='male' >Male</label>
                            <input type='radio' id='male' name='gender' value='Male' onChange={(event) => setGender(event.target.value)} />
                        </div>
                        <div>
                            <label for='custom'>Custom</label>
                            <input type='radio' id='custom' name='gender' value='Custom' onChange={(event) => setGender(event.target.value)} />
                        </div>
                    </div>
                    <p>
                        By clicking Sign Up, you agree to our
                        <a href='#'> Terms </a>,
                        <a href='#'>Privacy Policy </a>
                        and
                        <a href='#'> Cookies Policy</a>.
                        You may receive SMS notifications from us and can opt out at any time.
                    </p>


                    <button type='submit'>
                        Sign Up
                    </button>

                    {flag && (
                        <Alert color="primary" varient='danger'>
                            Please Fill Every Field
                        </Alert>
                    )
                    }

                </form>
            </div>
        </div>
    );
}
export default Signup;
