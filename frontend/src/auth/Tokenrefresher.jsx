import React, { useEffect } from 'react';
import axios from 'axios';
import { setToken } from './Settoken';

export default function TokenRefresher(props){
  useEffect(() => {
    const refresh = localStorage.getItem('refreshToken');
    const refreshToken = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/refresh-token',{}, { headers: { Authorization: `Bearer ${refresh}` } });
            const newToken = response.data.access_token;
            localStorage.setItem('token', newToken);
            const newRefreshToken = response.data.refresh_token;
            localStorage.setItem('refreshToken', newRefreshToken);
            setToken(newToken);
        } catch (error) {
            alert('Error refreshing token:', error);
        }
    };

    const intervalId = setInterval(refreshToken, 10 * 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};
