import React from 'react';
import { GlobalStyle } from './Styles/GoblalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { useOpenFood } from './hooks/useOpenFood';
import { Orders } from './Orders/Orders';
import { useOrders } from './hooks/useOrders';

function App() {
  const opendFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...opendFood} {...orders} />
      <Navbar />
      <Orders {...orders}></Orders>
      <Banner>
        <h2>Las comidas mas piolas del Oeste</h2>
        <p>Pedí online rápido y fácil</p>
      </Banner>
      <Menu {...opendFood} />
    </>
  );
}

export default App;
