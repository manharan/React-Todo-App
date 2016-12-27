var React = require('react');

var TodoList = React.createClass({

  render: function () {

    console.log(this.props);

    function getList () {
      if(todoListArr.length > 0) {
        var list;
        return list =  todoListArr.map(function (todo) {
          return <li key={todo.toString()}> {todo} </li>
        } )
      }
    }
    var {todoListArr} = this.props
    return (
      <ul>
        {getList()}
      </ul>
    )
  }
})


module.exports = TodoList;
