import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

// or any files within the Snack

import Screen01 from './components/screen01';
import Screen02 from './components/screen02';
import Screen03 from './components/screen03';
import Screen04 from './components/screen04'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01"screenOptions={{
          headerStyle: {
            height: 30, // độ dài của thanh title
          },
          headerTitleStyle: {
            fontSize: 15, // cỡ chữ trong thanh title
          },
        }}> 
        <Stack.Screen name="Screen01" component={Screen01}  options={{title: 'screen1', headerShown: false }}/>
        <Stack.Screen name="Screen02" component={Screen02}  options={{title: 'screen2', headerShown: false }}/>
        <Stack.Screen name="Screen03" component={Screen03}  options={{title: 'screen3', headerShown: false }}/>
        <Stack.Screen name="Screen04" component={Screen04}  options={{title: 'screen3', headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
