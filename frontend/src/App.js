import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import Navbar from './component/Navbar'
import Signup from 'component/Signup'
import Login from './component/Login'
import Profile from './component/Profile'
import Welcome from './component/Welcome'
import About from './component/About'
import Footer from './component/Footer'
import './App.css';

const PrivateRoute = ({component: Component, ...rest})=>{
  const user = localStorage.fetItem('jwtToken')
  return <Route {...rest} render={(props)=> {
    return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}

function App() {
  // set state values
  let [currentUser, setCurrentUser] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(()=> {
    let token 
    if (localStorage.getItem('jwtToken')=== null){
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, [])

  let nowCurrentUser = (useData) => {
    console.log('nowCurentUser is working ...')
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')){
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  console.log('Current User', currentUser)
  console.log('Authenticated', isAuthenticated)

  return (
    <div className="App">
      <h1>Mern Auth Frontend</h1>
      <Navbar handleLogout={handleLogoout} isAuth={isAuthenticated}/>
      <div className="container mt-5">
        <Switch>
          <Route path="/sigup" component={Signup}/>
          <Route 
            path="/login" 
            render={(props)=> <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
            />
          <Route path="/about" component={About} />  
          <PrivateRoute path="/profile" component={Profile} user={currentUser} />
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
