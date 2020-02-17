import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { TinderSwipe } from './src/components/TinderSwipe';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: theme.palette.primary }}>
        <TinderSwipe />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
