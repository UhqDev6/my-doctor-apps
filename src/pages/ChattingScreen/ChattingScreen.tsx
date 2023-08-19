import {Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import ChattingScreenStyle from './ChattingScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function ChattingScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View style={ChattingScreenStyle.container}>
      <Header
        type="dark-profile"
        title="Andi Alfian Putra"
        onPress={() => navigation.goBack()}
      />
      <View style={ChattingScreenStyle.content}>
        <Text style={ChattingScreenStyle.chatDate}>Senin, 18 Agustus 2023</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
}
