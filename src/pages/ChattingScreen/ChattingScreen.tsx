import {Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import ChattingScreenStyle from './ChattingScreen.style';

export default function ChattingScreen() {
  return (
    <View style={ChattingScreenStyle.container}>
      <Header type="dark-profile" title="Andi Alfian Putra" />
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
