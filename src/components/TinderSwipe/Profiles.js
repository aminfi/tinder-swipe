import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Profile from './Profile';
import { Cards, Container, Footer, Header } from './styles';

const Profiles = ({ profiles }) => {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];
  return (
    <Container>
      <Header>
        <Icon name="user" size={32} color="gray" />
        <Icon name="message-circle" size={32} color="gray" />
      </Header>
      <Cards>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <Profile {...{ profile }} />
        </View>
      </Cards>
      <Footer />
    </Container>
  );
};
export default Profiles;
