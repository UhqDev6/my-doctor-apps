import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import HospitalScreenStyle from './HospitalScreen.style';
import {Image10, Image7, Image8, Image9} from '../../assets';
import {ListHospital} from '../../components';

export default function HospitalScreen() {
  return (
    <View style={HospitalScreenStyle.container}>
      <ImageBackground source={Image9} style={HospitalScreenStyle.background}>
        <Text style={HospitalScreenStyle.title}>Nearby Hospital</Text>
        <Text style={HospitalScreenStyle.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={HospitalScreenStyle.content}>
        <ListHospital
          type="Rumah Sakit Soerkarno"
          name="Citra Bunga Merdeka"
          address="Jl Kemerdekaan"
          pic={Image7}
        />
        <ListHospital
          type="Rumah Sakit Jokowi"
          name="Citra Permai"
          address="Jl Kemajuan"
          pic={Image8}
        />
        <ListHospital
          type="Tumah Sakit Habibie"
          name="Citra Mekar"
          address="Jl Perubahan"
          pic={Image10}
        />
      </View>
    </View>
  );
}
