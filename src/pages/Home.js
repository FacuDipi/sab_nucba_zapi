import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { FoodDialog } from '../components/FoodDialog/FoodDialog';

const Home = ({ opendFood }) => {
  return (
    <>
      <FoodDialog {...opendFood} />
      <Banner>
        <h2>Las comidas mas piolas del Oeste</h2>
        <p>Pedí online rápido y fácil</p>
      </Banner>
      <Menu {...opendFood} />
    </>
  );
};

export default Home;
