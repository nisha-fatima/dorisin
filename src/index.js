import React from 'react';
import ReactDOM from 'react-dom';
import HomeTwo from './pages/HomeTwo';


import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={"/"} component={HomeTwo} />
        
        </Switch>
      </BrowserRouter>
    );
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
