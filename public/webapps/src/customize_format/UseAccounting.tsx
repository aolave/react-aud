import React, { Fragment } from 'react';

export const UseAccounting = (props: any) => {
	const {
		simboloDecimal,
		digitosDespuesDecimal,
		simboloAgrupacionDigitos,
		//agrupacionDigitos,
		simboloSignoNegativo
		//mostrarCerosIzquierda,
		//formatoNumeroNegativo,
		//separadorLista,
		//sistemaMedida,
		//digitosEstandar,
		//useDigitosNativos
	} = props.data;

	const saveFormatNumbers = () => {
		console.log(props.data);
	};
	// formato (símbolo personalizado y separadores), también podría usar el objeto de opciones como segundo parámetro:
	let customNumberPositive = accounting.formatNumber(
		125478963,
		digitosDespuesDecimal,
		'' + simboloAgrupacionDigitos + '',
		'' + simboloDecimal + ''
	);

	let customNumberNegative = accounting.formatNumber(
		125478963,
		digitosDespuesDecimal,
		'' + simboloAgrupacionDigitos + '',
		'' + simboloDecimal + ''
	);

	return (
		<Fragment>
			<span className='content'>{customNumberPositive}</span> |{' '}
			<span className='content'>
				{simboloSignoNegativo} {customNumberNegative}
			</span>
		</Fragment>
	);
};
