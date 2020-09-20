import React, {useContext, useState} from 'react';
import {Alert} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import axios from 'axios';
import {UserContextProvider, UserContext} from '~/Context/User';

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
const AddrInput = Styled.TextInput`
    flex: 1;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'IDInput'>;
interface Props {
    navigation: NavigationProp;
}

const IDInput = ({navigation}: Props) => {
    const [userNm, setUserNm] = useState("");
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [cityNm, setCityNm] = useState({});
    const [farmAddr, setFarmAddr] = useState("");
    const [idExistance, setIdExistance] = useState("");
    const {addr} = useContext(UserContext);
    const [changeaddr, setChangeAddr] = useState<object | undefined>(undefined);
    console.log(addr);
    var tmpaddr: string | undefined = addr;
    tmpaddr = tmpaddr?.substr(1, tmpaddr.length - 2);
       //  큰따옴표 제거

    return (
        <Container>
            <FormContainer>
                <CenterText>상세 정보</CenterText>
                <Input
                    style={{marginTop: 20}}
                    placeholder="농가명: 성명 혹은 법인"
                    onChangeText = {nm=> setUserNm(nm)}
                />
                <Input
                    style={{marginTop: 20}}
                    placeholder="아이디"
                    onChangeText = {id=> setUserId(id)}
                />
                <Input
                    style={{marginTop: 20}}
                    placeholder="비밀번호"
                    onChangeText = {pw=> setUserPw(pw)}
                />
                <Input
                    style={{marginTop: 20}}
                    placeholder="주소"
                    editable = {false}
                    value = {tmpaddr}               
                />
            <UserContextProvider>
                <Button
                    label="주소 검색"
                    style={{width: 100}}
                    onPress={() => {
                        navigation.navigate('PostCode');
                        tmpaddr = addr;   
                    }}                  
                />
            </UserContextProvider>
                <Input
                    style={{marginTop: 20}}
                    placeholder="상세 주소 입력"
                    onChangeText = {faddr => setFarmAddr(faddr)}
                />
                <Button
                    label="다음"
                    style={{marginTop: 24}}
                    onPress={() => {
                        axios.get('http://farmd.synology.me:3000/board/info', {
                            params: {
                            inputNm: userNm,
                            inputId: userId,
                            inputPw: userPw,
                            inputCityNm: tmpaddr,
                            inputAddr: farmAddr,   // 정보들 서버에 post
                            }
                        })
                        .then(function (response) {
                            console.log(response.data);
                            if(response.data == "success")  // 저장 성공했으면
                                navigation.navigate('Agree') // 다음 화면으로
                            else if (response.data === "fail")
                                Alert.alert('정보를 정확하게 입력해주세요');
                            else
                                Alert.alert('이미 등록된 ID 입니다.');
                        })
                        .then(function(error) {
                            console.log(error);
                        })
                    }
                }
                />
            </FormContainer>
        </Container>
    );
}
export default IDInput;