var React = require('react');
var TodoForm = require('TodoForm');


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

    function getList () {
      if(todoListArr.length > 0) {
        var list;
        return list =  todoListArr.map(function (todo) {
          return <li key={todo.toString()}> {todo} </li>
        } )

      }

    }
    return (
      <div>
          <h1> TODO LIST</h1>
          <TodoForm addList={this.handler}/>
          <ul>
            {getList()}
          </ul>
      </div>
    )
  }
})

module.exports = Main;
