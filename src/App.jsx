import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cardetails from "./pages/Cardetails";
import Cars from "./pages/Cars";
import Mybookings from "./pages/Mybookings";
import Dashboard from "./pages/owner/Dashboard";

import Managecars from "./pages/owner/Managecars";
import Managebookings from "./pages/owner/Managebookings";
import Addcar from "./pages/owner/Addcar";
import Layout from "./pages/owner/Layout";
import Login from "./components/owner/Login";


function App() {
  const [login, Setshowlogin] = useState(false);
  const isOwnerpath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerpath && <Navbar SetshowLogin={Setshowlogin} />}
      {login && <Login onClose={() => Setshowlogin(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetails/:id" element={<Cardetails />} />
        <Route path="/cars/cardetails/:id" element={<Cardetails />} />
        <Route path="/my-bookings" element={<Mybookings />} />
           <Route path="/owner/*" element={<Layout />}>
          <Route index  element={<Dashboard />} />
          <Route path="manage-cars" element={<Managecars />} />
          <Route path="manage-bookings" element={<Managebookings />} />
          <Route path="add-car" element={<Addcar />} />
        </Route>
      </Routes>

      {!isOwnerpath && <Footer />}
    </>
  );
}

export default App;
