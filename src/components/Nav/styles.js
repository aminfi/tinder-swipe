import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const Wrapper = styled(View)`
  background-color: ${({ theme }) => theme.palette.primary};
  padding-top: ${({ theme }) => theme.spacing * 4}px;
  padding-bottom: ${({ theme }) => theme.spacing * 2}px;
`;
const Title = styled(Text)`
  ${({ theme }) => ({ ...theme.typography.title })};
  color: white;
  margin: auto;
`;
export { Wrapper, Title };
