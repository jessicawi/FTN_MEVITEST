import React, {useEffect} from 'react';
// import MenuList from './src/navigation/menuList';
import {Provider} from 'react-redux';
import store from './store';
import FlashMessage from "react-native-flash-message";

const App = () => {
    return (
        <Provider store={store}>
            {/*<MenuList/>*/}
            <FlashMessage position="top" style={{zIndex: 99999999}}/>
        </Provider>
    );
};

export default App;

