import { PureComponent } from 'react';

type Props = {
	data: any;
};
type users = any;

/*
export default class App extends PureComponent<Props, users> {
	constructor(props: Props) {
		super(props);
		this.state = props.data;
	}

	renderTableHeader() {
		const header = this.state.content[0].header;
		return header.map((h: any, i: any) => <th key={i}>{h}</th>);
	}

	renderTableData() {
		return this.state.users.map((user: any, index: any) => <td key={index}>{user[idnex]}</td>)
		
	/*	
		{
			const { id, user, name, renewal, left, status, amount, check } = userkey; //destructuring
			return (
				<tr key={id}>
					<td>{user}</td>
					<td>{name}</td>
					<td>{renewal}</td>
					<td>{left}</td>
					<td>{status}</td>
					<td>{amount}</td>
					<td>{check}</td>
				</tr>
			);
		});


	}
	*/

/*
	render() {
		return (
			<Fragment>
				<h4 id='title' className='title'>
					{this.state.content[0].title}
				</h4>
				<table className='ui table compact celled' id='table-renewal'>
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						<tr>{this.renderTableData()}</tr>
					</tbody>
				</table>
			</Fragment>
		);
	}



}
*/

export default class App extends PureComponent<Props, users> {
	constructor(props: Props) {
		super(props);
		this.getHeader = this.getHeader.bind(this);
		this.getRowsData = this.getRowsData.bind(this);
		this.getKeys = this.getKeys.bind(this);
	}

	getKeys = function() {
		return Object.keys(this.props.data.users[0]);
	};

	getHeader = function() {
		var keys = this.getKeys();
		return keys.map((key: any, index: any) => {
			return <th key={key}>{key.toUpperCase()}</th>;
		});
	};

	getRowsData = function() {
		const RenderRow = (props: any) => {
			return props.keys.map((key: any, index: any) => {
				return <td key={props.data[key]}>{props.data[key]}</td>;
			});
		};

		var items = this.props.data.users;
		var keys = this.getKeys();
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
			<table>
				<thead>
					<tr> {this.getHeader()} </tr>
				</thead>
				<tbody> {this.getRowsData()}</tbody>
			</table>
		);
	}
}
