import {Image, Text, View} from 'react-native';
import React from 'react';
import UploadPhotoScreenStyle from './UploadPhotoScreen.style';
import {Button, Gap, Header, Link} from '../../components';
import {ICAddPhoto, ILEmptyPhoto} from '../../assets';

export default function UploadPhotoScreen() {
  return (
    <View style={UploadPhotoScreenStyle.container}>
      <Header title="Upload Photo" />
      <View style={UploadPhotoScreenStyle.content}>
        <View style={UploadPhotoScreenStyle.profile}>
          <View style={UploadPhotoScreenStyle.avatarWrapper}>
            <Image
              source={ILEmptyPhoto}
              style={UploadPhotoScreenStyle.avatar}
            />
            <ICAddPhoto style={UploadPhotoScreenStyle.addPhoto} />
          </View>
          <Text style={UploadPhotoScreenStyle.name}>M. Dhiya Ulhaq</Text>
          <Text style={UploadPhotoScreenStyle.profession}>
            Frontend Developer
          </Text>
        </View>
        <View>
          <Button title="Upload and Continue" type="primary" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
}
