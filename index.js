/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import {App} from './components/App';
 import { name as appName } from './app.json';
 import React, { Component } from 'react';
 
const ReactNativeTicTacToe = () => {
    return( 
        <App />
    )
};
 
 AppRegistry.registerComponent(appName, () => App);
 export default ReactNativeTicTacToe;

 