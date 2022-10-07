import './Profile.css'
import React from 'react'
import facebook from '../images/Facebook.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faComments , faBell } from '@fortawesome/free-solid-svg-icons'
import { faVideoCamera , faUsers , faBars } from '@fortawesome/free-solid-svg-icons'




function Header() {
    return (
        <div className='App'>
            <div className='header'>
                <div className='left_header'>
                    <img alt='facebook logo' src={facebook} />
                    <form>
                        <input type='search' placeholder='Search Facebook' />
                    </form>
                </div>
                <div className='central_header'>
                    <a><FontAwesomeIcon icon={faHome} /></a>
                    <a><FontAwesomeIcon icon={faVideoCamera} /></a>
                    <a><FontAwesomeIcon icon={faUsers} /></a>
                </div>
                <div className='right_header'>
                    <a><FontAwesomeIcon icon={faBars} /></a>
                    <a><FontAwesomeIcon icon={faComments} /></a>
                    <a><FontAwesomeIcon icon={faBell} /></a>
                    <a>Profile logo</a>
                </div>
            </div>
        </div>
    )
}
export default Header;