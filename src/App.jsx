// src/App.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  if (user) return <Dashboard onLogout={() => setUser(null)} />;

  return (
    <div>
      {showRegister ? (
        <>
          <Register onRegister={() => setShowRegister(false)} />
          <p>
            Already have an account?{" "}
            <button onClick={() => setShowRegister(false)}>Login</button>
          </p>
        </>
      ) : (
        <>
          <Login onLogin={() => {}} />
          <p>
            No account?{" "}
            <button onClick={() => setShowRegister(true)}>Register</button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
