import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Norges feteste briller</h1>
          <p className="lead font-weight-normal">Vi jobber hardt for å selge de kuleste brillene for de laveste prisene.</p>
          <Link to="/produkter" className="btn btn-outline-secondary" href="#">Se utvalg</Link>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

      <div className="container marketing">
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Elegante <span className="text-muted">raske briller</span></h2>
            <p className="lead">
              Man kan gjøre mye med noen raske briller. Ski, sykkel og løping er bare noen eksempler. Med høy
              kvalitet og kjente merker kan vi forsikre deg om at du blir førnøyd!
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src={'./images/item1.jpg'} alt="briller" />
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Start sommeren riktig. <span className="text-muted">Prøv noen raske briller.</span></h2>
            <p className="lead">
              Med 14 dagers åpent kjøp kan du få byttet brillene hvis du ikke er fornøyd, helt uten ekstra kostnader.
              Alle brille er EU-godkjent og kommer med UV400-beskyttelse, perfekt for varme og solfyllte sommerdager</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" src={'./images/item6.jpg'} alt="briller" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;