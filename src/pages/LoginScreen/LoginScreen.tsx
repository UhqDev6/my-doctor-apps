import {Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import LoginScreenStyle from './LoginScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function LoginScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View style={LoginScreenStyle.container}>
      <ILLogo />
      <Text style={LoginScreenStyle.title}>Masuk dan mulai berkonstribusi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forget my password" size={12} />
      <Gap height={40} />
      <Button
        title="Sign in"
        type="primary"
        onPress={() => navigation.replace(routesEnums.MAINAPP_SCREEN)}
      />
      <Gap height={30} />
      <Link title="Create new account" size={16} align="center" />
    </View>
  );
}
