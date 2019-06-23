import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Browse from './components/Browse';
import Cart from './components/Cart';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
import About from './components/About';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produkter" component={Browse} />
            <Route exact path="/om-oss" component={About} />
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
