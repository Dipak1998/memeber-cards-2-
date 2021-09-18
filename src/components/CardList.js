// whole cards
import React, { Component } from 'react'
import Card from './Card'

export default class CardList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div>
          <h1>Members</h1>
        </div>
        <Card members={this.props.members} />
      </>
    )
  }
}
