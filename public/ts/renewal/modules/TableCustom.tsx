import { PureComponent } from 'react';
type props = {
	data: any;
};

export class TableCustom extends PureComponent<props> {
	constructor(props: props) {
		super(props);
		this.getKeys = this.getKeys.bind(this);
		this.state = {
			value: ''
		};
	}

	getKeys = function() {
		return Object.keys(this.props.data.content[0]);
	};

	/*
    * Recibe parametros tipo json, para creer la cabecera del la tabla
	* El parametro custom: 0 o 1,  define los nombres de acuerdo la confguracion del json.
	* @returns crea el emcabezado de la tabla.
    */
	renderHeader = function() {
		let header = '';
		let custom = this.props.data.header.custom;
		if (custom == 1) {
			header = this.props.data.header.column.map((h: any, i: any) => <th key={i}>{h}</th>);
		} else {
			let keys = this.getKeys();
			header = keys.map(function(key: any) {
				if (key === 'isChecked') key = '';
				return (
					<th style={{ textTransform: 'capitalize' }} key={key}>
						{key}
					</th>
				);
			});
		}
		return header;
	};

	/**
    * Recibe parametros tipo json, para cargar los datos de por cada registro, 
	* Crear columnas y filas
	* Carga parametros 
	* @returns Crea el contenido de la tabla.
    */
	renderRowsData = function() {
		let items = this.props.data.content;
		let keys = this.getKeys();

		const RenderRow = (props: any) => {
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

	/**
    * Renderiza la tabla
	* Recibe el paramentro de la clase de la tabla
	* @returns crea la tabla.
    */
	render() {
		return (
			<table className={this.props.data.header.tableClass}>
				<thead>
					<tr>{this.renderHeader()}</tr>
				</thead>
				<tbody>{this.renderRowsData()}</tbody>
			</table>
		);
	}
}
