import React, { useState } from 'react'

function Edit({ setOpenM }) {
    const [collage, setCollage] = useState("")
    const [school, setSchool] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")
    const [permanentLocation, setPermanentLocation] = useState("")
    const [flag, setFlag] = useState(false)
    const [edit, setEdit] = useState(true)


    function handleEdit(e) {
        e.preventDefault();
        // if (!collage || !school || !currentLocation || !permanentLocation) {
        //     setFlag(true);
        // } else {
            // setFlag(false);
            localStorage.setItem('Collage', JSON.stringify(collage));
            localStorage.setItem('School', JSON.stringify(school));
            localStorage.setItem('CurrentLocation', JSON.stringify(currentLocation));
            localStorage.setItem('PermanentLocation', JSON.stringify(permanentLocation));

            console.log("Saved in local storage")
            setEdit(!edit)
        // };
        let func = () => {
            setOpenM(false);
        }
        func();
    }

    return (
        <div className='edit'>
            <form onSubmit={handleEdit}>
                <button className='cross_button'
                    onClick={() => {
                        setOpenM(false);
                    }} > X </button>
                <input type='text' placeholder='collage name' onChange={(event) => setCollage(event.target.value)} />
                <input type='text' placeholder='school name' onChange={(event) => setSchool(event.target.value)} />
                <input type='text' placeholder='current location' onChange={(event) => setCurrentLocation(event.target.value)} />
                <input type='text' placeholder='permanent loation' onChange={(event) => setPermanentLocation(event.target.value)} />
                <button type='submit'> Save Details </button>
            </form>
        </div>
    )
}


export default Edit
