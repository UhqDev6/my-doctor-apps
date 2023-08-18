import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICBackDark, ICBackLight} from '../../../assets';

type IProps = {
  onPress?: () => void;
  icon?: string;
};

export default function IconOnly(props: IProps) {
  const {onPress, icon} = props;
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackDark />;
    } else if (icon === 'back-light') {
      return <ICBackLight />;
    }
    return <ICBackDark />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
