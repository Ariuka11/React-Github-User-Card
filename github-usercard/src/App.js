import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      profile: {},
      username: 'ariuka11',
      followers: []
    }
  }
  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log(res)
        this.setState({profile: res.data})
      })
      .catch(err => {
        console.log('Not success', err)
      })
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        console.log(res)
        this.setState({followers: res.data})
      })
      .catch(err => {
        console.log('Not success', err)
      })
  }
  render(){
    return(
      <div>
        <UserCard {...this.state.profile} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
