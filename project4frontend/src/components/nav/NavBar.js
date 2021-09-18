import React from 'react'
import '../../App.css'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// import App from '../../App'

const NavBar = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <NavLink className="all-users-nav" to="/" >All Users</NavLink>
                    <NavLink className="add-user-nav" to="/adduser" >Add User</NavLink>
                    <NavLink className="all-tasks-nav" to="/tasks" >All Tasks</NavLink>
                    <NavLink className="add-task-nav" to="/addtask" >Add Task</NavLink>
                    <NavLink className="all-rewards-nav" to="/rewards" >All Rewards</NavLink>
                    <NavLink className="add-reward-nav" to="/addreward" >Add Reward</NavLink>
                </Nav>
        
        </Navbar>
        </div>
    )
}

export default NavBar
