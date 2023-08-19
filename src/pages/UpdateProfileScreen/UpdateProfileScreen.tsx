import {ScrollView, View} from 'react-native';
import React from 'react';
import UpdateProfileScreenStyle from './UpdateProfileScreen.style';
import {Button, Gap, Header, Input, Profile} from '../../components';

export default function UpdateProfileScreen() {
  return (
    <View style={UpdateProfileScreenStyle.container}>
      <Header title="Edit Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={UpdateProfileScreenStyle.content}>
          <Profile />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button type="primary" title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}
