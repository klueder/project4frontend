import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

const UpdateUser = () => {

    const [user_icon_url, setUser_icon_url] = useState("")
    const [username, setUsername] = useState("")
    const history = useHistory()
    const { id } = useParams()

    const loadUsers = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/users/${id}/`)
        console.log(data)
        setUser_icon_url(data.user_icon_url)
        setUsername(data.username)
    }

    useEffect(() => {
        loadUsers()
    },[])

    // Update User Info function
    const UpdateUserInfo = async () => {
        let formField = new FormData()

        formField.append('username', username)
        formField.append('user_icon_url', user_icon_url)
        

        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/users/${id}/`,
            data: formField
        }).then((res) => {
            console.log(res.data)
            history.push('/')
        })
    }

    return (
        <div>
            <h2>Update User</h2>
            <div className="form-group">
                        <div className="form-group">
                            <label>Enter new username:</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Enter new icon url (Current icon: <img alt="" src={user_icon_url} height="50" width="50" />):</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter icon url"
                                name="user_icon_url"
                                value={user_icon_url}
                                onChange={(e) => setUser_icon_url(e.target.value)}
                            />
                        </div>
                        <Button className="btn btn-success" onClick={UpdateUserInfo} > Update User</Button>
            </div>
        </div>
    )
}

export default UpdateUser
