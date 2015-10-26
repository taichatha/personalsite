App = React.createClass({
  // This mixin makes the getMeteorData method work
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>TC</h1>
          <p> about services portfolio cv </p>
        </header>
        
        
        <About />
        <CV />
        <Services />
        <Portfolio />
      </div>
    );
  }
});