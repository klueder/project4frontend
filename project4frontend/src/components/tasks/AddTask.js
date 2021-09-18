import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const AddTask = () => {

    const [task_title, setTask_title] = useState("")
    const [task_icon_url, setTask_icon_url] = useState("")
    const [task_point_value, setTask_point_value] = useState("")
    const [complete, setComplete] = useState(false)
    const [user, setUser] = useState(1)
    const history = useHistory()

    const AddNewTask = async () => {
        let formField = new FormData()

        formField.append('task_title', task_title)
        formField.append('task_icon_url', task_icon_url)
        formField.append('task_point_value', task_point_value)
        formField.append('complete', complete)
        formField.append('user', user)

        await axios({
            method: 'POST',
            url: 'http://localhost:8000/api/tasks/',
            data: formField
        }).then((res) => {
            console.log(res.data)
            history.push('/tasks')
        })
    }

    return (
        <div className="container" >
            <h2>Add New Task</h2>
            <div className="form-group">
                <div className="form-group">
                    <label>Enter task:</label>
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
                    <label>Enter task icon url:</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter task icon url"
                        name="task_icon_url"
                        value={task_icon_url}
                        onChange={(e) => setTask_icon_url(e.target.value)}
                    />
                </div>
                <label>Selected Icon:</label>
                <img alt="" src={task_icon_url} height="50" width="50" />
                <div className="form-group">
                    <label>Enter point value for completing task:</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="task_point_value"
                        value={task_point_value}
                        onChange={(e) => setTask_point_value(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Is task completed?</label>
                    <br/>
                    <input
                        type="checkbox"
                        name="complete"
                        checked={complete}
                        onChange={(e) => setComplete(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Enter username:</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder={user}
                        name="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <Button className="btn btn-success" onClick={AddNewTask} >Add New Task</Button>
            </div>
        </div>
    )
}

export default AddTask
