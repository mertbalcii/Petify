import React from 'react';
import { AnimalProvider } from './src/context/AnimalContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AnimalProvider>
      <AppNavigator />
    </AnimalProvider>
  );
}
