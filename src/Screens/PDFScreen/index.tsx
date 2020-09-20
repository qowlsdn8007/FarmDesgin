import React, {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import Styled from 'styled-components/native';
import WebView from 'react-native-webview';
const Container = Styled.ScrollView`
  flex: 1;
`;

const PDFScreen = (): JSX.Element => {
  const webview = useRef<WebView>(null);
  const onAndroidBackPress = (): boolean => {
    if (webview.current) {
      webview.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };
  useEffect((): (() => void) => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    return (): void => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    };
  }, []); // Never re-run this effect
  return (
    <WebView
      source={{ uri: 'http://farmd.synology.me:9091/report/list' }}
      ref={webview}
    />
  )
}
export default PDFScreen;