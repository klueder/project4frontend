import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const UserDetail = () => {

    const [siteUser, setSiteUser] = useState("")

    const  { id } = useParams()
    const history = useHistory()

    const getUser = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/users/${id}`)
        // console.log(data)
        setSiteUser(data)
    }

    useEffect(() => {
        getUser();
    }, [])

    // Delete User
    const deleteUser = (id) => {

        axios.delete(`http://localhost:8000/api/users/${id}/`).then((res) => {
            // console.log(res)
            history.push('/')
    })
    }

    return (
        <div>
            <h2>User Details</h2>
            <div className="single-user-detail">
                <img alt="" src={siteUser.user_icon_url} height="200" width="200" />
                <p>{siteUser.username}</p>
                <p>Points: {siteUser.user_points}</p>

                <Link className="btn btn-primary m-2" to={`/users/${siteUser.id}/update`} >Update Info</Link>
                <Link className="btn btn-primary m-2" to={`/users/${siteUser.id}/points`} >Update Points</Link>
                <Link className="btn btn-danger m-2" onClick={() => deleteUser(siteUser.id)} to={'/'} >Delete</Link>
            </div>
            
        </div>
    )
}

export default UserDetail
