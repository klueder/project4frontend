import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RewardList = () => {

    const [rewards, setRewards] = useState([])

    const listAllRewards = async () => {
        const res = await axios.get('http://localhost:8000/api/rewards')
        console.log(res.data)
        setRewards(res.data)
    }

    useEffect(() => {
        listAllRewards();
    }, [])

    return (
        <div>
            <h2>All Rewards</h2>
            <div className="user-cards">
                {
                    rewards.map((reward) => (
                        <Card className="m-2 rounded shadow-lg" style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={reward.reward_icon_url} />
                            <Card.Body>
                                <Card.Title>{reward.reward_title}</Card.Title>
                                <Card.Text>Points: {reward.reward_point_value}</Card.Text>
                                <Link className="btn btn-primary" to={`/rewards/${reward.id}`} >See Reward</Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default RewardList
