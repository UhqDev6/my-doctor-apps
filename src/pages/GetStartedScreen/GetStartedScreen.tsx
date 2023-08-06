import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {ILBg, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import GetStartedStyle from './GetStartedScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams, routesEnums} from '../../navigation/RootNavigateStack';

type NavigationProps = NativeStackNavigationProp<
  RootStackParams,
  routesEnums.REGISTER_SCREEN
>;

interface IProps {
  navigation: NavigationProps;
}

export default function GetStartedScreen(props: IProps) {
  const {navigation} = props;
  return (
    <ImageBackground source={ILBg} style={GetStartedStyle.page}>
      <View>
        <ILLogo />
        <Text style={GetStartedStyle.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          type="primary"
          onPress={() => navigation.navigate(routesEnums.REGISTER_SCREEN)}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate(routesEnums.LOGIN_SCREEN)}
        />
      </View>
    </ImageBackground>
  );
}
