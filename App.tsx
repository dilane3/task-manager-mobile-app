import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigations'
import useCustomFonts from './utils/loadFonts';

export default function App() {
  const [fontLoaded] = useCustomFonts()

  return (
    <React.Fragment>
      {
        fontLoaded && <RootNavigator />
      }

      <StatusBar style='light' />
    </React.Fragment>
  );
}
