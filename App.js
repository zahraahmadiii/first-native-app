import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screens/login';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <StatusBar hidden/>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login}  options={{ headerShown: false }}  />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


