import './Profile.css'
import React from 'react'
import post from '../images/post.png'
import profile from '../images/profilePhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Posts() {
    return (
        <div className='app_post'>
            <div className='post'>
                <div className='post_profile_photo'>
                    <img alt='profile' src={profile} />
                </div>
                <div className='post_details'>
                    <h3> profile name </h3>
                    <h5>Date posted</h5>
                </div>
                <div className='post_image'>
                    <img alt='post by you' src={post} />
                </div>
                <form className='add_post'>
                    <button type='submit'><FontAwesomeIcon icon={faPlusCircle} />  Add Post</button>
                </form>
                <div className='post_caption'>
                    <p>
                        {/* Write post Caption */}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Posts;