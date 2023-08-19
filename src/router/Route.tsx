import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChattingScreen,
  ChooseDoctorScreen,
  DoctorScreen,
  GetStartedScreen,
  HospitalScreen,
  LoginScreen,
  MessageScreen,
  RegisterScreen,
  SplashScreen,
  UpdateProfileScreen,
  UploadPhotoScreen,
  UserProfileScreen,
} from '../pages';
import {routesEnums} from '../navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonNavigator} from '../components';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <ButtonNavigator {...props} />}>
      <Tab.Screen name={routesEnums.DOCTOR_SCREEN} component={DoctorScreen} />
      <Tab.Screen name={routesEnums.MESSAGE_SCREEN} component={MessageScreen} />
      <Tab.Screen
        name={routesEnums.HOSPITAL_SCREEN}
        component={HospitalScreen}
      />
    </Tab.Navigator>
  );
};
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
      <Stack.Screen name={routesEnums.MAINAPP_SCREEN} component={MainApp} />
      <Stack.Screen
        name={routesEnums.CHOOSEDOCTOR_SCREEN}
        component={ChooseDoctorScreen}
      />
      <Stack.Screen
        name={routesEnums.CHATTING_SCREEN}
        component={ChattingScreen}
      />
      <Stack.Screen
        name={routesEnums.USERPROFILE_SCREEN}
        component={UserProfileScreen}
      />
      <Stack.Screen
        name={routesEnums.UPDATEPROFILE_SCREEN}
        component={UpdateProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default Route;
