import React, {useEffect, useContext} from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Button from '~/Components/Button'
import { UserContext } from '~/Context/User';
import CommunityScreen from '~/Screens/CommunityScreen';
import PDFScreen from '~/Screens/PDFScreen'

const Container = Styled.ScrollView`
    flex: 1;
    background-color: #FFFFFF;
`;

const Header = Styled.View`
    width: 100%;
    height: 4px;
`;

const Footer = Styled.View`
    width: 100%;
    background-color: #141414;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'MainScreen'>;
interface Props {
  navigation: NavigationProp;
}

const MainScreen = ({navigation}: Props) => {
    const {logout} = useContext<IUserContext>(UserContext)

    useEffect(() => {
        SplashScreen.hide();
      }, []);
    

    return(
        <Container>
            <Header />
                <Button
                    label="뒤로"
                    style={{marginTop:400}}
                    onPress={() => {
                        logout();
                    }}
                />
            <Footer/>
        </Container>
    )
}

export default MainScreen;