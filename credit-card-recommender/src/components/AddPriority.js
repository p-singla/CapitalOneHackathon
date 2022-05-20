import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddPriority.css'

const AddPriority = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const genreHandler = (event) => {
        setGenre(event.target.value);
    }

    const imageHandler = (event) => {
        setImage(event.target.value);
    }

    const addPriorityHandler = (event) => {
        const newPriority = {
            name: name,
            genre: genre,
            img: image
        }
        fetch('http://localhost:8080/api/movies', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPriority)
        }).then(navigate("../", ({replace: true})))
    }


    return (
        <div className="form">
            <h1 className="title">Add Movie</h1>
            <label>Movie Title</label>
            <input onChange={nameHandler}></input>
            <label>Genre</label>
            <input onChange={genreHandler}></input>
            <label>Image</label>
            <input onChange={imageHandler}></input>
            <button onClick={addPriorityHandler}>Add Movie</button>
        </div>
    )
}

export default AddPriority