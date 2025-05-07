// src/App.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import AppRoutes from "./routes/AppRoutes";

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
      <AppRoutes user={user} />
      <Footer />
    </>
  );
}

export default App;
