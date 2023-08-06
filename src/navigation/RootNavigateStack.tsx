export enum routesEnums {
  SPLASH_SCREEN = 'SplashScreen',
  GET_STARTED_SCREEN = 'GetStartedScreen',
  LOGIN_SCREEN = 'LoginScreen',
  REGISTER_SCREEN = 'RegisterScreen',
  UPLOADPHOTO_SCREEN = 'UploadPhotoScreen',
  DOCTOR_SCREEN = 'DoctorScreen',
  MESSAGE_SCREEN = 'MessageScreen',
  HOSPITAL_SCREEN = 'HospitalScreen',
}

export type RootStackParams = {
  [routesEnums.SPLASH_SCREEN]: undefined;
  [routesEnums.GET_STARTED_SCREEN]: undefined;
  [routesEnums.LOGIN_SCREEN]: undefined;
  [routesEnums.REGISTER_SCREEN]: undefined;
  [routesEnums.UPLOADPHOTO_SCREEN]: undefined;
  [routesEnums.DOCTOR_SCREEN]: undefined;
  [routesEnums.MESSAGE_SCREEN]: undefined;
  [routesEnums.HOSPITAL_SCREEN]: undefined;
};
