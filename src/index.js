import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import DrumMachineContainer from './containers/drum-machine-container';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={DrumMachineContainer} />
      <Switch>
        <Route path='/drum-machine' components={DrumMachineContainer} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root'),
);
