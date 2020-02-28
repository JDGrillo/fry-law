import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      {/* <Route exact path="/" component={ Home }/>
      <Route exact path="/feed" component={ Feed }/>
      <Route exact path="/faq" component={ FAQ }/> */}
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
