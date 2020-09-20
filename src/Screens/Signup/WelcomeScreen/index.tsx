import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';
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


type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;
interface Props {
    navigation: NavigationProp;
}

const Welcome = ({navigation}: Props) => {

    return (
        <Container>
            <FormContainer>
                <CenterText
                    style={{marginTop: 80}}
                >
                FarmDesign 어플리케이션에 가입해주셔서 감사합니다.
                </CenterText>
                <SubText>
                    이제 FarmDesgin 플랫폼의 다양한 기능을 사용하실 수 있습니다.
                </SubText>
                <Button
                    label="로그인으로 돌아가기"
                    style={{top: 200}}
                    onPress={() => {{navigation.navigate('Login')}}}
                />
            </FormContainer>
        </Container>
    )
}


export default Welcome;