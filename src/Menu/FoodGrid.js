import styled from 'styled-components';
import { Title } from '../Styles/Title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
  font-size: 15px;
`;

export const Food = styled.div`
  height: 100px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
`;
