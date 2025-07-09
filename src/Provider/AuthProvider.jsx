import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register new user with email and password
  const registerWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  // Login user with email and password
  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  // Update user profile name and photo
  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData)
      .finally(() => setLoading(false));
  };

  // Login with Google
  const handelLoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .finally(() => setLoading(false));
  };

  const authInfo = {
    user,
    setUser,
    loading,
    logout,
    registerWithEmailPassword,
    loginWithEmailPassword,
    updateUserProfile,
    handelLoginWithGoogle,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Show loading spinner while loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--color-surface)]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--color-primary)]"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;