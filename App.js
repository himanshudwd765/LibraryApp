
import { Router, ActionConst, Scene } from 'react-native-router-flux';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import LibraryList from './screens/libraryList';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key="libraryListScreen"
              component={LibraryList}
              title="Library"
              headerStyle= {{backgroundColor: '#0d66a2'}}
              headerTitleStyle= {{color: '#FFFFFF',alignSelf:'center'}}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

