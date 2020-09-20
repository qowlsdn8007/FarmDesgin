import React, {useState, useContext} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';
import axios from 'axios';
import { UserContextProvider } from '~/Context/User';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #FEFFFF;
`;

const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`;
const Description = Styled.Text`
  text-align: center;
  font-size: 12px;
  color: #929292;
  margin: 0px 8px;
`;
const TabContainer = Styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
const Footer = Styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #D3D3D3;
  padding: 8px;
`;
const FooterDescription = Styled.Text`
  color: #929292;
  text-align: center;
`;
const GoBack = Styled.Text`
  color: #3796EF;
`;

const CenterText = Styled.Text`
    margin-top: 10%;
    text-align: center;
    color: #141414;
    font-weight: bold;
`;
const SubText = Styled.Text`
    text-align: center;
    color: #948b8b;
`;


type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Signup'>;
interface Props {
  navigation: NavigationProp;
}

const Signup = ({navigation}: Props) => {

  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabs = ['전화번호', '이메일'];
  const [code, setCode] = useState('');
  const [authnum, setAuthnum] = useState('');
  const [myauthnum, setMyAuthnum] = useState('');

  return (
    <Container>
      <FormContainer>
        <TabContainer>
          {tabs.map((label: string, index: number) => (
            <Tab
              key={`tab-${index}`}
              selected={tabIndex === index}
              label={label}
              onPress={() => setTabIndex(index)}
            />
          ))}
        </TabContainer>
        <Input
          style={{marginBottom: 16}}
          placeholder={tabIndex === 0 ? '전화번호' : '이메일'}
          onChangeText = {text => setCode(text)}
        />
        <Button
         label="다음" style={{marginBottom: 24}}
         onPress={() => {
                  axios.get('http://192.168.35.93:3000/board/sms', {
                      params: {
                      phonenum: code,
                      }
                  })
                  .then(function (response) {
                      console.log(response.data);
                      setAuthnum(response.data);
                  })
                  .then(function(error) {
                      console.log(error);
                  })
              }
          }
        />
        <SubText
            style={{margin: 16}}
        >
            {code} 번으로 전송된 6자리 코드를 입력하세요. 
        </SubText>
        <Input
            style={{marginBottom: 16}}
            placeholder="인증 번호"
            onChangeText={text => setMyAuthnum(text)}
        />
        <Button
            label="다음"
            style={{marginBottom: 24}}
            onPress = {() => {
              if (myauthnum == authnum) {
              console.log("auth success!!");
              navigation.navigate('IDInput');
            }}}
        />

        {tabIndex === 0 && (
          <Description>
            Farm Design의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을
            취소할 수 있습니다.
          </Description>
        )}
      </FormContainer>
      <Footer>
        <FooterDescription>
          이미 계정이 있으신가요?{' '}
          <GoBack onPress={() => navigation.goBack()}>로그인</GoBack>
        </FooterDescription>
      </Footer>
    </Container>
  );
};

export default Signup;
