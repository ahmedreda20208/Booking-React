// src/components/utilis/Utilis.js

export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  