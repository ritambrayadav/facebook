import './Profile.css'
import React, { useState } from 'react'
import Header from './Header';
import Posts from './Posts';
import Info from './Info';
import cover from '../images/coverPhoto.jpg'
import profile from '../images/profilePhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencil, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Cover() {
    const cover_photo = `${cover}`
    const profile_photo = `${profile}`
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onabort = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((base64) => {
            localStorage["Image"] = base64;
            console.debug("File Store", base64);
        });
    };
    const handleProfileImage = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((base64) => {
            localStorage["ProfileImage"] = base64;
            console.debug("File Store", base64);
        });
    };
    return (
        <>
            <Header />
            <div className='cover'>
                <div className='coverphoto'>
                    <img alt='cover'
                        src={
                            localStorage.getItem("ProfileImage")
                                ? localStorage.getItem("ProfileImage")
                                : cover_photo
                        } />
                    <form>
                        <label for='profile_upload'>
                            <FontAwesomeIcon icon={faCamera} /> Edit cover photo
                        </label>
                        <input type='file' id='profile_upload' onChange={handleProfileImage} />
                    </form>
                </div>


                <div className='profileDetail'>
                    <div className='profilePhoto'>
                        <img alt='profile'
                            src={
                                localStorage.getItem("Image")
                                    ? localStorage.getItem("Image")
                                    : profile_photo
                            } />
                    </div>
                    <div className='profile_edit'>
                        <form>
                            <label for='image_upload'>
                                <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <input type='file' id='image_upload' onChange={handleImage} />
                        </form>
                    </div>
                    <div className='profileName'>
                        {
                            ((localStorage.getItem("FirstName")) || (localStorage.getItem("LastName")))
                                ? <h3> {JSON.parse(localStorage.getItem("FirstName"))} {JSON.parse(localStorage.getItem("LastName"))}</h3>
                                : (localStorage.getItem("FirstName"))
                                    ? <h3>{JSON.parse(localStorage.getItem("FirstName"))}</h3>
                                    : <h3>User Name</h3>
                        }
                    </div>
                    <div className='editButton'>
                        <form>
                            <button type='submit'><FontAwesomeIcon icon={faPlusCircle} /> Add Story</button>
                            {/* <button type='submit'><FontAwesomeIcon icon={faPencil} /> Edit Profile</button> */}
                        </form>
                    </div>
                </div>
            </div>

            <Posts />
            <Info />

        </>
    )
}

export default Cover;