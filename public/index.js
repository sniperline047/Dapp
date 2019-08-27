class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'total_amount': 1000,
			'amount': 100,
			'email': '',
		}
	}

	onAmountChange = (event) => {
		this.setState({amount : event.target.value});
	}
	onEmailChange = (event) => {
		this.setState({email : event.target.value});
	}
	onSubmit = async (event) => {
		event.preventDefault();
		const response = await axios.post('/info', {
			amount : this.state.amount,
			email : this.state.email
		});
		console.log(response);
	}

	render() {
		return(
			<div>
				<h1> Lottery Application!</h1>
				<div>
					<p> Total lottery amount is 100 </p>
				</div>
				<form onSubmit={this.onSubmit} >
					<input placeholder="amount" value={this.state.amount} onChange={this.onAmountChange} />
					<input placeholder="email" value={this.state.email} onChange={this.onEmailChange} />
					<button type="submit" >Participate!</button>
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