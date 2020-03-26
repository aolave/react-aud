import { PureComponent } from 'react';
import { CustomizeForm } from './CustomizeForm';

type Props = {
	data: Content;
};

type Content = {
	currencySymbol: string;
	positiveCurrencyFormat: string;
	negativeCurrencyFormat: string;
	decimalSymbol: string;
	noDigitsAfterDecimal: number;
	digitGroupingSymbol: string;
};

export default class App extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);
		this.state = {
			data: this.props.data
		};
	}

	closeModal = () => {
		this.setState({ openModal: false });
	};

	dataSettignsCallback = (data: Content) => {
		let settings = {
			currency: {
				symbol: '' + data.currencySymbol + '', // default currency symbol is '$'
				// controls output: %s = symbol, %v = value/number (can be object: see below)
				format: {
					pos: '' + data.positiveCurrencyFormat + '', // for positive values, eg. "$ 1.00" (required)
					neg: '' + data.negativeCurrencyFormat + '' // for negative values, eg. "$ (1.00)" [optional]
				},
				decimal: '' + data.decimalSymbol + '', // decimal point separator
				thousand: '' + data.digitGroupingSymbol + '', // thousands separator
				precision: data.noDigitsAfterDecimal // decimal places
			}
		};
		console.log(settings);

		//this.setState({ data: dataSet }); // duda ??
		//console.log(this.state.data);

		//const url: string = url_for(`js/save`); // modify, this chage // duda ??
		//$.post(url, settings, $.noop, 'json'); // modify this chage // duda ??
	};

	render() {
		return (
			<div className='form'>
				<CustomizeForm data={this.props.data} dataCallback={this.dataSettignsCallback} />
			</div>
		);
	}
}
