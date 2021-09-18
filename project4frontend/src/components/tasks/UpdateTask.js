import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

const UpdateTask = () => {

    const [task_title, setTask_title] = useState("")
    const [task_icon_url, setTask_icon_url] = useState("")
    const [task_point_value, setTask_point_value] = useState("")
    const [complete, setComplete] = useState("")
    const [user, setUser] = useState("")
    // const [user_points, setUser_points] = useState("")
    // const [username, setUsername] = useState("")
    // const [user_icon_url, setUser_icon_url] = useState("")
    const history = useHistory()
    const { id } = useParams()

    const loadTasks =  async () => {
        const { data } = await axios.get(`http://localhost:8000/api/tasks/${id}/`)
        console.log(data)
        setTask_title(data.task_title)
        setTask_icon_url(data.task_icon_url)
        setTask_point_value(data.task_point_value)
        setComplete(data.complete)
        setUser(data.user)
    }

    // const loadUserPoints = async () => {
    //     const { data } = await axios.get(`http://localhost:8000/api/users/${id}`)
    //     setUser_points(data.user_points)
    //     setUsername(data.username)
    //     setUser_icon_url(data.user_icon_url)
    // }

    useEffect(() => {
        loadTasks()
        // loadUserPoints()
    }, [])

    const updateTaskInfo = async () => {
        let formField = new FormData()

        formField.append('task_title', task_title)
        formField.append('task_icon_url', task_icon_url)
        formField.append('task_point_value', task_point_value)
        formField.append('complete', complete)
        formField.append('user', user)

        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/tasks/${id}/`,
            data: formField
        }).then((res) => {
            console.log(res.data)
            history.push('/tasks')
        })
    }

    // const updateUserPoints = async () => {
    //     let formField = new FormData()

    //     formField.append('username', username)
    //     formField.append('task_icon_url', task_icon_url)
    //     formField.append('user_points', user_points)

    //     await axios({
    //         method: 'PUT',
    //         url: `http://localhost:8000/api/users/${id}/`,
    //         data: formField
    //     }).then((res) => {
    //         console.log(res.data)
    //         // history.push('/tasks')
    //     })
    // }

    return (
        <div>
            <h2>Update Task</h2>
            <div className="form-group">
                <div className="form-group">
                    <label>Enter new task:</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter task"
                        name="task_title"
                        value={task_title}
                        onChange={(e) => setTask_title(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Enter new task icon url (Current icon: <img alt="" src={task_icon_url} height="50" width="50" />): </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter task icon url"
                        name="task_icon_url"
                        value={task_icon_url}
                        onChange={(e) => setTask_icon_url(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Enter new point value:</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder={task_point_value}
                        name="task_point_value"
                        value={task_point_value}
                        onChange={(e) => setTask_point_value(e.target.value)}
                    />
                </div>
                {/* <div className="form-group">
                    <label>If updated, user points will be:</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder={task_point_value}
                        name="user_points"
                        value={user_points}
                        onChange={(e) => setUser_points(e.target.value)}
                    />
                </div> */}
                {/* <Button className="btn btn-success" onClick={updateUserPoints} >Update User Points</Button> */}
                <Button className="btn btn-success" onClick={updateTaskInfo} >Update Task</Button>
            </div>  
        </div>
    )
}

export default UpdateTask
