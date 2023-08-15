import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import DoctorScreenStyle from './DoctorScreen.style';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';

export default function DoctorScreen() {
  return (
    <View style={DoctorScreenStyle.container}>
      <View style={DoctorScreenStyle.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={DoctorScreenStyle.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={DoctorScreenStyle.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={DoctorScreenStyle.category}>
                <Gap width={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={16} />
              </View>
            </ScrollView>
          </View>
          <Text style={DoctorScreenStyle.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={DoctorScreenStyle.sectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}
