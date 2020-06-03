import React, {Fragment} from 'react';
import ChurchServiceContainer from './containers/ChurchServiceContainer'

function App() {
  return (
    <Fragment>
      {/* Router for Admin Page - '/admin' */}
      {/* Router for Church Service page - '/' */}
      <ChurchServiceContainer />
    </Fragment>
  );
}

export default App;
