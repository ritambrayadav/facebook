import './Profile.css'
import React from 'react'
// import cover from '../images/coverPhoto.jpg'
// import profile from '../images/profilePhoto.jpg'

function Cover() {
    return (
        <div className='cover'>
            <div className='coverphoto'>
                
            </div>
            <div className='profileDetail'>
                <div className='profilePhoto'>

                </div>
                <div className='profileName'>
                    <h2>Ritambra yadav</h2>
                    <h6>1000 friends</h6>
                </div>
                <div className='editButton'>
                    <button>Add Story</button>
                    <button>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Cover;