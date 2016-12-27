var React = require('react');
var Nav = require('Nav');
var TodoList = require('TodoList');


//load bootstrap file
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


var Main = React.createClass({
  getInitialState: function () {
    return {todoListArr: [1, 2, 3]}
  },
  handler: function (todo) {
    var listsArr = this.state.todoListArr.slice();
    listsArr.unshift(todo);
    this.setState({
      todoListArr:listsArr
    })
  },
  render: function () {
    var {todoListArr} = this.state;
    return (
      <div>
          <Nav/>
          <div className='large-11 large-centered'>
            <h1> </h1>
            {this.props.children}
          </div>
          <TodoList todoListArr = {todoListArr}></TodoList>
      </div>
    )
  }
})

module.exports = Main;
