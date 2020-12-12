import React from 'react';
import styled from 'styled-components';

import { FoodGrid, FoodLabel, Food } from './FoodGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
  z-index: 3;
`;

export const Menu = () => {
  return <MenuStyled></MenuStyled>;
};
