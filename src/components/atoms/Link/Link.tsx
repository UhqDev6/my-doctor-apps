import {StyleSheet, Text, View, TextStyle} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

interface IProps {
  title?: string;
  size?: number;
  align?: string;
}

const Link: React.FC<IProps> = (props: IProps) => {
  const {title, size, align} = props;
  return (
    <View>
      <Text style={LinkStyles.text(size, align)}>{title}</Text>
    </View>
  );
};

interface LinkStyles {
  text: (size?: number, align?: string) => TextStyle;
}

const LinkStyles = StyleSheet.create<LinkStyles>({
  text: (size: number, align: string) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});

export default Link;
