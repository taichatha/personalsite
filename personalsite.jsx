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
        <div className="theIsh">
        	<header>
        	  <h1><Link to="/">TC</Link></h1>
        	  <p><Link to="/portfolio">projects</Link> </p>
        	</header>
        	{this.props.children}
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
            <IndexRoute component={Home}/>
            <Route path="portfolio" component={Portfolio}/>
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