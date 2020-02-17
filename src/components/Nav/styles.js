import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const Wrapper = styled(View)`
  background-color: ${({ theme }) => theme.palette.primary};
`;
const Title = styled(Text)`
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  padding: ${({ theme }) => theme.spacing * 2}px;
  color: white;
  margin: auto;
`;
export { Wrapper, Title };
