if(Meteor.isClient){  
  const {
    Router,
    Route,
    IndexRoute,
    Link,
    history
  } = ReactRouter;

  // A history object must be created to maintain the history for our router
  const browserHistory = history.createHistory();

  // A basic app container where views will be rendered in
  App = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
      return (
        <div>
        	<header>
        	  <h1>TC</h1>
        	  <p> <Link to="/about">about</Link> <Link to="/portfolio">portfolio</Link> <Link to="/cv">cv</Link> </p>
        	</header>
        	{this.props.children}
        </div>
      );
    }
  });

  // The view to displayed as the index view
  Index = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
      return (
        <div>
          <p>This is the index route.</p>
          <Link to="/foo">Show me your foo.</Link>
          
        </div>
      );
    }
  });

  // A view for a route
  Foo = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
      return (
        <div>
          <p>This is my foo.</p>
          <Link to="/">Now go home</Link>
        </div>
      );
    }
  });

  // The component with all of the routes
  Routes = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={About}/>
            <Route path="about" component={About}/>
            <Route path="portfolio" component={Portfolio}/>
          	<Route path="cv" component={CV}/>
          </Route>
        </Router>
      );
    }
  });

  // Now render it
  $(document).ready(function() {
    React.render(<Routes/>, document.body);
  });
}