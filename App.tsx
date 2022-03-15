import 'react-native-gesture-handler';
// import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigations'
import useCustomFonts from './utils/loadFonts';
import TaskProvider from './dataManager/providers/taskProvider';
import NavigationProvider from './dataManager/providers/navigationProvider';
import BottomHalfModal from './components/navigation/bottomHalfModal';

export default function App() {
  const [fontLoaded] = useCustomFonts()

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TaskProvider>
        <NavigationProvider>
          <React.Fragment>
            {
              fontLoaded && (
                <>
                  <RootNavigator />
                  <BottomHalfModal />
                </>
              )
            }

            <StatusBar style='light' />
          </React.Fragment>
        </NavigationProvider>
      </TaskProvider>
    </GestureHandlerRootView>
  );
}

// registerRootComponent(App)
