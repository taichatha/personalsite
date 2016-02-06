Home = React.createClass({

	render(){
		var divStyle 
		return(
			<div className="main">
				
				<div className="zWrapper">
						<table className="about">
							<About />
						</table>
						<table className="services">
							<Services />
						</table>
						<table className="contact">
							<Contact />
						</table>
				</div>				
			</div>
			);

	}
});