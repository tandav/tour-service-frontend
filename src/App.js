import React, { Component } from 'react'
import { host } from './index'
import Tours from './Tours'
import './Tours.css'
import './App.css'


class App extends Component {

  state = {
    tours: undefined,
    user_id: 3,
  }

  componentDidMount() {
    fetch(host + '/tours')
      .then(response => { if (response.ok) return response.json() })
      .then(tours => this.setState({tours: tours}))
  }

  book(tour_id) {
    let opts = { 
      method: 'POST',
      headers: { 
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        tour_id: tour_id,
      })
    }
    fetch(host + '/orders', opts)
    .then(response => { if (response.ok) console.log('POSTED SUCCESSFULLY') })
  }

  render() {
    if (this.state.tours) {
      return (
        <div className='App'>
          <Tours tours={ this.state.tours } onClick={(tour_id) => this.book(tour_id)}/>
        </div>
      )
    }
    else {
      return <h1>Loading...</h1>
    }
  }
}

export default App
