  var div = React.DOM.div
  var h1 = React.DOM.h1

  // Create a new component, and this new component should produce some HTML.
  // below: use () for multi-line expression
  var MyFirstComponent = (
    // why we need the following div wrapper: it creates a collection of elements, like getElementsByTagName.
    // like var x = 1, 2, 3, 4, 5 would output 5, but making var x = [1, 2, 3, 4, 5] gives a collection.
    // also below is same as React.DOM.div(null, ...)
    div(null,  //this null is used to add attributes
      h1 (null, "Hello React!!")
    )
  )

  // Take this component's generated HTML and put it on the page.
  ReactDOM.render(MyFirstComponent, document.getElementById('app'))
