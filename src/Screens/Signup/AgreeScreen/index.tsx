import React, {useState} from 'react';
import {Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import CheckBox from '@react-native-community/checkbox'
import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { color } from 'react-native-reanimated';
import WebView from 'react-native-webview';
const EmptyBox = Styled.View`

`;
const LiveStock_Agreement = require('~/Assets/HTML/IdAgreement.html')
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
    margin-top: 8%;
    text-align: center;
    color: #141414;
    font-weight: bold;
`;
const SubText = Styled.Text`
    text-align: center;
    color: #948b8b;
`;

const AgreeBox = Styled.View`
    width: 100%;
    border: 1px;
    borderColor: #FFFFFF;
    borderBottomColor: #141414;
    padding: 1%;
`;
const Detail = Styled.Text`
    color: #bab6b6;
`;
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Agree'>;
interface Props {
    navigation: NavigationProp;
}


const AgreeScreen = ({navigation}: Props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <Container>
            <FormContainer>
                <CenterText
                    style={{fontSize: 20}}
                >약관 동의</CenterText>
                <SubText
                    style={{marginTop: 16}}    
                >
                FarmDesign은 농가 회원님의 개인 정보를 안전하게 보호합니다. 새 계정을 만들려면 모든 약관에 동의하세요.
                </SubText>
                <AgreeBox>
                    <CenterText
                        style = {{textAlign: "left", fontSize: 20, marginBottom: 10}}
                    >개인정보 제공
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    ></CheckBox>
                    </CenterText>
                    <Detail
                        style = {{marginLeft: 10}}
                        onPress = {() => {navigation.navigate('AgreeWebView')}}
                    >더 알아보기</Detail>
                </AgreeBox>
                <Button
                    label="다음"
                    style={{top: 200}}
                    onPress={() => {
                        if (!toggleCheckBox)
                            Alert.alert('약관에 동의하셔야 합니다.');
                        else
                            navigation.navigate('Welcome');
                        }
                    }     
                />
            </FormContainer>            
        </Container>
    );
}
export default AgreeScreen;