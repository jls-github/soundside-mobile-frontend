import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ChurchServiceContainer from './containers/ChurchServiceContainer'
import ChurchRedirect from './components/ChurchRedirect.js'

function App() {

  return (
    <Fragment>
      <Router>
        <Switch>
          {/* Router for Admin Page - '/admin' */}
          <Route path="/church" component={ChurchServiceContainer} />
          <Route path="*" component={ChurchRedirect} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
