import { PureComponent, Fragment } from 'react';

type Props = {
	data: any;
};

export default class App extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);
		//this.renderHeader = this.renderHeader.bind(this);
		//this.renderRowsData = this.renderRowsData.bind(this);
		this.getKeys = this.getKeys.bind(this);
	}
	getKeys = function() {
		return Object.keys(this.props.data.content[0]);
	};

	renderHeader = function() {
		console.log(this.props.data);
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
		var items = this.props.data.content;
		var keys = this.getKeys();

		const RenderRow = (props: any) => {
			return props.keys.map((val: any, index: any) => {
				return <td key={index}> {props.data[val]} </td>;
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
				<h4 id='title' className='title'>
					{this.props.data.txt.title}
				</h4>
				<table className='ui table compact celled'>
					<thead>
						<tr>{this.renderHeader()}</tr>
					</thead>
					<tbody>{this.renderRowsData()}</tbody>
				</table>
			</Fragment>
		);
	}
}
