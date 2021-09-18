import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const UpdateUserPoints = () => {

    const [siteUser, setSiteUser] = useState("")
    const [tasks, setTasks] = useState([])
    const [rewards, setRewards] = useState([])

    const  { id } = useParams()
    const history = useHistory()

    const getUser = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/users/${id}`)
        // console.log(data)
        setSiteUser(data)
    }

    const getAllTasks = async () => {
        const res = await axios.get(`http://localhost:8000/api/tasks`)
        // console.log(res.data)
        setTasks(res.data)
        // console.log(tasks)
    }

    const getAllRewards = async () => {
        const res = await axios.get(`http://localhost:8000/api/rewards`)
        // console.log(res.data)
        setRewards(res.data)
        // console.log(tasks)
    }

    useEffect(() => {
        getUser();
        getAllTasks();
        getAllRewards();
    }, [])

    const addSiteUserPoints =  async (taskPoints) => {
        siteUser.user_points += taskPoints
        console.log(siteUser.user_points)
    }

    const subSiteUserPoints = (taskPoints) => {
        siteUser.user_points -= taskPoints
        // console.log(siteUser.user_points)
    }

    return (
        <div>
                        <div>
                <h2>User Details</h2>
                <div className="single-user-detail">
                    <img alt="" src={siteUser.user_icon_url} height="200" width="200" />
                    <p>{siteUser.username}</p>
                    <p>Points: {siteUser.user_points}</p>
                </div>
            </div>
            <h3>All Rewards</h3>
            <div className="user-cards">
                {
                    rewards.map((reward) => (
                        <Card className="m-2 rounded shadow-lg" style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={reward.reward_icon_url} />
                            <Card.Body>
                                <Card.Title>{reward.reward_title}</Card.Title>
                                <Card.Text>Points: {reward.reward_point_value}</Card.Text>
                                <Link className="btn btn-primary" onClick={() => subSiteUserPoints(reward.reward_point_value)} to {...`/users/${siteUser.id}`}>Redeem Reward</Link>
                                <Link className="btn btn-primary" to={`/rewards/${reward.id}`} >See Reward</Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
            <h3>All Tasks</h3>
            <div className="user-cards">
            {
                tasks.map((task) => (
                    <Card className="m-2 rounded shadow-lg" style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={task.task_icon_url} />
                        <Card.Body>
                            <Card.Title>{task.task_title}</Card.Title>
                            <Card.Text>Points: {task.task_point_value}</Card.Text>
                            <Link className="btn btn-primary" onClick={() => addSiteUserPoints(task.task_point_value)} to {...`/users/${siteUser.id}`}>Complete Task</Link>
                            <Link className="btn btn-primary" to={`/tasks/${task.id}`} >See Task</Link>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>
        </div>
    )
}

export default UpdateUserPoints
