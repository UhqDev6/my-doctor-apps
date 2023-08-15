import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {User} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={User} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Dhiya Ulhaq</Text>
        <Text style={styles.profession}>Frontend Developer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
