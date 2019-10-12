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
			result: 0
		};
	}

	getResponse(result) {
		this.setState({ result });
	}

	handleSubmit(e: SyntheticEvent) {
		e.preventDefault();
		e.stopPropagation();

		//
		//	bootbox.confirm('Confirmacion de la compra', (r: any) => {
		//		if (r) {
		//		}
		//    });

		//this.setState({ value: event.target.value });
		this.tableConfirm(12, 20000);
	}

	handleChange = (event: any) => {
		this.setState({ value: event.target.value });
	};

	tableConfirm = (quantity: any, amount: any) => {
		let table = {
			header: {
				custom: 0,
				tableClass: 'ui striped table'
			},
			content: [
				{
					detalle: 'Renvoacion por 12 meses',
					cantidad: quantity,
					'Valor Total': amount
				}
			]
		};
		return <TableCustom data={table} />;
	};

	setRef(ref) {
		this.inputRef = ref;
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
							{this.state.title}
						</h4>
					</div>
					<TableCustom data={this.props.data} setRef={this.setRef} />
					<input id='charge-value' type='hidden' value='2000' />
					<input className='ui compact primary center button' type='submit' value={this.state.button} />
				</form>
			</Fragment>
		);
	}
}

class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };

		this.outputEvent = this.outputEvent.bind(this);
	}
	outputEvent(event) {
		// the event context comes from the Child
		this.setState({ count: this.state.count++ });
	}

	render() {
		const variable = 5;
		return (
			<div>
				Count: {this.state.count}
				<Child clickHandler={this.outputEvent} />
			</div>
		);
	}
}

class Child extends React.Component {
	render() {
		return <button onClick={this.props.clickHandler}>Add One More</button>;
	}
}

export default Parent;
