import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { currCards } from '../data/data';
import { cashbackCards } from '../data/data';
import { milesCards } from '../data/data';
import { pointsCards } from '../data/data';
import './AddCard.css'

const AddCard = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('')
    // const [genre, setGenre] = useState('')
    // const [image, setImage] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    // const genreHandler = (event) => {
    //     setGenre(event.target.value);
    // }

    // const imageHandler = (event) => {
    //     setImage(event.target.value);
    // }

    const addCardHandler = (event) => {
        // const newCard = {
        //     name: name,
        //     genre: genre,
        //     img: image
        // }

        cashbackCards.forEach(cashbackCard => {
            var x = cashbackCard.name;
            if (x == name){
                currCards.push(cashbackCard)
                console.log(x)
            }
        });

        milesCards.forEach(milesCard => {
            var x = milesCard.name;
            if (x == name){
                currCards.push(milesCard)
                console.log(x)
            }
        });

        pointsCards.forEach(pointsCard => {
            var x = pointsCard.name;
            if (x == name){
                currCards.push(pointsCard)
                console.log(x)
            }
        });



        // fetch('http://localhost:8080/api/movies', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newCard)
        // }).then(navigate("../", ({replace: true})))
    }


    return (
        <div className="form">
            <h1 className="title">Add Card</h1>
            <label>Card Title</label>
            <input onChange={nameHandler}></input>
            {/* <label>Genre</label>
            <input onChange={genreHandler}></input>
            <label>Image</label>
            <input onChange={imageHandler}></input> */}
            <button onClick={addCardHandler}>Add Card</button>
        </div>
    )
}

export default AddCard
 