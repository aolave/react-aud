app.vars.customize = {
	options: {
		optnSimboloDecimal: [ { value: ',', label: ',' }, { value: '.', label: '.' } ],
		optnDigitosDespuesDecimal: [
			{ value: 0, label: 0 },
			{ value: 1, label: 1 },
			{ value: 2, label: 2 },
			{ value: 3, label: 3 },
			{ value: 4, label: 4 },
			{ value: 5, label: 5 },
			{ value: 6, label: 6 },
			{ value: 7, label: 7 },
			{ value: 8, label: 8 },
			{ value: 9, label: 9 }
		],
		optnSimboloAgrupacionDigitos: [ { value: ',', label: ',' }, { value: '.', label: '.' } ],
		optnAgrupacionDigitos: [
			{ value: '123456789', label: '123456789' },
			{ value: '123,456,789', label: '123,456,789' },
			{ value: '123456,789', label: '123456,789' },
			{ value: '2,34,56,789', label: '2,34,56,789' }
		],
		optnFormatoNumeroNegativo: [
			{ value: '(1.1)', label: '(1.1)' },
			{ value: '-1.1', label: '-1.1' },
			{ value: '1.1-', label: '1.1-' }
		],
		optnMostrarCerosIzquierda: [ { value: '.7', label: '.7' }, { value: '0.7', label: '0.7' } ],
		optnSeparadorLista: [ { value: ',', label: ',' }, { value: ';', label: ';' } ],
		optnSistemaMedida: [ { value: 'u.s.', label: 'U.S.' }, { value: 'metrica', label: 'Metrica' } ],
		optnUseDigitosNativos: [
			{ value: 'contexto', label: 'Contexto' },
			{ value: 'nunca', label: 'Nunca' },
			{ value: 'nacional', label: 'Nacional' }
		]
	},

	content: {
		simboloDecimal: '.',
		digitosDespuesDecimal: 2,
		simboloAgrupacionDigitos: ',',
		agrupacionDigitos: '123,456,789',
		simboloSignoNegativo: '-',
		formatoNumeroNegativo: '-1.1',
		mostrarCerosIzquierda: '0.7',
		separadorLista: ';',
		sistemaMedida: 'u.s.',
		digitosEstandar: 123456789,
		useDigitosNativos: 'nunca'
	},

	contentSet: {
		simboloDecimal: 1,
		digitosDespuesDecimal: 4,
		simboloAgrupacionDigitos: 1,
		agrupacionDigitos: 2,
		simboloSignoNegativo: '-',
		formatoNumeroNegativo: 2,
		mostrarCerosIzquierda: 1,
		separadorLista: 1,
		sistemaMedida: 0,
		digitosEstandar: '123456789',
		useDigitosNativos: 1
	}
};
