import React, { useState } from 'react';
import axios from 'axios';

const NewBeer = () => {
    const [formData, setFormData] = useState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    });


// Missing here the function that will call Axios to create New beer in the DB


    return (
        <div>
          <h2>Create a New Beer</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="text" name="tagline" placeholder="Tagline" onChange={handleInputChange} />
            <textarea name="description" placeholder="Description" onChange={handleInputChange} />
            <input type="text" name="first_brewed" placeholder="First Brewed" onChange={handleInputChange} />
            <input type="text" name="brewers_tips" placeholder="Brewers Tips" onChange={handleInputChange} />
            <input type="number" name="attenuation_level" placeholder="Attenuation Level" onChange={handleInputChange} />
            <input type="text" name="contributed_by" placeholder="Contributed by" onChange={handleInputChange} />
            <button type="submit">Create Beer</button>
          </form>
        </div>
      );
    };
    
    export default NewBeer;