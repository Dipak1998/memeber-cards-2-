import React, { Component } from 'react'
import CardList from './components/CardList'
import { members } from './user_data'
class App extends Component {
  // es6 module
  constructor() {
    // constructor is the place of initialize the data, state etc.
    super()
    this.state = {
      members: [],
    }
    console.log('constructor call ', this.state.members)
  }
  async componentDidMount() {
    await this.setState({ members: members })
    console.log('componentDidMount call ', this.state.members)

    this.fetchMemebr()
  }
  fetchMemebr = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          members: data,
        })
      })
      .catch((e) => {
        console.log('Error is :', e)
      })
  }
  render() {
    console.log('render is called...')
    return (
      <div className=''>
        <h1>Hello Rohan</h1>
        <CardList members={this.state.members} />
      </div>
    )
  }
}

export default App
