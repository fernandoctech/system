import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';

const App = () => (
    <Provider store={store}>
        <Fragment>
            <GlobalStyle/>
            <Routes/>
        </Fragment>

    </Provider>
);

export default App;
