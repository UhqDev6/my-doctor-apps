import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Image5} from '../../../assets';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={Image5} style={styles.avatar} />
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Ibu dok, makanan yang sehat untuk membantu proses diet itu apa ?
          </Text>
        </View>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  content: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
});
