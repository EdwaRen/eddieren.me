import React from 'react';
import Background from './Background.jsx';
import { Switch, Route } from 'react-router-dom';
import Alternate from './Alternate.jsx';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Background}/>
      <Route path='/alternate' component={Alternate}/>
    </Switch>
  </div>
)

export default App
