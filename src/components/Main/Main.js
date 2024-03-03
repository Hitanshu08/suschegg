import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import { TermsConditionsPage } from "../TermsConditionsPage/TermsConditionsPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Sidebar } from "../Sidebar/Sidebar";
import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { Store } from "../Store/Store";
import { Account } from "../Account/Account";
import "./Main.css";
import { Subscription } from "../Subscription/Subscription";
import GPT from "../GPT/GPT";

const Main = () => {
  const [user, setUser] = useState({});

  return (
    <GoogleOAuthProvider clientId="14833948766-vgrlster9sc66ojospjqp5aa9cfh2l10.apps.googleusercontent.com">
      <Router>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" , backgroundColor: '#212121'}}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/account"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Account user={user} />
                  </div>
                </>
              }
            />
            <Route
              path="/paraphrase"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/store"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Store />
                  </div>
                </>
              }
            />
            <Route
              path="/subscription"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Subscription />
                  </div>
                </>
              }
            />
            <Route
              path="/status"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/gpt"
              element={
                <>
                  {/* <Header /> */}
                  <div style={{ display: "flex", height: "100%" }}>
                    <Sidebar
                      user={user}
                      setUser={setUser}
                    />
                    <GPT
                      setUser={setUser}
                      user={user}
                    />
                  </div>
                </>
              }
            />
            <Route
              path="/login"
              element={<LoginPage setUser={setUser} />}
            />
            <Route
              path="/signup"
              element={<SignUpPage />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsConditionsPage />}
            />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default Main;
