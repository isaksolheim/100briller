import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import Navbar from './components/Navbar';
import Browse from './components/Browse';
import Cart from './components/Cart';
import ProductView from './components/ProductView';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Browse} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/produkter/:id" component={ProductView} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
