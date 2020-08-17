import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { useStateValue } from './StateProvider';


function App() {

  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        { !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Welcome />
                </Route>
              </Switch>
            </div>
          </>
        ) }
      </Router>
    </div>
  );
}

export default App;
