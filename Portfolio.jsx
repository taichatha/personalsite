var project_list = [
{"name": "Sudoku Solver", "img": "#", "desc": "A sudoku creator and solver. Up to 16x16 sudokus can be solved. Dragons included.", "repo": "http://github.com/taichatha/mysudoku", "url": "", "tools": "Python"},
{"name": "Time Block Scheduler", "desc": "Task scheduler. Add tasks with time range. Under Development.", "img": "null", "repo": "http://github.com/taichatha/timeblock-react", "url": "http://timeblock-react.meteor.com", "tools": "React JS, Meteor, HTML, CSS"},
{"name": "WeighBook", "desc": "A basic workout logging web application. Under Development.", "img": "null", "repo": "http://github.com/taichatha/weighbook-react", "url": "http://weighbook-react.meteor.com", "tools": "React JS, Meteor, HTML, CSS"},
{"name": "ZombieRun", "desc": "A side scrolling shooter. Game was created for CS4720 @ UVa.", "img": "null", "repo": "https://github.com/taichatha/ZombieRunReDux-master", "url": "", "tools": "C#"},
];



Portfolio = React.createClass({
	
	renderProjects() {
    	return project_list.map((project) => {
    		return (
    			<Project key={project._id} project={project} />
			);
    });
  },

	render() {
		return (
			<div className="portfolio">
				<h1>Portfolio</h1>
				{this.renderProjects()}
			</div>

			);
	}


});