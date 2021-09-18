import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './components/UserList';
import TaskList from './components/tasks/TaskList';
import AddUser from './components/AddUser';
import NavBar from './components/nav/NavBar';
import UserDetail from './components/UserDetail';
import UpdateUser from './components/UpdateUser';
import TaskDetail from './components/tasks/TaskDetail';
import AddTask from './components/tasks/AddTask';
import UpdateTask from './components/tasks/UpdateTask';
import RewardList from './components/rewards/RewardList'
import AddReward from './components/rewards/AddReward'
import UpdateReward from './components/rewards/UpdateReward'
import RewardDetail from './components/rewards/RewardDetail'
import UpdateUserPoints from './components/UpdateUserPoints';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path= "/" component={UserList} />
          <Route exact path= "/adduser" component={AddUser} />
          <Route exact path= "/users/:id" component={UserDetail} />
          <Route exact path= "/users/:id/update" component={UpdateUser} />
          <Route exact path= "/users/:id/points" component={UpdateUserPoints} />
          <Route exact path= "/tasks" component={TaskList} />
          <Route exact path= "/addtask" component={AddTask} />
          <Route exact path= "/tasks/:id" component={TaskDetail} />
          <Route exact path= "/tasks/:id/update" component={UpdateTask} />
          <Route exact path= "/rewards" component={RewardList} />
          <Route exact path= "/addreward" component={AddReward} />
          <Route exact path= "/rewards/:id" component={RewardDetail} />
          <Route exact path= "/rewards/:id/update" component={UpdateReward} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
