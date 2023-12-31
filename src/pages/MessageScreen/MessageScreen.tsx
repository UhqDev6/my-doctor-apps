import {Text, View} from 'react-native';
import React, {useState} from 'react';
import MessageScreenStyle from './MessageScreen.style';
import {Image4, Image5, Image6} from '../../assets';
import {List} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function MessageScreen(props: IProps) {
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
  ]);
  return (
    <View style={MessageScreenStyle.container}>
      <View style={MessageScreenStyle.content}>
        <Text style={MessageScreenStyle.title}>Message</Text>
        {doctor.map(doc => (
          <View key={doc.id}>
            <List
              profile={doc.profile}
              name={doc.name}
              desc={doc.desc}
              onPress={() => navigation.navigate(routesEnums.CHATTING_SCREEN)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
