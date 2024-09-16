import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

const App = () => (
  <PaperProvider>
    <AppNavigator />
  </PaperProvider>
);

export default App;
