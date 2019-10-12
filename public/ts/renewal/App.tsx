import { PureComponent, Fragment } from 'react';
import { TableCustom } from './UserTable';

type props = {
	data: any;
};

export default class App extends PureComponent<props> {
	constructor(props: props) {
		super(props);
		this.getKeys = this.getKeys.bind(this);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		console.log(this.setState({ value: event.target.value }));
	}

	checkUncheckAll() {}

	handleSubmit(event: any) {
		console.log(this.state);
		event.preventDefault();
	}

	getKeys = function() {
		return Object.keys(this.props.data.content[0]);
	};

	renderHeader = function() {
		let header = '';
		let custom = this.props.data.header.custom;
		if (custom == 1) {
			header = this.props.data.header.column.map((h: any, i: any) => <th key={i}>{h}</th>);
		} else {
			let keys = this.getKeys();
			header = keys.map((key: any) => {
				return <th key={key}>{key}</th>;
			});
		}
		return header;
	};
	renderRowsData = function() {
		let items = this.props.data.content;
		let keys = this.getKeys();

		const RenderRow = (props: any) => {
			/*
			return props.keys.map((val: any, index: any) => {
				return <td key={index}> {props.data[val]}  </td>;
			});
			*/

			return props.keys.map(function(val: any, index: any, key: any) {
				if (val === 'isChecked') {
					return (
						<td key={index}>
							<input
								className='custom-control-input'
								id='defaultUnchecked'
								type='checkbox'
								defaultChecked={props.data[val]}
							/>
						</td>
					);
				} else {
					return <td key={index}> {props.data[val]} </td>;
				}
			});
		};

		return items.map((row: any, index: any) => {
			return (
				<tr key={index}>
					<RenderRow key={index} data={row} keys={keys} />
				</tr>
			);
		});
	};
	render() {
		return (
			<Fragment>
				<form className='renewal' onSubmit={this.handleSubmit}>
					<div>
						<h4 id='title' className='title'>
							{this.props.data.txt.title}
						</h4>
					</div>
					<table className={this.props.data.header.tableClass}>
						<thead>
							<tr>{this.renderHeader()}</tr>
						</thead>
						<tbody>{this.renderRowsData()}</tbody>
					</table>
					<input
						className='ui compact primary center button'
						type='submit'
						value={this.props.data.txt.button}
					/>
				</form>
			</Fragment>
		);
	}
}
