  var div = React.DOM.div
  var h1 = React.DOM.h1

  // What if I want my own functional component? React allows me to create my own through .createClass
  // createClass needs render method, and all it does is return whatever.
  var MyTitle = React.createClass({
  	// same as render: function() {...}
  	render () {
  		return ( // use () to return multi-line.
  			// div(null, ...) this null is used to add attributes.
  			// this null can be: div({style:{color:'red'}}, ...)
  			div(null,
  				// h1(null, "Hello my Title")
  				// how do you use Class? instantiate it. can use keyword new, but React helps instantiate, see note in MyFirstComponent.
  				// h1(null, this.props.title) // h1({style:{color:'red'}}, "Hello React!!")
  				h1({style: {color: this.props.color}}, this.props.title)
  			)
  		)
  	}
  })

  // Create a new component, and this new component should produce some HTML.
  // below: use () for multi-line expression
  var MyFirstComponent = (
    div(null,  //this null is used to add attributes
    // React instantiates class with React.createElement(MyTitle, null)
		// this is an instance:
		React.createElement(MyTitle, {title: 'My first title'})
    )
  )

  // Take this component's generated HTML and put it on the page.
  ReactDOM.render(MyFirstComponent, document.getElementById('app'))
