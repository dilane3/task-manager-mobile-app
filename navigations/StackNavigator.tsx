import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/home"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3e4bff",
        },
        headerTitleStyle: {
          color: "#fff"
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Tasks Manager",
          headerShadowVisible: false
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator