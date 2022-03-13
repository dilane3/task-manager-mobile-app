import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigator from './navigations'

export default function App() {
  return (
    <React.Fragment>
      <RootNavigator />

      <StatusBar style='light' />
    </React.Fragment>
  );
}
