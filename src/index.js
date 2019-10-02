import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import store from './store';

import colors from './styles/colors';

import Routes from './routes';
import NavigationService from './services/navigation';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
