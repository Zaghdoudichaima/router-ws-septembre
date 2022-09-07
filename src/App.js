import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className='App'>
      <Navigation setLogin={setLogin} login={login} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/userslist' element={<UserList login={login} />} />
        <Route path='/profile/:id' element={<Profile login={login} />} />
      </Routes>
    </div>
  );
}
export default App;
