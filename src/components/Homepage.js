import React from 'react';

const Homepage = ({ handleNavigation }) => {
    return (
        <div>
          <h1>Welcome to IronBeers!</h1>
          <nav>
            <ul>
              <li>
                <a href="/beers">All Beers</a>
              </li>
              <li>
                <a href="/random-beer">Random Beer</a>
              </li>
              <li>
                <a href="/new-beer">New Beer</a>
              </li>
            </ul>
          </nav>
        </div>
      );
    };

export default Homepage;
