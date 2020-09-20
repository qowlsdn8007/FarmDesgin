import React from 'react';
import Styled from 'styled-components/native';
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

const View = Styled.View`
    flex: 1;
`;

const CommunityScreen = () => {
    return (
        <View>          
        </View>
    )
}
export default CommunityScreen;