import React from 'react';

import { Nav } from '../Nav';
import { Wrapper } from './styles';
import Profiles from './Profiles';

export const profiles = [
  {
    id: '1',
    name: 'Caroline',
    age: 24,
    profile: require('../../assets/profiles/1.jpg'),
  },
  {
    id: '2',
    name: 'Jack',
    age: 30,
    profile: require('../../assets/profiles/2.jpg'),
  },
  {
    id: '3',
    name: 'Anet',
    age: 21,
    profile: require('../../assets/profiles/3.jpg'),
  },
  {
    id: '4',
    name: 'John',
    age: 28,
    profile: require('../../assets/profiles/4.jpg'),
  },
];

const TinderSwipe = () => {
  return (
    <Wrapper>
      <Nav title="Tinder Swipe" />
      <Profiles {...{ profiles }} />
    </Wrapper>
  );
};

export default TinderSwipe;
