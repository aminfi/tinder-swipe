import styled from 'styled-components/native';
import { View } from 'react-native';

const Wrapper = styled(View)`
  background-color: white;
  padding: ${({ theme }) => theme.spacing * 2}px;
`;

export { Wrapper };
