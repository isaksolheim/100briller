import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className="home-container">
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1495563923587-bdc4282494d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="sykkel" />
        <div className="home-text">
          <div className="title">Norges Kuleste Solbriller</div>
          <p>
            100briller er Norges beste sted for å finne billige og kule solbriller.
          </p>
        </div>
      </div>
      <Link to="/produkter">
        <div className="browse-button">
          Se utvalg
        </div>
      </Link>
    </div>
  );
}

export default Home;