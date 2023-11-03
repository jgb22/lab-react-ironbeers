import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SingleBeer = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeer(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBeer();
  }, [beerId]);

  return (
    <div>
      {beer ? (
        <div>
          <img src={beer.image_url} alt={beer.name} style={{ height: '200px' }} />
          <p>Name: {beer.name}</p>
          <p>Tagline: {beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBeer;
