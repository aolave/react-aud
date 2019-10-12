import { PureComponent } from 'react';

type props = {
	data: any;
	callback: any;
};

type TableCustomState = {
	checked: any;
	totalAmount: number;
	countAll: number;
};

export class TableCustom extends PureComponent<props, TableCustomState> {
	constructor(props: props, tableCustomState: TableCustomState) {
		super(props);
		this.getKeys = this.getKeys.bind(this);
		this.state = {
			checked: false,
			totalAmount: Number(this.props.data.totalAmount),
			countAll: Number(this.props.data.countAll)
		};
	}

	//toggle = () =>
	//	this.setState((prevState) => ({
	//		checked: !prevState.checked
	//	}));

	toggle = (event: any) => {
		//const target = event.target;
		//	const checkbox = target.type === 'checkbox' ? target.checked : target.value;
		//this.setState({ checkeds: true });
		return true;
	};

	getParent = (totalAmount: number = 0, countAll: number = 0) => {
		this.props.callback(totalAmount, countAll);
	};

	/*
	* Recibe los eventos deh checkbox
	/* 
	* @returns crea el emcabezado de la tabla.
    */
	handleCheckBox = (event: any) => {
		const target = event.target;
		const checked = target.type === 'checkbox' ? target.checked : target.value;
		let moreAccount = Number(event.target.value);

		let countAll = Number(this.state.countAll);
		let totalAmount = Number(this.state.totalAmount);
		let sumAmount: number = 0;
		let SumCount: number = 0;

		if (checked === true) {
			sumAmount = totalAmount + moreAccount;
			SumCount = countAll + 1;
			this.setState({ totalAmount: sumAmount, countAll: SumCount });
			this.getParent(sumAmount, SumCount);
		} else {
			sumAmount = totalAmount - moreAccount;
			SumCount = countAll - 1;
			this.setState({ totalAmount: sumAmount, countAll: SumCount });
			this.getParent(sumAmount, SumCount);
		}
		this.setState({ checked });
	};

	/*
	* @returns retorna los kery para generar la tabla
    */
	getKeys = () => {
		return Object.keys(this.props.data.content[0]);
	};

	/*
    * Recibe parametros tipo json, para creer la cabecera del la tabla
	* El parametro custom: 0 o 1,  define los nombres de acuerdo la confguracion del json.
	* @returns crea el emcabezado de la tabla.
    */
	renderHeader = (data: any) => {
		let custom = data.custom;
		let keys = this.getKeys();

		if (custom === 1) {
			return data.column.map((h: any, i: any) => {
				if (h === 'isChecked')
					return (
						<th key={i}>
							<input
								type='checkbox'
								className='all-control-check'
								onChange={this.toggle}
								//checked={this.state.checkeds}
								//defaultChecked={false}
							/>
						</th>
					);
				else return <th key={i}>{h}</th>;
			});
		} else {
			return keys.map((key: any) => {
				if (key == 'isChecked')
					return (
						<th style={{ textTransform: 'capitalize' }} key={key}>
							<input
								type='checkbox'
								className='all-control-check'
								onChange={this.toggle}
								//checked={this.state.checkeds}
								//defaultChecked={false}
							/>
						</th>
					);
				else
					return (
						<th style={{ textTransform: 'capitalize' }} key={key}>
							{key}
						</th>
					);
			});
		}
	};

	/**
    * Recibe parametros tipo json, para cargar los datos de por cada registro, 
	* Crear columnas y filas
	* Carga parametros 
	* @returns Crea el contenido de la tabla.
    */
	renderRowsData = (data: any) => {
		return data.map((userkey: any, index: any) => {
			const { user, name, renewal, left, status, amount, isChecked } = userkey; //destructuring
			return (
				<tr key={index}>
					<td>{user}</td>
					<td>{name}</td>
					<td>{renewal}</td>
					<td>{left}</td>
					<td>
						<span className='ui red message'>{status}</span>
					</td>
					<td className='right aligned'>
						<b> {amount} USD </b>
					</td>
					<td>
						<input
							className='custom-control-input'
							type='checkbox'
							defaultChecked={isChecked}
							//checked={(this.state.checkeds = isChecked)}
							onChange={this.handleCheckBox}
							value={amount}
						/>
					</td>
				</tr>
			);
		});
	};

	/**
    * Renderiza la tabla
	* Recibe el paramentro de la clase de la tabla
	* @returns crea la tabla.
    */
	render() {
		return (
			<table className={this.props.data.header.tableClass}>
				<thead>
					<tr>{this.renderHeader(this.props.data.header)}</tr>
				</thead>
				<tbody>
					{this.renderRowsData(this.props.data.content)}
					<tr>
						<td />
						<td />
						<td />
						<td />
						<td className='right aligned'>
							<b>Total:</b>
						</td>
						<td className='right aligned'>
							<b>{this.state.totalAmount} USD </b>
						</td>
						<td> {this.state.countAll} </td>
					</tr>
				</tbody>
			</table>
		);
	}
}
