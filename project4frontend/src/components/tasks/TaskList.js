import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const listAllTasks = async () => {
        const res = await axios.get('http://localhost:8000/api/tasks')
        console.log(res.data)
        setTasks(res.data)
    }

    useEffect(() => {
        listAllTasks();
    }, [])

    return (
        <div>
            <h2>All Tasks</h2>
            <div className="user-cards">
                {
                    tasks.map((task) => (
                        <Card className="m-2 rounded shadow-lg" style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={task.task_icon_url} />
                            <Card.Body>
                                <Card.Title>{task.task_title}</Card.Title>
                                <Card.Text>Points: {task.task_point_value}</Card.Text>
                                <Link className="btn btn-primary" to={`/tasks/${task.id}`} >See Task</Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskList
