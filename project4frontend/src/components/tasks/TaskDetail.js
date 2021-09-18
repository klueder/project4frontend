import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const TaskDetail = () => {

    const [task, setTask] = useState("")

    const { id } = useParams()
    const history = useHistory()

    const getTask = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/tasks/${id}`)
        console.log(data)
        setTask(data)
    }

    useEffect(() => {
        getTask();
    }, [])

    const deleteTask = (id) => {
        axios.delete(`http://localhost:8000/api/tasks/${id}/`).then((res) => {
            console.log(res)
            history.push('/tasks')
        })
    }

    return (
        <div>
            <h2>Task Details</h2>
            <div className="single-user-detail">
                <img alt="" src={task.task_icon_url} height="200" width="200" />
                <p>{task.task_title}</p>
                <p>{task.task_point_value}</p>
                <Link className="btn btn-primary m-2" to={`/tasks/${task.id}/update`} >Update</Link>
                <Link className="btn btn-danger m-2" onClick={() => deleteTask(task.id)} to='/' >Delete</Link>
            </div>
        </div>
    )
}

export default TaskDetail
