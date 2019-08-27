class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'total_amount': 1000,
		}
	}
	render() {
		return(
			<div>
				<h1> Lottery Application!</h1>
				<div>
					<p> Total lottery amount is 100 </p>
				</div>
				<form>
					<input placeholder="amount"/>
					<input placeholder="email" />
					<button>Participate!</button>
				</form>
			</div>
		);
	}
};

ReactDOM.render(
	<div>
		<App />
	</div>
	, document.getElementById('root')
);