import './Profile.css'
import React from 'react'
import post from '../images/post.png'
import profile from '../images/profilePhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Posts() {

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onabort = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const handlePost = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((base64) => {
            localStorage["PostImage"] = base64;
            console.debug("File Store", base64);
        });
    };




    return (
        <div className='app_post'>
            <div className='post'>
                <div className='post_profile_photo'>
                    <img alt='profile'
                        src={
                            localStorage.getItem("Image")
                                ? localStorage.getItem("Image")
                                : { profile }
                        }
                    />
                </div>
                <div className='post_details'>
                    <h3> profile name </h3>
                    <h5>Date posted</h5>
                </div>
                <div className='post_image'>
                    <img alt='post by you'
                        src={
                            localStorage.getItem("PostImage")
                                ? localStorage.getItem("PostImage")
                                : null
                        }
                    />
                </div>
                <form className='add_post'>
                    <label for='post_upload'>
                        <FontAwesomeIcon icon={faPlusCircle} /> Add Post
                    </label>
                    <input type='file' id='post_upload' onChange={handlePost}/>
                </form>
                <div className='post_caption'>
                    <p>
                        Write post Caption
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Posts;