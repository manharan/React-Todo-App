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
          <div className='row'>
          <div className='large-6 large-centered'>
            <form onSubmit={this.addTodo}>
                  <div className='small-8 columns'>
                      <input type="text" ref='todo' placeholder="Recipient's username"/>
                  </div>
                  <div className='small-4 columns'>
                    <span className="button" id="basic-addon2"> ADD TODO </span>
                  </div>
            </form>
          </div>
          </div>
        )
    }
})


module.exports = TodoForm;
