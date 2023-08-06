import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStartedScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  UploadPhotoScreen,
} from '../pages';
import {routesEnums} from '../navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName={routesEnums.SPLASH_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routesEnums.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen
        name={routesEnums.GET_STARTED_SCREEN}
        component={GetStartedScreen}
      />
      <Stack.Screen name={routesEnums.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={routesEnums.REGISTER_SCREEN}
        component={RegisterScreen}
      />
      <Stack.Screen
        name={routesEnums.UPLOADPHOTO_SCREEN}
        component={UploadPhotoScreen}
      />
    </Stack.Navigator>
  );
};

export default Route;
