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
import {JSONCategory} from '../../assets';

export default function DoctorScreen() {
  return (
    <View style={DoctorScreenStyle.container}>
      <View style={DoctorScreenStyle.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={DoctorScreenStyle.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={DoctorScreenStyle.welcome}>
              Mau konsultasi dengan siapa hari ini
            </Text>
          </View>
          <View style={DoctorScreenStyle.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={DoctorScreenStyle.category}>
                <Gap width={32} />
                {JSONCategory?.data?.map(category => (
                  <DoctorCategory
                    key={category.id}
                    category={category.category}
                  />
                ))}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={DoctorScreenStyle.wrapperSection}>
            <Text style={DoctorScreenStyle.sectionLabel}>
              Top Rated Doctors
            </Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={DoctorScreenStyle.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}
