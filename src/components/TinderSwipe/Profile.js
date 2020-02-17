import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CardFooter,
  CardHeader,
  Image,
  Like,
  LikeLabel,
  Name,
  Nope,
  NopeLabel,
  Overlay,
} from './styles';

const Profile = ({ profile, likeOpacity = 0, nopeOpacity = 0 }) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Image source={profile.profile} />
      <Overlay>
        <CardHeader>
          <Like style={{ opacity: likeOpacity }}>
            <LikeLabel>LIKE</LikeLabel>
          </Like>
          <Nope style={{ opacity: nopeOpacity }}>
            <NopeLabel>NOPE</NopeLabel>
          </Nope>
        </CardHeader>
        <CardFooter>
          <Name>{profile.name}</Name>
        </CardFooter>
      </Overlay>
    </View>
  );
};
export default Profile;
