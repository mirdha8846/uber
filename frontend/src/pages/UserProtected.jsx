import React from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
function UserProtected({children}) {
    const token=localStorage.getItem('token')
    const [ isLoading, setIsLoading ] = useState(true)
    const { user, setUser } = useContext(userDataContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        axios.get('http://localhost:5000/api/users/profile',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            if (response.status === 200) {

                // setUser(response.data.user)
                setIsLoading(false)
            }
        }).catch(error => {
            localStorage.removeItem('token')
            navigate('/login')
        })
    }, [token, navigate])
    
    if (isLoading) {
      return <div>Loading...</div>
    }
  return (
    <div>{children}</div>
  )
}

export default UserProtected