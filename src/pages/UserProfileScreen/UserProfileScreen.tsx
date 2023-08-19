import {View} from 'react-native';
import React, {useState} from 'react';
import UserProfileScreenStyle from './UserProfileScreen.style';
import {Gap, Header, List, Profile} from '../../components';
import {ICEditProfile} from '../../assets';

export default function UserProfileScreen() {
  const [list] = useState([
    {
      id: 1,
      name: 'Edit Profile',
      profile: ICEditProfile,
      desc: 'Last update yesterday',
      type: 'next',
      icon: 'edit-profile',
    },
    {
      id: 2,
      name: 'Language',
      profile: ICEditProfile,
      desc: 'Available 12 languages',
      type: 'next',
      icon: 'language',
    },
    {
      id: 3,
      name: 'Give Us Rate',
      profile: ICEditProfile,
      desc: 'On google play store',
      type: 'next',
      icon: 'rate',
    },
    {
      id: 4,
      name: 'Help Center',
      profile: ICEditProfile,
      desc: 'Read our guidelines',
      type: 'next',
      icon: 'help',
    },
  ]);
  return (
    <View style={UserProfileScreenStyle.container}>
      <Header title="Profile" />
      <Gap height={10} />
      <Profile />
      <Gap height={14} />
      {list?.map(listProfile => (
        <List
          key={listProfile.id}
          profile={listProfile.profile}
          name={listProfile.name}
          desc={listProfile.desc}
          type={listProfile.type}
          icon={listProfile.icon}
        />
      ))}
    </View>
  );
}
