import React, {Component} from 'react';

export class ListItem extends Component {
  render () {
    return (
      <li>{this.props.quantity}+{this.props.children}</li>
    )
  }
}


export class GroceryList extends Component {
  render () {
    return (
      <ul>
        <ListItem quantity="1">Bread</ListItem>
        <ListItem quantity="4">Bread</ListItem>
        <ListItem quantity="8">Bread</ListItem>
      </ul>

    )
  }
}
