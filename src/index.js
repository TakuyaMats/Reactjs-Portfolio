import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle'
import Typography from './styles/Typography'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <>
        <GlobalStyles />
        <Typography />
        <App />
    </>,
    document.getElementById('root')
);