import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {
  ICDoctor,
  ICDoctorActive,
  ICHospitals,
  ICHospitalsActive,
  ICMessages,
  ICMessagesActive,
} from '../../../assets';

interface IProps {
  title: string;
  active: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export default function TabItem(props: IProps) {
  const {title, active, onPress, onLongPress} = props;
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (title === 'Hospital') {
      return active ? <ICHospitalsActive /> : <ICHospitals />;
    }
    if (title === 'Message') {
      return active ? <ICMessagesActive /> : <ICMessages />;
    }
    return <ICDoctor />;
  };

  const colorActive = active ? colors.text.active : colors.text.inActive;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={[styles.text, {color: colorActive}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  },
});
