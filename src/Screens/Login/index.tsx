import React, {useContext, useEffect, useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User'
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import axios from 'axios';
import { Alert, Image } from 'react-native';
const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #FEFFFF;
`;
const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Logo = Styled.Text`
  color: #292929;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  color: #3796EF;
  text-align: right;
  margin-bottom: 24px;
`;

const SignupText = Styled.Text`
  color: #929292;
  text-align: center;
`;
const SignupLink = Styled.Text`
  color: #3796EF;
`;

const Footer = Styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #D3D3D3;
  padding: 8px;
`;
const Copyright = Styled.Text`
  color: #929292;
  text-align: center;
`;


type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");


  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Image
          source = {require('~/Assets/Images/farmdesign.png')}
        ></Image>
        <Input 
          style={{marginBottom: 16}} 
          placeholder="이메일"
          onChangeText = {id=> setUserId(id)}  // 입력받은 텍스트 저장
        />
        <Input
          style={{marginBottom: 16}}
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText = {pw=> setUserPw(pw)}
        />
        <PasswordReset onPress={() => navigation.navigate('PasswordReset')}>
          비밀번호 재설정
        </PasswordReset>
        <Button
          label="로그인"
          style={{marginBottom: 24}}
          onPress={() => {
            console.log(userId);
            axios.get('http://farmd.synology.me:3000/board/login', {
                params: {
                  inputId: userId,
                  inputPw: userPw,
                }
            })
            .then(function (response) {
              console.log(response.data);
              if(response.data == 'success')
                login(userId, userPw);
              else
                Alert.alert('아이디 혹은  비밀번호가 일치하지 않습니다.');              
            })
            .then(function (error) {
              console.log(error);
            })
          }}
        />
        <SignupText>
          계정이 없으신가요?{' '}
          <SignupLink onPress={() => navigation.navigate('Signup')}>
            가입하기.
          </SignupLink>
        </SignupText>
      </FormContainer>
      <Footer>
        <Copyright>FarmDesign</Copyright>
      </Footer>
    </Container>
  );
};

export default Login;
