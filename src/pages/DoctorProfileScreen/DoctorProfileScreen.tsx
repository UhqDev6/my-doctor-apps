import {View} from 'react-native';
import React, {useState} from 'react';
import DoctorProfileScreenStyle from './DoctorProfileScreen.style';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function DoctorProfileScreen(props: IProps) {
  const {navigation} = props;
  const [profileItem] = useState([
    {
      id: 1,
      label: 'Alumnus',
      value: 'Universitas muslim indonesia, 2020',
    },
    {
      id: 2,
      label: 'Laboratorium',
      value: 'Fakultas Ilmu Komputer UMI',
    },
    {
      id: 3,
      label: 'No Str',
      value: '049049093049303',
    },
  ]);
  return (
    <View style={DoctorProfileScreenStyle.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Ayu Ramadhan" desc="Doctor Anak" />
      <Gap height={10} />
      {profileItem?.map(item => (
        <ProfileItem key={item.id} label={item.label} value={item.label} />
      ))}
      <View style={DoctorProfileScreenStyle.action}>
        <Button
          type="primary"
          title="Start Consultation"
          onPress={() => navigation.navigate(routesEnums.CHATTING_SCREEN)}
        />
      </View>
    </View>
  );
}
