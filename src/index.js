import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="*" component={Dashboard} />
    </Route>
  </Router>
), document.getElementById('root'));
