import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const AddReward = () => {

    const [reward_title, setReward_title] = useState("")
    const [reward_icon_url, setReward_icon_url] = useState("")
    const [reward_point_value, setReward_point_value] = useState("")
    const [reward_earned, setReward_earned] = useState(false)
    const [user, setUser] = useState(1)
    const history = useHistory()

    const AddNewReward = async () => {
        let formField = new FormData()

        formField.append('reward_title', reward_title)
        formField.append('reward_icon_url', reward_icon_url)
        formField.append('reward_point_value', reward_point_value)
        formField.append('reward_earned', reward_earned)
        formField.append('user', user)

        await axios({
            method:'POST',
            url: 'http://localhost:8000/api/rewards/',
            data: formField
        }).then((res) => {
            console.log(res.data)
            history.push('/rewards')
        })
    }

    return (
        <div className="container">
            <h2>Add New Reward</h2>
            <div className="form-group">
                <div className="form-group">
                    <label>Enter reward:</label>
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
                    <label>Enter reward icon url:</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter reward icon url"
                        name="reward_icon_url"
                        value={reward_icon_url}
                        onChange={(e) => setReward_icon_url(e.target.value)}
                    />
                </div>
                <label>Selected Icon:</label>
                <img alt="" src={reward_icon_url} height="50" width="50" />
                <div className="form-group">
                    <label>Enter point value to earn reward:</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="reward_point_value"
                        value={reward_point_value}
                        onChange={(e) => setReward_point_value(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Is task completed?</label>
                    <br/>
                    <input
                        type="checkbox"
                        name="reward_earned"
                        checked={reward_earned}
                        onChange={(e) => setReward_earned(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Enter username:</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder={user}
                        name="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <Button className="btn btn-success" onClick={AddNewReward} >Add New Reward</Button>
            </div>  
        </div>
    )
}

export default AddReward
