import React from 'react';
import { Title, Wrapper } from './styles';

const Nav = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Nav;
