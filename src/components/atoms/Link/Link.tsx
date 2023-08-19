import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

interface IProps {
  title?: string;
  size?: number;
  align?: string;
  onPress?: () => void;
}

const Link = (props: IProps) => {
  const {title, size, align, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[LinkStyles.text, {fontSize: size, textAlign: align}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const LinkStyles = StyleSheet.create({
  text: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
  },
});

export default Link;
