/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {
  ICArrowRight,
  ICEditProfile,
  ICHelp,
  ICLanguage,
  ICRate,
} from '../../../assets';

type IProps = {
  profile: ImageSourcePropType;
  name?: string;
  desc?: string;
  type?: string;
  onPress?: () => void;
  icon?: string;
};

export default function List(props: IProps) {
  const {profile, name, desc, type, onPress, icon} = props;

  const Icon = () => {
    if (icon === 'edit-profile') {
      return <ICEditProfile />;
    }
    if (icon === 'language') {
      return <ICLanguage />;
    }
    if (icon === 'rate') {
      return <ICRate />;
    }
    if (icon === 'help') {
      return <ICHelp />;
    }
    return <ICEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <ICArrowRight />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
