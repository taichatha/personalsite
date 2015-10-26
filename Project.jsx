Project = React.createClass({

	propTypes: {
    // This component gets the log to display through a React prop.
    // We can use propTypes to indicate it is required
    project: React.PropTypes.object.isRequired
  },

	render(){
		return(
			<div className={this.props.project.name}>
				<h1>{this.props.project.name}</h1>
				<br/>
				<img className="preview" src={this.props.project.img}></img>
				<br/>
				<span className="descr">Info: {this.props.project.desc}</span>
				
				<br />
				
				<a className="repo" href={this.props.project.repo}>Repo</a> <a className="deploy" href={this.props.project.url}>Live</a>
				
			</div>

			);
	}


});