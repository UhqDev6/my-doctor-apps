import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {Image4} from '../../../assets';

type IProps = {
  onPress?: () => void;
};

export default function DarkHeader(props: IProps) {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Andi Alfian Putra</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={Image4} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontFamily: fonts.primary.normal,
    color: colors.text.subTitle,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
});
