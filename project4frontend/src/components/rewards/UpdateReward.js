import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

const UpdateReward = () => {

    const [reward_title, setReward_title] = useState("")
    const [reward_icon_url, setReward_icon_url] = useState("")
    const [reward_point_value, setReward_point_value] = useState("")
    const [reward_earned, setReward_earned] = useState("")
    const [user, setUser] = useState("")
    const history = useHistory()
    const { id } = useParams()

    const loadRewards = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/rewards/${id}/`)
        console.log(data)
        setReward_title(data.reward_title)
        setReward_icon_url(data.reward_icon_url)
        setReward_point_value(data.reward_point_value)
        setReward_earned(data.reward_earned)
        setUser(data.user)
    }

    useEffect(() => {
        loadRewards()
    }, [])

    const updateRewardInfo = async () => {
        let formField = new FormData()

        formField.append('reward_title', reward_title)
        formField.append('reward_icon_url', reward_icon_url)
        formField.append('reward_point_value', reward_point_value)
        formField.append('reward_earned', reward_earned)
        formField.append('user', user)

        await axios({
            method:'PUT',
            url: `http://localhost:8000/api/rewards/${id}/`,
            data: formField
        }).then((res) => {
            console.log(res.data)
            history.push('/rewards')
        })
    }
    
    return (
        <div>
            <h2>Update Reward</h2>
            <div className="form-group">
                <div className="form-group">
                    <label>Enter new reward:</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter reward"
                        name="reward_title"
                        value={reward_title}
                        onChange={(e) => setReward_title(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Enter new reward icon url (Current icon: <img alt="" src={reward_icon_url} height="50" width="50" />): </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter reward icon url"
                        name="reward_icon_url"
                        value={reward_icon_url}
                        onChange={(e) => setReward_icon_url(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Enter new point value:</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder={reward_point_value}
                        name="reward_point_value"
                        value={reward_point_value}
                        onChange={(e) => setReward_point_value(e.target.value)}
                    />
                </div>
                <Button className="btn btn-success" onClick={updateRewardInfo} >Update Reward</Button>
            </div>  
        </div>
    )
}

export default UpdateReward
