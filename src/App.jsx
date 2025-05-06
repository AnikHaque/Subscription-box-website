// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "../src/components/Shared/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import Footer from "./components/Shared/Footer";
import SubscriptionDetail from "./components/Subscription/SubscriptionDetails";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute user={user}>
              <Blogs></Blogs>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile></Profile>
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute user={user}>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscriptions/:id"
          element={
            <ProtectedRoute user={user}>
              <SubscriptionDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
