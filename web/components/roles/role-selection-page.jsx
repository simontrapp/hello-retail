import React, { Component } from 'react'
import { Link } from 'react-router'

class RoleSelectionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h4><em>Select Role</em></h4>
        <div><Link to={'/merchant/'}> Merchant </Link></div>
        <div><Link to={'/photographer/'}> Photographer </Link></div>
        <div><Link to={'/categories/'}> Customer </Link></div>
      </div>
    )
  }
}

export default RoleSelectionPage
