import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigator from './navigations'
import useCustomFonts from './utils/loadFonts';

export default function App() {
  useCustomFonts()

  return (
    <React.Fragment>
      <RootNavigator />

      <StatusBar style='light' />
    </React.Fragment>
  );
}
