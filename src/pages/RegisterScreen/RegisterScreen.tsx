import {ScrollView, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import RegisterScreenStyle from './RegisterScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function RegisterScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View style={RegisterScreenStyle.container}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={RegisterScreenStyle.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            title="continue"
            type="primary"
            onPress={() => navigation.navigate(routesEnums.UPLOADPHOTO_SCREEN)}
          />
        </ScrollView>
      </View>
    </View>
  );
}
