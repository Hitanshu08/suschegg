import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";
import { SignUpPage } from "../SignUpPage/SignUpPage";
import { TermsConditionsPage } from "../TermsConditionsPage/TermsConditionsPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Sidebar } from "../Sidebar/Sidebar";
import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { Store } from "../Store/Store";
import { Account } from "../Account/Account";
import "./Main.css";
import { Subscription } from "../Subscription/Subscription";

export const Main = () => {
  return (
    <GoogleOAuthProvider clientId="14833948766-vgrlster9sc66ojospjqp5aa9cfh2l10.apps.googleusercontent.com">
      <Router>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/account"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Account />
                  </div>
                </>
              }
            />
            <Route
              path="/paraphrase"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/store"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Store />
                  </div>
                </>
              }
            />
            <Route
              path="/subscription"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Subscription />
                  </div>
                </>
              }
            />
            <Route
              path="/status"
              element={
                <>
                  <Header />
                  <div
                    style={{ display: "flex", height: "calc(100vh - 3rem)" }}>
                    <Sidebar />
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/sign-up"
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
