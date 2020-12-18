import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import AppWithHot from '../components/App/index';
import './index.scss';

const mountNode = document.getElementById('app');

ReactDOM.render(<AppWithHot />, mountNode);
