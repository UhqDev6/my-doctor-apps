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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {routesEnums} from '../../navigation';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function DoctorScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View style={DoctorScreenStyle.container}>
      <View style={DoctorScreenStyle.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={DoctorScreenStyle.wrapperSection}>
            <Gap height={30} />
            <HomeProfile
              onPress={() =>
                navigation.navigate(routesEnums.USERPROFILE_SCREEN)
              }
            />
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
                    onPress={() =>
                      navigation.navigate(routesEnums.CHOOSEDOCTOR_SCREEN)
                    }
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
