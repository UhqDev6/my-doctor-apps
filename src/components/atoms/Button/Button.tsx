import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

type ButtonType = 'primary' | 'secondary' | 'icon-only';

type IProps = {
  type?: ButtonType;
  title?: string;
  onPress?: () => void;
  icon?: string;
};

export default function Button(props: IProps) {
  const {type, title, onPress, icon} = props;

  // Kondisional style berdasarkan type
  const containerStyle =
    type === 'primary' ? styles.primaryContainer : styles.secondaryContainer;
  const textStyle =
    type === 'primary' ? styles.primaryText : styles.secondaryText;

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  primaryContainer: {
    backgroundColor: colors.button.primary.background,
  },
  secondaryContainer: {
    backgroundColor: colors.button.secondary.background,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.primary[500],
  },
  primaryText: {
    color: colors.button.primary.text,
  },
  secondaryText: {
    color: colors.button.secondary.text,
  },
});
