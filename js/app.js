  /* global React ReactDOM require */
  var React = require('react')
  var ReactDOM = require('react-dom')
  var div = React.DOM.div
  var h1 = React.DOM.h1

  // What if I want my own functional component? React allows me to create my own through .createClass
  // createClass needs render method, and all it does is return whatever.
  var MyTitle = require('./MyTitle')

  var TitleFact = React.createFactory(MyTitle) // create a Factory and pass in the class name.
  var ce = React.createElement // here's another way.

  var MyFirstComponent = (
    div(null,  //this null is used to add attributes
      TitleFact({title: 'Props are great!', color: 'red'}), // this is the factory created above.
      // React instantiates class with React.createElement(MyTitle, null)
  		// this is an instance:
      // creating a bunch of instances is not very D.R.Y., so create a Factory (see above).
  		React.createElement(MyTitle, {title: 'My first title'}),
      ce(MyTitle, {title: "I hate angular!", color: 'blue'}) // this is from variable ce above.
    )
  )

  // Take this component's generated HTML and put it on the page.
  ReactDOM.render(MyFirstComponent, document.getElementById('app'))
