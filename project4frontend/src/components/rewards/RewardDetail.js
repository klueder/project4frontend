import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const RewardDetail = () => {

    const [reward, setReward] = useState("")

    const { id } = useParams()
    const history = useHistory()

    const getReward = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/rewards/${id}`)
        console.log(data)
        setReward(data)
    }

    useEffect(() => {
        getReward();
    }, [])

    const deleteReward = (id) => {
        axios.delete(`http://localhost:8000/api/rewards/${id}/`).then((res) => {
            console.log(res)
            history.push('/rewards')
        })
    }

    return (
        <div>
            <h2>Reward Details</h2>
            <div className="single-user-detail">
                <img alt="" src={reward.reward_icon_url} height="200" width="200" />
                <p>{reward.reward_title}</p>
                <p>{reward.reward_point_value}</p>
                <Link className="btn btn-primary m-2" to={`/rewards/${reward.id}/update`} >Update</Link>
                <Link className="btn btn-danger m-2" onClick={() => deleteReward(reward.id)} to='/' >Delete</Link>
            </div>
        </div>
    )
}

export default RewardDetail
