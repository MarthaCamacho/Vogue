import React from 'react'
import { Header } from './components/Header';
import '../src/styles/index.scss';
import useInitialState from './hooks/useInitialState';
import { ProductBlock } from './components/ProductBlock';
import { Section } from './components/Section';
import {TrendingItems} from './components/TrendingItems'

const API = 'http://localhost:3001/exampleApi/'

const Home = () => {
  const initialState = useInitialState(API);
  console.log("Esta mierda",initialState)
  return (
    <div>
      <Header />
      <div className="app">
        <img className="app-contentImage" src="image.jpg" alt="image" />
      </div>
      <Section/>
      <TrendingItems/>
      <ProductBlock {...initialState}/>
    </div>
  );
}

export default Home;
