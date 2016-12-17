var React = require('react');

var TodoForm = React.createClass({

    addTodo: function (e) {
      var todo = this.refs.todo.value;
      if(todo.length > 0){
        this.refs.todo.value = '';
        this.props.addList(todo);
      }
    },
    render: function () {
        return (
          <form onSubmit={this.addTodo}>
            <div class="input-group">
                <input type="text" class="form-control" ref='todo' placeholder="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-addon" id="basic-addon2"> ADD TODO </span>
            </div>
          </form>
        )
    }
})


module.exports = TodoForm;
