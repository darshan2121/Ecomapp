import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/index'; // Adjust the path as necessary

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
