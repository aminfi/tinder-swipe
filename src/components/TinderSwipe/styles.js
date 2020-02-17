import styled from 'styled-components/native';
import { Image as ReactNativeImage, Text, View } from 'react-native';

const Wrapper = styled(View)`
  height: 100%;
`;
const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background};
  justify-content: space-evenly;
`;
const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing * 2}px;
`;
const Cards = styled(View)`
  flex: 1;
  margin: 0 ${({ theme }) => theme.spacing * 2}px;
  z-index: 100;
`;
const Footer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing * 2}px;
`;

const Image = styled(ReactNativeImage)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  border-radius: ${({ theme }) => theme.spacing}px;
`;
const Overlay = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing * 2}px;
`;
const CardHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
const CardFooter = styled(View)`
  flex-direction: row;
`;
const Name = styled(Text)`
  color: white;
  font-size: 32px;
`;
const Like = styled(View)`
  border-radius: 5px;
  border: 4px solid ${({ theme }) => theme.palette.green};
  padding: ${({ theme }) => theme.spacing}px;
`;
const LikeLabel = styled(Text)`
  color: ${({ theme }) => theme.palette.green};
  font-size: ${({ theme }) => theme.typography.textLarge.fontSize};
  font-weight: bold;
`;
const Nope = styled(View)`
  border-radius: 5px;
  border: 4px solid ${({ theme }) => theme.palette.red};
  padding: ${({ theme }) => theme.spacing}px;
`;
const NopeLabel = styled(Text)`
  color: ${({ theme }) => theme.palette.red};
  font-size: ${({ theme }) => theme.typography.textLarge.fontSize};
  font-weight: bold;
`;

export {
  Wrapper,
  Cards,
  Container,
  Footer,
  Header,
  Image,
  CardFooter,
  CardHeader,
  Like,
  LikeLabel,
  Name,
  Nope,
  NopeLabel,
  Overlay,
};
