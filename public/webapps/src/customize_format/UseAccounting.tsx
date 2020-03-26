import React, { Fragment } from 'react';

declare var accounting: any;

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

export const UseAccounting = (props: Props) => {
	const {
		currencySymbol,
		positiveCurrencyFormat,
		negativeCurrencyFormat,
		decimalSymbol,
		noDigitsAfterDecimal,
		digitGroupingSymbol
	} = props.data;

	// formato (símbolo personalizado y separadores), también podría usar el objeto de opciones como segundo parámetro:
	let customNumberPositive = accounting.formatMoney(5318008, {
		symbol: '' + currencySymbol + '',
		decimal: '' + decimalSymbol + '',
		precision: noDigitsAfterDecimal,
		thousand: '' + digitGroupingSymbol + '',
		format: {
			pos: '' + positiveCurrencyFormat + ''
		}
	});

	let customNumberNegative = accounting.formatMoney(5318008, {
		symbol: '' + currencySymbol + '',
		decimal: '' + decimalSymbol + '',
		precision: noDigitsAfterDecimal,
		thousand: '' + digitGroupingSymbol + '',
		format: {
			pos: '' + negativeCurrencyFormat + ''
		}
	});

	return (
		<Fragment>
			<span className='content'>
				<b>Positivo:</b> {customNumberPositive}
			</span>
			{' | '}
			<span className='content'>
				<b>Negativo:</b> {customNumberNegative}
			</span>
		</Fragment>
	);
};
