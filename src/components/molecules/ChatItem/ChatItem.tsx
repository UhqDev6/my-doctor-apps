import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

type IProps = {
  isMe?: boolean;
};

export default function ChatItem(props: IProps) {
  const {isMe} = props;

  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}
