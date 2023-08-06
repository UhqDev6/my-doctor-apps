import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

type IProps = {
  label?: string;
};
export default function Input(props: IProps) {
  const {label} = props;
  return (
    <View>
      <Text style={InputStyle.label}>{label}</Text>
      <TextInput style={InputStyle.input} />
    </View>
  );
}

const InputStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
