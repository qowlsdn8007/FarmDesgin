import React, {Component} from 'react';
 
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import WebView from 'react-native-webview';
const Container = Styled.ScrollView`
  flex: 1;
`;


type NavigationProp = StackNavigationProp<LoginNaviParamList, 'AgreeWebView'>;
interface Props{
  navigation: NavigationProp;
}
const LiveStock_Agreement = require('~/Assets/HTML/IdAgreement.html')
const AgreeWebView = ({navigation}: Props) => {
  
    return (
        <WebView
          originWhitelist={['*']}
          source={LiveStock_Agreement}
          automaticallyAdjustContentInsets
          style={{flex: 1}}
        />
    )
}


export default AgreeWebView;