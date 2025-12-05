import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load user and users from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    setLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = async (email, password) => {
    // Find user in localStorage users array
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      return { success: true };
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
  };

  const register = async (name, email, password, rePassword, phone) => {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      return {
        success: false,
        message: 'Email already exists'
      };
    }

    // Create new user
    const newUser = {
      name,
      email,
      password,
      phone,
      id: Date.now().toString(), // Simple ID generation
      appointments: [],
      purchases: []
    };

    // Add to users array
    setUsers(prevUsers => [...prevUsers, newUser]);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const addAppointment = (appointment) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      appointments: [...user.appointments, { ...appointment, id: Date.now().toString() }]
    };
    setUser(updatedUser);
    // Update in users array
    setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? updatedUser : u));
  };

  const addPurchase = (purchase) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      purchases: [...user.purchases, { ...purchase, id: Date.now().toString() }]
    };
    setUser(updatedUser);
    // Update in users array
    setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? updatedUser : u));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    addAppointment,
    addPurchase,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
