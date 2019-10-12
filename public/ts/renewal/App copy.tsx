import { PureComponent, Fragment } from 'react';

type Props = {
	data: any;
};
type users = any;

export default class App extends PureComponent<Props, users> {
	constructor(props: Props) {
		super(props);
		this.state = props.data;
	}

	renderTableHeader() {
		const header = [ 'usuario', 'nombre', 'falta', 'valor', 'check' ];
		return header.map((h, i) => <th key={i}>{h}</th>);
	}

	renderTableData() {
		return this.state.users.map((userkey: any, index: any) => {
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

	render() {
		return (
			<Fragment>
				<h4 id='title' className='title'>
					{this.state.content.title}
				</h4>
				<table id='students'>
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						{this.renderTableData()}
					</tbody>
				</table>
			</Fragment>
		);
	}
}
