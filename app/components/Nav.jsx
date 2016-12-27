var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function () {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className="menu-text">MY TODO APP</li>
            <li>
              <IndexLink to='/'>Todo List </IndexLink>
            </li>
            <li>
              <Link to='create'>Create Todo </Link>
            </li>
            <li>
              <Link to='about'> About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav
