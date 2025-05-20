import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            if (!token) {
                console.error('No token found');
                navigate('/login');
                return;
            }

            try {
                // Make the API call to logout
                const response = await axios.get('http://localhost:5000/api/users/logout', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Logout error:', error.response?.data || error.message);
            }
        };

        logoutUser();
    }, [token, navigate]);

    return <div>Logging out...</div>;
};

export default UserLogout;
