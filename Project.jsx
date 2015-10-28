Project = React.createClass({

	propTypes: {
    // This component gets the log to display through a React prop.
    // We can use propTypes to indicate it is required
    project: React.PropTypes.object.isRequired
  },

	render(){
		return(
			<div className="project">
				<h1>{this.props.project.name}</h1>
				{//<img className="preview" src={this.props.project.img}></img>
			}
				<br/>
				<span className="descr">Info: {this.props.project.desc}</span>
				
				<br />
				<span className="tech">Tech: {this.props.project.tools}</span>
				<br />
				<a className="repo" href={this.props.project.repo}>Repo</a> {this.props.project.url ? <a className="deploy" href={this.props.project.url}>Live</a> : '' }
				
			</div>

			);
	}


});