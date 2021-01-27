import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import { LoginContext } from './Context/LoginContext';
import Profile from './components/Profile';
import AddAddress from './components/AddAddress';
import AddProduct from './components/AddProduct';
import Store from './components/Store';
import ItemPage from './components/ItemPage';

function App() {
  const [userInfo, setUserInfo] = useState({});

  const isUserLoggedIn = (uData) => {
    // console.log('executed');
    window.localStorage.setItem('amazoneUser', JSON.stringify(uData));
    setUserInfo(uData);
    console.log(userInfo);
  }
  return (
    <Router>
      <LoginContext.Provider value={{ userInfo, setUserInfo }}>
        <div className="App">
          <Header userData = {userInfo}/>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/login" exact>
              <Login isUserLoggedIn={(userData) => isUserLoggedIn(userData)}/>
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/profile" exact>
              <Profile isUserLoggedIn={(userData) => isUserLoggedIn(userData)}/>
            </Route>
            <Route path="/profile/address" exact>
              <AddAddress isUserLoggedIn={(userData) => isUserLoggedIn(userData)}/>
            </Route>
            <Route path="/addProduct" exact>
              <AddProduct />
            </Route>
            <Route path="/store" exact>
              <Store />
            </Route>
            <Route path="/store/:id" component={ItemPage} />
          </Switch>
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
