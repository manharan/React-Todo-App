//creaate nested react component
var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var TodoForm = require('TodoForm');
var About = require('About');



// create react component
//add props as a attriubte in reactjs
//pass message dynamcally

//if any attribute is not passing its access the values form getDefaultMessage method;

var objOne = {name:'Manaharan lal Sahu', location: 'Bangalore India'}

var objTwo = {age: 39, ...objOne}

console.log(objTwo);



ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='about' component={About}/>
        <Route path='create' component={TodoForm}/>
        
      </Route>
  </Router>
  , document.getElementById('app')
);
