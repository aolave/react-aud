import { PureComponent, Fragment } from 'react';
import { TableCustom } from './UserTable';

//declare var app: any;

type Props = {
	data: any;
};

type AppState = {
	userTotalAmount: any;
	userCountAll: any;
};

export default class App extends PureComponent<Props, AppState> {
	constructor(props: Props, appState: AppState) {
		super(props);
		this.state = {
			userTotalAmount: this.props.data.table.totalAmount,
			userCountAll: this.props.data.table.countAll
		};
	}

	callAmountCount = (userTotalAmount: any, userCountAll: any) => {
		this.setState({ userTotalAmount, userCountAll });
	};

	render() {
		return (
			<Fragment>
				<form className='renewal'>
					<div>
						<h4 id='title' className='title'>
							{this.props.data.text.title}
						</h4>
					</div>
					<TableCustom data={this.props.data.table} callback={this.callAmountCount} />
					<input id='charge-value' type='hidden' value='2000' />
					<input
						className='ui compact primary center button'
						type='button'
						value={this.props.data.text.button}
					/>
					<span>{this.state.userTotalAmount} </span> - <span> {this.state.userCountAll} </span>
				</form>
			</Fragment>
		);
	}
}
