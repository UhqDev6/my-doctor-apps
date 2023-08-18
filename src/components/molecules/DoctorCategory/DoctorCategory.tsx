import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILDoctor1, ILDoctor2, ILDoctor3} from '../../../assets';
import {colors, fonts} from '../../../utils';

type IProps = {
  category: string;
  onPress: () => void;
};

export default function DoctorCategory(props: IProps) {
  const {category, onPress} = props;
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILDoctor1 style={styles.ilustration} />;
    }
    if (category === 'psikiater') {
      return <ILDoctor2 style={styles.ilustration} />;
    }
    if (category === 'dokter obat') {
      return <ILDoctor3 style={styles.ilustration} />;
    }
    return <ILDoctor1 style={styles.ilustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  ilustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
