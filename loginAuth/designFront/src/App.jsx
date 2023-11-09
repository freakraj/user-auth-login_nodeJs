// import './App.css'
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import ImageUpload from "./ImageUpload";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ViewProfile } from "./ViewProfile";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/imageupload" element={<ImageUpload />}></Route>
          <Route path="/profile" element={<ViewProfile />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
