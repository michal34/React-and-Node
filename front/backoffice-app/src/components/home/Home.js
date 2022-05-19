import React from 'react';
import './Home.scss';
import Header from '../header';
import Menu from '../menu';

const Home = () => {

  return (
    <div className="home-container">
        <Header></Header>
        <Menu></Menu>
        <div className="content">
          <h1>Zaprojektowane przez: </h1>
          <p>Aplikacja do tworzenia planu zajęć</p>
        </div>
    </div>
  );
};

export default Home;
