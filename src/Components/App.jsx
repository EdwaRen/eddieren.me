import React from 'react';
import Background from './Background.jsx';
// import { Switch, Route } from 'react-router-dom';
import Alternate from './Alternate.jsx';

// App.jsx is not 'actually necessary' but it follows accepted react architecture by always having an App.jsx main renderer
const App = () => (
  <div>

    <Background />
    {/* <Switch>
      // Deprecated react-router usage that caused issues with Github pages.
      <Route exact path='/' component={Background}/>
      <Route path='/alternate' component={Alternate}/>
    </Switch> */}
  </div>
)

export default App
