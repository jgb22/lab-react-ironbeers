import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
      } catch (error) {
        console.error('Error random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

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
        <p>Random beer</p>
      )}
    </div>
  );
};

export default RandomBeer;
