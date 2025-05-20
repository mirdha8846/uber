import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useEffect ,useState} from 'react'
import { useContext } from 'react'
import axios from 'axios'
function CaptainProteced({children}) {
    const token=localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect( () => {
        if (!token) {
            navigate('/captainLogin')
        }
        axios.get('http://localhost:5000/api/captains/profile',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        }).catch(error => {
            localStorage.removeItem('token')
            navigate('/captainLogin')})
    }, [token, navigate])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
  return (
    <div>{children}</div>
  )
}

export default CaptainProteced