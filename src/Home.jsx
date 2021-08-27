import React from 'react'
import { Header } from './components/Header';
import '../src/styles/index.scss';
// import useInitialState from './hooks/useInitialState';


// https://icon-icons.com/es/icono/b%C3%BAsqueda-magnifing-de-vidrio-localizar-encontrar/108884

// const API = 'http://localhost:3000/initalState'

const Home = () => {
  // const initialState = useInitialState(API);
  // console.log("da",initialState);
  return (
    <div>
      <Header/>
      <div>
        <img className="app-contentImage" src="image.jpg" alt="image" />
      </div>
    </div>
  );
}

export default Home;
