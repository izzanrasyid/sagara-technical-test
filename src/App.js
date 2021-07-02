import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Register from './screens/Register'
import Login from './screens/Login'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
