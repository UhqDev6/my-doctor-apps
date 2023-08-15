import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICStart, Image4} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={Image4} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Ayu Ramadhan</Text>
        <Text style={styles.category}>Frontend Vue Developer</Text>
      </View>
      <View style={styles.star}>
        <ICStart />
        <ICStart />
        <ICStart />
        <ICStart />
        <ICStart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  star: {
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});