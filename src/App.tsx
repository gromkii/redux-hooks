import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import PostContainer from './components/PostContainer';
import List from './components/List';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PostContainer} />
          <Route path="/list" component={List} />
        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
