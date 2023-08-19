import {ScrollView, View} from 'react-native';
import React from 'react';
import UpdateProfileScreenStyle from './UpdateProfileScreen.style';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function UpdateProfileScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View style={UpdateProfileScreenStyle.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={UpdateProfileScreenStyle.content}>
          <Profile isRemove />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            type="primary"
            title="Save Profile"
            onPress={() => navigation.navigate(routesEnums.USERPROFILE_SCREEN)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
