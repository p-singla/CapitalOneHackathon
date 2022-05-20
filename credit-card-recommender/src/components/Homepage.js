import {useEffect, useState} from 'react'
import Movie from './Card'
import './Homepage.css'
import { Link } from "react-router-dom";

const Catalog = () => {
    const [data, setData] = useState([]);
    /*useEffect(() => {
        fetch('http://localhost:8080/api/movies')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])*/
    return (
      <div>
        <h1 className="title">Welcome to Reward Yourself!</h1>
        
        
        <p className="home-description-1">
          We're here to help make your credit work for you.
        </p>
        <p className="home-description-1">
          Based on your priorities we'll help choose the right credit card for
          you to maximize your rewards as you shop online.
        </p>
        <h1 className="title">What would you like to do today?</h1>

        <Link to={"/AddCard"}>
          <input type="submit" value="Add Card" />
        </Link>
        <Link to={"/AddPriority"}>
          <input type="submit" value="Choose Priority" />
        </Link>
        <Link to={"/ShowSuggestion"}>
          <input type="submit" value="Show Card Recommendations" />
        </Link>
        <Link to={"/Card"}>
          <input type="submit" value="Go To My Dashboard" />
        </Link>
      </div>
    );
}

export default Catalog
