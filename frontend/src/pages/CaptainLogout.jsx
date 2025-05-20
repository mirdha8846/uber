
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`http://localhost:5000/api/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captainlogin')
        }
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout