import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { TinderSwipe } from './src/components/TinderSwipe';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.palette.primary }}>
        <TinderSwipe />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
