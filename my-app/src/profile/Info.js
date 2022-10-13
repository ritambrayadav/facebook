import React, { useState } from 'react'
import Edit from './Edit'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons'


function Info() {
  const [mOpen, setMOpen] = useState(false)

  return (
    <div>
      <aside className='aside'>
        <h1>Intro</h1>
        {localStorage.getItem('Collage') ? <h4><FontAwesomeIcon icon={faGraduationCap} /> {JSON.parse(localStorage.getItem("Collage"))}</h4> :null}
        {localStorage.getItem('School') ? <h4><FontAwesomeIcon icon={faGraduationCap} /> {JSON.parse(localStorage.getItem('School'))}</h4> :null}
        {localStorage.getItem('CurrentLocation') ? <h4><FontAwesomeIcon icon={faHome} /> {JSON.parse(localStorage.getItem('CurrentLocation'))}</h4> :null}
        {localStorage.getItem('PermanentLocation') ? <h4><FontAwesomeIcon icon={faMapMarker} /> {JSON.parse(localStorage.getItem('PermanentLocation'))}</h4> :null}
        <button
        onClick={() => {
          setMOpen(true);
        }}> Edit Details </button>
      </aside>
      {(mOpen) && <Edit  setOpenM = {setMOpen}/>}
    </div>
  )
}

export default Info 

