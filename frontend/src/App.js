import { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import './styles/style.css'
import TheContext from './TheContext'
import actions from './api'
import Auth from './components/Auth'
import Home from './components/Home'
import TestAudio from './components/TestAudio'
import EditLyrics from './components/EditLyrics'
import EditProfileScreen from './components/EditProfileScreen'
import EditProfile from './components/EditProfile'
import Profile from './components/Profile'
import SongScreen from './components/SongScreen'

function App() {
  const location = useLocation()
  const [user, setUser] = useState({})
  const [userViewed, setUserViewed] = useState({})
  const [locationIndicator, setLocationIndicator] = useState()

  useEffect(() => {
    actions
      .getUser()
      .then(res => {
        setUser(res.data)
        console.log('user is logged in', user)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    setLocationIndicator(location)
  }, [location])

  return (
    <TheContext.Provider
      value={{
        user,
        setUser,
        userViewed,
        setUserViewed,
        locationIndicator,
        setLocationIndicator,
      }}
    >
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/auth" render={props => <Auth setUser={setUser} {...props} />} />
          <Route exact path="/profile/:id" render={props => <Profile user={user} {...props} />} />
          <Route exact path="/profile" render={props => <Profile user={user} {...props} />} />
          <Route exact path="/recordingBooth" render={props => <TestAudio {...props} />} />
            <Route exact path="/recordingBooth/EditLyrics" render={props => <EditLyrics {...props} />} />
          <Route
            exact
            path="/editprofile-screen"
            render={props => <EditProfileScreen {...props} />}
          />
          <Route exact path="/editprofile" render={props => <EditProfile {...props} />} />
          {/* <Route exact path="/social-feed" render={(props) => <SocialFeed {...props} />} />
          <Route exact path="/explore-feed" render={(props) => <SocialFeed {...props} />} /> */}
          <Route exact path="/SongScreen/:id" render={props => <SongScreen {...props} />} />
        </Switch>
      </div>
    </TheContext.Provider>
  )
}

export default App
