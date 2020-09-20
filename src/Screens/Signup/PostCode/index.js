import React, {useContext} from 'react';
import Postcode from 'react-native-daum-postcode';
import {UserContext} from '~/Context/User'
import IDInput from '~/Screens/Signup/IDInputScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import WebView from 'react-native-webview';
import {UserContextProvider} from '~/Context/User';

const PostCode = (props) => {
    const {getAddr} = useContext(UserContext);
    return (
        <Postcode  
            jsOptions ={{ animated: true }}
            onSelected={(data) => getAddr(JSON.stringify(data.roadAddress))}        
        />
    );
};
export default PostCode;