import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ICSendPrimary, ICSendSecondary} from '../../../assets';
import {colors} from '../../../utils';

type IProps = {
  disable?: boolean;
};

export default function BtnIconSend(props: IProps) {
  const {disable} = props;
  const backgroundSend = disable ? colors.disable : colors.tertiary;
  return (
    <View style={[styles.container, {backgroundColor: backgroundSend}]}>
      {disable ? <ICSendSecondary /> : <ICSendPrimary />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 10,
    padding: 10,
  },
});
