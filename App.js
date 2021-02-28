import React, {useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
// import MenuList from './src/navigation/menuList';
import FlashMessage from "react-native-flash-message";
import {WebView} from 'react-native-webview';

const deviceHeight = Dimensions.get("window").height;

const App = () => {
    return (
        <View style={{minHeight: deviceHeight}}>
            <WebView source={{uri: 'https://mevitest.bclg.in/'}}/>
        </View>
    );
};

export default App;

