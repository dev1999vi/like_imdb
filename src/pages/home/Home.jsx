import React from 'react';
import './Home.scss';
import HeroBanner from './hero_banner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './top_rated/TopRated';

const Home = () => {
  
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home