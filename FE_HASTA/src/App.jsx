import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  ForgotPassword,
  Home,
  Login,
  Menu,
  NotFound,
  SignUp,
  Stores,
} from "./pages/landing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* ROUTES LANDING PAGE */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stores" element={<Stores />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgot" element={<ForgotPassword />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
