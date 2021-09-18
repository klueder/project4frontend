import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserList = () => {

    const [users, setUsers] = useState([])

    const listAllUsers = async () => {
        const res = await axios.get('http://localhost:8000/api/users')
        // console.log(res.data)
        setUsers(res.data)
    }

    useEffect(() => {
        listAllUsers();
    }, [])

    return (
        <div className="user-cards" >
            {
                users.map((user,index) => (
                    <Card className="m-2 rounded shadow-lg w-25" >
                    <Card.Img variant="top" src={user.user_icon_url} />
                    <Card.Body>
                        <Card.Title>
                            {user.username}
                        </Card.Title>
                        <Link className="btn btn-primary" to={`/users/${user.id}`} >See User</Link>
                    </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default UserList
