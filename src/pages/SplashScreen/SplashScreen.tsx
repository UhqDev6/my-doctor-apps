import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import styleSplash from './SplashScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {routesEnums} from '../../navigation';
import {RootStackParams} from '../../navigation/RootNavigateStack';

type NavigationProps = NativeStackNavigationProp<
  RootStackParams,
  routesEnums.GET_STARTED_SCREEN
>;

interface IProps {
  navigation: NavigationProps;
}

export default function SplashScreen(props: IProps) {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routesEnums.GET_STARTED_SCREEN);
    }, 3000);
  }, [navigation]);
  return (
    <View style={styleSplash.page}>
      <ILLogo />
      <Text style={styleSplash.title}>My Doctor</Text>
    </View>
  );
}
