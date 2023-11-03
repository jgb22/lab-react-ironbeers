import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AllBeers = () => {
    const [beers, setBeers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBeers = async () => {
          try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');;
            setBeers(response.data);
          } catch (error) {
            console.error('Error', error);
          }
        };
    
        fetchBeers();
      }, []);


      const handleBeerClick = (beerId) => {
        navigate(`/beers/${beerId}`);
      };
      
      return (
        <div>
        <h1>All Beers</h1>
        <ul>
          {beers.map((beer) => (
            <li key={beer._id} onClick={() => handleBeerClick(beer._id)}>
              <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
              <p>Name: {beer.name}</p>
              <p>Tagline: {beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
              <a href={`/beers/${beer._id}`}>Check Details</a>
            </li>
          ))}
        </ul>
      </div>
      )
          }

       
   export default AllBeers