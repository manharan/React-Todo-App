//creaate nested react component
var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');


// create react component
//add props as a attriubte in reactjs
//pass message dynamcally

//if any attribute is not passing its access the values form getDefaultMessage method;

var objOne = {name:'Manaharan lal Sahu', location: 'Bangalore India'}

var objTwo = {age: 39, ...objOne}

console.log(objTwo);



ReactDOM.render(
  <Main />, document.getElementById('app')
);
