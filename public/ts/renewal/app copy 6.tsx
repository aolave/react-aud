import { Component, PureComponent, createRef, Fragment, SyntheticEvent } from 'react';
import { TableCustom } from './UserTable';

declare var app: any;

type Props = {
	data: any;
};

export default class App extends PureComponent<Props> {
	formRef = createRef<HTMLFormElement>();

	constructor(props: Props, text: Text) {
		super(props);
		this.state = {
			totalAmount: 0,
			totalAmount: 0,
			data: this.props.data
		};
	}

	getResponse(totalAmount: 0, accountAll: 0) {
		this.setState({ totalAmount, accountAll });
	}

	render() {
		return (
			<Fragment>
				<form
					ref={this.formRef}
					method='post'
					id='form_renewal'
					className='renewal'
					onSubmit={this.handleSubmit}
				>
					<div>
						<h4 id='title' className='title'>
							{this.state.data.title}
						</h4>
					</div>
					<TableCustom data={this.props.data} callback={this.getResponse.bind(this)} />
					<input id='charge-value' type='hidden' value='2000' />
					<input className='ui compact primary center button' type='submit' value={this.state.data.button} />
					<span>{this.state.result}</span>
				</form>
			</Fragment>
		);
	}
}
