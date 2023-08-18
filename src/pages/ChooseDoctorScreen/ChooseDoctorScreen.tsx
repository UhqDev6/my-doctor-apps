import {View} from 'react-native';
import React, {useState} from 'react';
import {Header, ListDoctor} from '../../components';
import {Image4, Image5, Image6} from '../../assets';
import ChooseDoctorScreenStyle from './ChooseDoctorScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function ChooseDoctorScreen(props: IProps) {
  const {navigation} = props;
  const [doctor] = useState([
    {
      id: 1,
      profile: Image4,
      name: 'M Syawal',
      desc: 'Selamat datang kembali ya',
    },
    {
      id: 2,
      profile: Image5,
      name: 'Furqaan Ismail',
      desc: 'Selamat siang, kendalanya apa ya bu ? ',
    },
    {
      id: 3,
      profile: Image6,
      name: 'Andi Alfian Putra',
      desc: 'Baik bu, terima kasih atas ke datangannya. sehat sehat ya',
    },
    {
      id: 4,
      profile: Image5,
      name: 'Rifqa',
      desc: 'Selamat siang, kendalanya apa ya bu ? ',
    },
    {
      id: 5,
      profile: Image6,
      name: 'Windy',
      desc: 'Baik bu, terima kasih atas ke datangannya. sehat sehat ya',
    },
  ]);
  return (
    <View style={ChooseDoctorScreenStyle.container}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      {doctor.map(doc => (
        <ListDoctor
          key={doc.id}
          profile={doc.profile}
          name={doc.name}
          desc={doc.desc}
          type="next"
          onPress={() => navigation.navigate(routesEnums.CHATTING_SCREEN)}
        />
      ))}
    </View>
  );
}
