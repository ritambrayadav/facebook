import './Profile.css'
import View from './View'
import React from 'react'
import post from '../images/post.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Posts() {


    var imagesObject = [];

    function handleFileSelect(evt) {
        var files = evt.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                addImage(e.target.result);
            };
            reader.readAsDataURL(f);
        }

        loadFromLocalStorage();
    }

    function loadFromLocalStorage() {
        var images = JSON.parse(localStorage.getItem("images"))
        if (images && images.length > 0) {
            imagesObject = images;
        }
    }

    function addImage(imgData) {
        imagesObject.push(imgData);
        localStorage.setItem("images", JSON.stringify(imagesObject));
    }

    const getDatafromLS = () => {
        const data = localStorage.getItem('images');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return []
        }
    }


    return (
        <div className='app_post'>
            <div className='post'>
                <form className='add_post'>
                    <label for='post_upload'>
                        <FontAwesomeIcon icon={faPlusCircle} /> Add Post
                    </label>
                    <input type='file' id='post_upload' onChange={handleFileSelect} />
                </form>


                {/* <div className='post_profile_photo'>
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
                </div> */}


                <div className='post_image'>
                    {
                        localStorage.getItem('images')
                            ? <View getData={getDatafromLS()} />
                            : <img id='default_post' alt="default post" src={post} />
                    }
                </div>

                {/* <div className='post_caption'>
                    <p>
                        Write post Caption
                    </p>
                </div> */}

            </div>
        </div>
    )
}

export default Posts;








