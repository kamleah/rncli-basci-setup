import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './src/routes/BottomTab/BottomTab';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTab /> */}
      <Drawer.Navigator screenOptions={{ headerShown: false, drawerStyle:{width:'70%'}, drawerType: 'back'}}>
        <Drawer.Screen name="GraphQL" component={BottomTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})