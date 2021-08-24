import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ReactPWAInstallProvider from "react-pwa-install"
import ChurchServiceContainer from './sundayComponents/containers/ChurchServiceContainer'
import ChurchRedirect from './sundayComponents/components/ChurchRedirect.js'
import AdminPanelContainer from './adminPanelComponents/containers/AdminPanelContainer.js'

function App() {

  console.log(window)

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminPanelContainer} />
          <Route path="/church">
            <ReactPWAInstallProvider>
              <ChurchServiceContainer />
            </ReactPWAInstallProvider>
          </Route>
          <Route path="*" component={ChurchRedirect} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
