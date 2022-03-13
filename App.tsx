import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigations'
import useCustomFonts from './utils/loadFonts';
import TaskProvider from './dataManager/providers/taskProvider';

export default function App() {
  const [fontLoaded] = useCustomFonts()

  return (
    <TaskProvider>
      <React.Fragment>
        {
          fontLoaded && <RootNavigator />
        }

        <StatusBar style='light' />
      </React.Fragment>
    </TaskProvider>
  );
}
