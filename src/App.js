import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ChurchServiceContainer from './sundayComponents/containers/ChurchServiceContainer'
import ChurchRedirect from './sundayComponents/components/ChurchRedirect.js'
import AdminPanelContainer from './adminPanelComponents/containers/AdminPanelContainer.js'

function App() {

  return (
    <Fragment>
      <Router>
        <Switch>
          {/* Router for admin set at slideform for now for testing */}
          <Route path="/admin" component={AdminPanelContainer} />
          <Route path="/church" component={ChurchServiceContainer} />
          <Route path="*" component={ChurchRedirect} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
