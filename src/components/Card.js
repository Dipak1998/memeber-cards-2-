// single card
import React, { Component } from 'react'

import './Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='member__card '>
        {this.props.members.map((member, key) => {
          return (
            <div
              className='member__card-item fl w-25 bg-green washed-blue pa5'
              key={key}
            >
              <p>Id: {member.id}</p>
              <h2>Name: {member.name}</h2>
              <h3>Email: {member.email}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}
