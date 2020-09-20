import React, {useContext} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserContext} from '~/Context/User';
import Loading from '~/Components/Loading';

import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';
import MainScreen from '~/Screens/MainScreen'
import AgreeWebView from '~/Screens/Signup/AgreeWebView'
import CommunityScreen from '~/Screens/CommunityScreen';
import PDFScreen from '~/Screens/PDFScreen';
import SMSAuth from '~/Screens/Signup/SMSAuthScreen';
import Welcome from '~/Screens/Signup/WelcomeScreen';
import IDInput from '~/Screens/Signup/IDInputScreen';
import AgreeScreen from '~/Screens/Signup/AgreeScreen';
import PostCode from '~/Screens/Signup/PostCode';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="AgreeWebView" component={AgreeWebView} />
      <Stack.Screen name="SMSAuth" component={SMSAuth} />
      <Stack.Screen name="IDInput" component={IDInput} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Agree" component={AgreeScreen} />
      <Stack.Screen name="PostCode" component={PostCode} />
    </Stack.Navigator>
  );
};

const PDFNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PDFScreen" component={PDFScreen} />
    </Stack.Navigator>
  )
}
const CommunityNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
    </Stack.Navigator>
  )
}


const MainScreenNavigator = () => {
  return (
    <BottomTab.Navigator
                    tabBarOptions={
                        {showLabel: false, activeTintColor:'#e91e63'}
                    }>
                    <BottomTab.Screen
                        name="Main"
                        component={MainScreen}
                        options={{
                            tabBarIcon: ({color, focused}) => (
                                <Image
                                    source={
                                        focused
                                        ? require('~/Assets/Images/Tabs/ic_home.png')
                                        : require('~/Assets/Images/Tabs/ic_home_outline.png')
                                    }
                                />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Community"
                        component={CommunityNavigator}
                        options={{
                            tabBarIcon: ({color, focused}) => (
                                <Image
                                    source={
                                        focused
                                        ? require('~/Assets/Images/Tabs/ic_profile.png')
                                        : require('~/Assets/Images/Tabs/ic_profile_outline.png')
                                    }
                                />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="PDF"
                        component={PDFNavigator}
                        options={{
                            tabBarIcon: ({color, focused}) => (
                                <Image
                                    source={
                                        focused
                                        ? require('~/Assets/Images/Tabs/ic_search.png')
                                        : require('~/Assets/Images/Tabs/ic_search_outline.png')
                                    }
                                />
                            ),
                        }}
                    />
                </BottomTab.Navigator>
  )
}

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext> (UserContext);

  console.log(isLoading);
  console.log(userInfo);
  if (isLoading === false) {
      return <Loading />;
  }

  return (
    <NavigationContainer>
      {userInfo ? <MainScreenNavigator/> : <LoginNavigator />}
    </NavigationContainer>
  );
};
