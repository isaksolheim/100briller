import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className="home-container">
      100briller er Norges beste sted for å finne billige og kule solbriller.
      <Link to="/produkter">
        <div className="browse-button">
          Se utvalg
        </div>
      </Link>
    </div>
  );
}

export default Home;