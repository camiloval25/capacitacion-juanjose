import React from "react";
import { Provider, useSelector } from "react-redux";
import { navigationRef } from "./RootNavigator";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "../store";

import ModalWrapper from "../modals/ModalWrapper";

import Walkthrough from "../screens/Walkthrough";
import SignIn from "../screens/SignIn";
import Dashboard from "../screens/Dashboard";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Stack = createStackNavigator();

const AppNavigation = () => {

  return (
    <Provider store={store}>
      <ModalWrapper loading={loading} error={error} />
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigation;
