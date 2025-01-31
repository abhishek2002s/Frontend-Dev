import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Body from "./components/body"
import { Provider } from "react-redux"
import userStore from "./utils/userStore"
import Feed from "./components/Feed"
import Profile from "./components/Profile"
import Connection from "./components/Connection"
import Request from "./components/Request"

function App() {
  return (
    <Provider store={userStore}>
 <BrowserRouter basename="/">
  <Routes>
    <Route path="/" element = {<Body/>} >
    <Route path="/" element = {<Feed/>} />
      <Route path="/login" element = {<Login/>} />
      <Route path="/profile" element = {<Profile/>} />
      <Route path = "/connections" element = {<Connection/>} />
      <Route path = "/requests" element = {<Request/>} />
      </Route>
  </Routes>
 </BrowserRouter>
 </Provider>
  )
}

export default App
