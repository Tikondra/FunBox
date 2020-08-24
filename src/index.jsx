import './styles/main.scss';
import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx';
import card from './mocks/cards';

render(
  <App
    cards = {card}
  />,
  document.querySelector('#app')
);
