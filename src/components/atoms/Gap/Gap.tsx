import React, {View} from 'react-native';

type IProps = {
  height?: number;
  width?: number;
};
export default function Gap(props: IProps) {
  const {height, width} = props;
  return <View style={{height: height, width: width}} />;
}
