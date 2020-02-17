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

const Profile = ({ profile }) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Image source={profile.profile} />
      <Overlay>
        <CardHeader>
          <Like>
            <LikeLabel>LIKE</LikeLabel>
          </Like>
          <Nope>
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
