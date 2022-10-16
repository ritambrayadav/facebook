import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Edit from './Edit'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons'


function Info() {
  const [mOpen, setMOpen] = useState(false)
  // const navigate = useNavigate()
  // useEffect (()=>{
  //   if(!localStorage.getItem("isLoggedIn")){
  //     navigate('/')
  //   }
  // },[])

  function logOut(){
    // window.localStorage.removeItem("Email")
    window.localStorage.removeItem("isLoggedIn")
    window.location.reload();
  }

  return (
    <div>
      <aside className='aside'>
        <h1>Intro</h1>
        <hr />
        {localStorage.getItem('Collage') ? <h4><FontAwesomeIcon icon={faGraduationCap} />studying at {JSON.parse(localStorage.getItem("Collage"))}</h4> : null}
        {localStorage.getItem('School') ? <h4><FontAwesomeIcon icon={faGraduationCap} />studied from {JSON.parse(localStorage.getItem('School'))}</h4> : null}
        {localStorage.getItem('CurrentLocation') ? <h4><FontAwesomeIcon icon={faHome} /> living at {JSON.parse(localStorage.getItem('CurrentLocation'))}</h4> : null}
        {localStorage.getItem('PermanentLocation') ? <h4><FontAwesomeIcon icon={faMapMarker} /> from {JSON.parse(localStorage.getItem('PermanentLocation'))}</h4> : null}
        <button
          onClick={() => {
            setMOpen(true);
          }}> Edit Details </button>


        <div className='log_out'>
          <button onClick={logOut}>Log Out</button>
        </div>

      </aside>
      {(mOpen) && <Edit setOpenM={setMOpen} />}

    </div>
  )
}

export default Info

