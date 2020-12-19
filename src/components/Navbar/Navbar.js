import React from 'react';
import styled from 'styled-components';
import imgLogo from '../../assets/nucbazappiintegral.png';
import { CartIcon } from '../Cart/CartIcon';
import { Link } from 'react-router-dom';
import { fixed } from '../../Styles/utilities';

const NavbarStyled = styled.div`
  padding: 10px;
  ${fixed()};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  margin: ${({ m }) => (m ? `${m}` : '0px')};
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;

const NavigationMenu = styled.div`
  display: flex;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const Navbar = ({ m }) => {
  return (
    <NavbarStyled m={m}>
      <Link to="/">
        <Logo src={imgLogo} />
      </Link>

      <NavigationMenu>
        <CartIcon />
      </NavigationMenu>
    </NavbarStyled>
  );
};
