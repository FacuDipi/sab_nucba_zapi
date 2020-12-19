import React, { useState } from 'react';
import styled from 'styled-components';

import { FoodGrid, FoodLabel, Food } from './FoodGrid';
import { TagCard, TagMenu, TagImg } from './TagsMenu';

import { formatPrice } from '../../utils/formatPrice';

import { useSelector } from 'react-redux';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 50px 20px;
  z-index: 3;
`;

export const Menu = ({ setOpenFood }) => {
  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector((state) => state.categories.categories);
  const [section, setSection] = useState(null);
  if (section) {
    Foods = { [section]: Foods[section] };
  }

  return (
    <MenuStyled>
      <h1>Menu</h1>
      <TagMenu>
        {section && (
          <TagCard onClick={() => setSection(null)}>
            <p>TODOS</p>
          </TagCard>
        )}
        {categories.map((category) => (
          <TagCard
            onClick={() => setSection(category.section)}
            selected={category.section === section}
          >
            <TagImg img={category.imgTag} />
            <p>{category.section}</p>
          </TagCard>
        ))}
      </TagMenu>
      {Object.entries(Foods).map(([sectionName, arrayFoods]) => (
        <>
          <h3>{sectionName}</h3>
          <FoodGrid>
            {arrayFoods.map((food) => (
              <Food img={food.img} onClick={() => setOpenFood(food)}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};
