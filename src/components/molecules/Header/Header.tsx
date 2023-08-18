import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import DarkHeader from './DarkHeader';

type IProps = {
  onPress?: () => void;
  title: string;
  type: string;
};

export default function Header(props: IProps) {
  const {onPress, title, type} = props;
  const typeBackground = type === 'dark' ? colors.secondary : colors.white;
  const typeColorText = type === 'dark' ? colors.white : colors.text.primary;
  const typeRadiusLeft = type === 'dark' ? 20 : 0;
  const typeRadiusRight = type === 'dark' ? 20 : 0;

  if (type === 'dark-profile') {
    return <DarkHeader />;
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: typeBackground,
          borderBottomLeftRadius: typeRadiusLeft,
          borderBottomRightRadius: typeRadiusRight,
        },
      ]}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={[styles.text, {color: typeColorText}]}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[500],
  },
});
