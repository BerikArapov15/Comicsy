import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { API } from '../helpers/consts';

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async (user) => {
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    let formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);

    try {
      const res = await axios.post(`${API}api/v1/account/register/`, formData, config);
      // navigate('/login');
    } catch (e) {
      console.log(e);
      setError('error occured');
    }
  };

  async function login(email, password) {
    console.log(email, password);
    const config = {
      
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      let res = await axios.post(`${API}api/v1/account/login/`, formData, config);
      localStorage.setItem('token', JSON.stringify(res.data));
      localStorage.setItem('email', email);
      setUser(email);
      navigate('/');
    } catch (error) {
      setError('error occured');
    }
  }

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/v1/account/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );
        // console.log(res)
      localStorage.setItem(
        'token',
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let userName = localStorage.getItem('email');
      setUser(userName);
    } catch (error) {
      logout();
    }
  }

  async function handleCode(code) {

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    let formData = new FormData();

    formData.append('activation_code', code);

    let res = await axios.post(`${API}api/v1/account/activation/`, formData);
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser('');
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        user,
        error,
        checkAuth,
        logout,
        handleCode,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;