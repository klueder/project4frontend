import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const AddUser = () => {

    const [user_icon_url, setUser_icon_url] = useState("")
    const [username, setUsername] = useState("")
    const history = useHistory()

    const AddNewUser = async () => {
        let formField = new FormData()

        formField.append('username', username)
        formField.append('user_icon_url', user_icon_url)


        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/users/',
            data: formField
        }).then((res) => {
            console.log(res.data)
            history.push('/')
        })
    }

    return (
            <div className="container">
                <h2>Add New User</h2>
                    <div className="form-group">
                        <div className="form-group">
                            <label>Enter username:</label>
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
                            <label>Enter icon url:</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter icon url"
                                name="user_icon_url"
                                value={user_icon_url}
                                onChange={(e) => setUser_icon_url(e.target.value)}
                            />
                        </div>
                        <label>Selected Icon:</label>
                        <img alt="" src={user_icon_url} height="50" width="50" />
                        <br/>
                        <Button className="btn btn-success" onClick={AddNewUser} >Add New User</Button>
                    </div>
                </div>
    )
}

export default AddUser
