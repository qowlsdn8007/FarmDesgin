import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';



const Container = Styled.View`
    flex: 1;
    background-color: #FEFFFF;
`;
const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
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
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'SMSAuth'>;
interface Props {
    navigation: NavigationProp;
}


const SMSAuth = ({navigation}: Props) => {

    let s = '010-3011-2620';

    return (
        <Container>
            <FormContainer>
                <CenterText>
                    인증 코드 입력
                </CenterText>
                <SubText
                    style={{margin: 16}}
                >
                    {s} 번으로 전송된 6자리 코드를 입력하세요. 
                </SubText>
                <Input
                    style={{marginBottom: 16}}
                    placeholder="인증 번호"
                />
                <Button
                    label="다음"
                    style={{marginBottom: 24}}
                    onPress = {() => navigation.navigate('IDInput')}
                />
            </FormContainer>
        </Container>
    )

}
export default SMSAuth;