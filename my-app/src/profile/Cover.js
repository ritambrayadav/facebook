import './Profile.css'
import React from 'react'
import Header from './Header';
import Posts from './Posts';
import cover from '../images/coverPhoto.jpg'
import profile from '../images/profilePhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencil, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Cover() {
    return (
        <>
            <Header />
            <div className='cover'>
                <div className='coverphoto'>
                    <img alt='cover' src={cover} />
                    <form>
                        <button type='submit'><FontAwesomeIcon icon={faCamera} /> Edit Cover Photo</button>
                    </form>
                </div>
                <div className='profileDetail'>
                    <div className='profilePhoto'>
                        <img alt='profile' src={profile} />
                    </div>
                    <div className='profile_edit'>
                        <form>
                            <button type='submit'><FontAwesomeIcon icon={faCamera} /></button>
                        </form>
                    </div>
                    <div className='profileName'>
                        <h3>Ritambra yadav</h3>
                        <h6>1000 friends</h6>
                    </div>
                    <div className='editButton'>
                        <form>
                            <button type='submit'><FontAwesomeIcon icon={faPlusCircle} /> Add Story</button>
                            <button type='submit'><FontAwesomeIcon icon={faPencil} /> Edit Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        <Posts/>
        </>
    )
}

export default Cover;