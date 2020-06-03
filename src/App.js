import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ChurchServiceContainer from './containers/ChurchServiceContainer'

function App() {

  const Otherroute = () => {
    return(
      <div>Other route</div>
    )
  }

  return (
    <Fragment>
      <Router>
      {/* Router for Admin Page - '/admin' */}
      {/* Router for Church Service page - '/' */}
        <Switch>
          <Route path="/church" component={ChurchServiceContainer} />
          <Route path="/" component={Otherroute} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
