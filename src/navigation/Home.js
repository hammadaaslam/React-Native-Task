import React from "react";
import Myshifts from "../screens/Myshifts";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Availableshifts from '../screens/Availableshifts'

import Tampere from'../screens/Tampere'
import Turku from "../screens/Turku";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
      <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name={"Myshifts"} component={Myshifts} />
      <Stack.Screen name={"Availableshifts"} component={Availableshifts} />
      
      
      <Stack.Screen name={"Tampere"} component={Tampere} />
      <Stack.Screen name={"Turku"} component={Turku} />
      
      

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
