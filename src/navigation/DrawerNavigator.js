import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import ApplyScreen from "../screens/JoblistScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
       <Drawer.Screen name="Home" component={StackNavigation} /> 
      <Drawer.Screen name="Apply" component={ApplyScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />

    </Drawer.Navigator> 
  );
};

export default DrawerNavigation;
