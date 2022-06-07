import React, { useEffect } from 'react'

import './App.css'
import Header from './components/header/Header'
import Mail from './components/Mail/Mail'
import EmailList from './components/EmailList/EmailList'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SendMail from './components/sendMail/SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectSendMsgIsOpen } from './features/mailSlice'
import { login, logout, selectUser } from './features/userSlice'
import Login from './components/Login/Login'
import { auth } from './firebase'

function App() {
  const SendMsgIsOpen = useSelector(selectSendMsgIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
        console.log(user.photoURL)
      }
    })
  }, [])
  console.log(user)
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {SendMsgIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App
