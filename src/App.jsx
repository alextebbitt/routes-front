import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PrivateZone from "./guards/PrivateZone";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import AdminZone from "./guards/AdminZone";
import RoutesView from './components/RoutesView/RoutesView';
import RouteDetail from './components/RouteDetail/RouteDetail';
import RoutesByTag from "./components/RoutesByTag/RoutesByTag";
import Landing from "./components/Landing/Landing";

import LikedRoutes from "./components/LikedRoutes/LikedRoutes";
import RoutesNearBy from "./components/RoutesNearBy/RoutesNearBy";
import LandingZone from "./guards/LandingZone";
import Suggestion from "./components/Suggestion/Suggestion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<PrivateZone><Home /></PrivateZone>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<PrivateZone><Profile /></PrivateZone>}
          />
          <Route
            path="/"
            element={<LandingZone><Landing/></LandingZone>}
          />
          <Route
            path="/admin"
            element={<AdminZone><Admin /></AdminZone>}
          />
          <Route
            path="/routes"
            element={<PrivateZone><RoutesView /></PrivateZone>}
          />
          <Route
            path="/route/:id"
            element={<PrivateZone><RouteDetail /></PrivateZone>}
          />
          <Route
            path="/tag/:tag"
            element={<PrivateZone><RoutesByTag /></PrivateZone>}
          />
          <Route
            path="/liked"
            element={<PrivateZone><LikedRoutes /></PrivateZone>}
          />
          <Route
            path="/nearby"
            element={<PrivateZone><RoutesNearBy /></PrivateZone>}
          />
           <Route
            path="/suggest"
            element={<PrivateZone><Suggestion/></PrivateZone>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
