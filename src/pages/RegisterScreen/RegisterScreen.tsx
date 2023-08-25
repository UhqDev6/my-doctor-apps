import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Input} from '../../components';
import RegisterScreenStyle from './RegisterScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {Firebase} from '../../config/Firebase/Firebase';

interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function RegisterScreen(props: IProps) {
  const {navigation} = props;
  const [fullName, setFullName] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onContinue = () => {
    console.log(
      'FullNama = ',
      fullName,
      'Profession:',
      profession,
      'Email:',
      email,
      'Password',
      password,
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((success: any) => {
          console.log('register success', success);
        })
        .catch((error: any) => {
          const errorMessage = error.message;
          console.log('error message', errorMessage);
          // ..
        }),
    );
  };
  return (
    <View style={RegisterScreenStyle.container}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={RegisterScreenStyle.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profession}
            onChangeText={value => setProfession(value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="continue" type="primary" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
}
