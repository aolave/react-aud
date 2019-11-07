app.vars.renewal = {
	text: {
		//state is by default an object
		title:
			'A continuación encontrará una relación del estado de renovación de todos los usuarios activos en su cuenta de AuditBrain.',
		button: 'Renovar usuarios seleccioandos'
	},

	table: {
		//state is by default an object
		header: [
			{ id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
			{ id: 'user', numeric: false, disablePadding: true, label: 'Usuario' },
			{ id: 'renewal', numeric: false, disablePadding: true, label: 'Fecha de la renovación' },
			{ id: 'left', numeric: false, disablePadding: true, label: 'Falta' },
			{ id: 'status', numeric: false, disablePadding: true, label: 'Estado' },
			{ id: 'amount', numeric: true, disablePadding: false, label: 'Valor' }
		],

		content: [
			{
				name: 'Wasif 1',
				user: 'user1@gmal.com',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: 20000
			},
			{
				name: 'Wasif 2',
				user: 'user2@gmal.com',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: 34000
			},
			{
				name: 'Wasif 3',
				user: 'user3@gmal.com',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: 24000
			},

			{
				name: 'user4@gmal.com',
				user: 'user4@gmal.com',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: 54000
			}
		]
	},

	epayco: {
		bank: '1022',
		invoice: '1472050778',
		description: 'pay test',
		value: '10000',
		tax: '0',
		tax_base: '0',
		currency: 'COP',
		type_person: '0',
		doc_type: 'CC',
		doc_number: '10358519',
		name: 'testing',
		last_name: 'PAYCO',
		email: 'adrian.olave@gmail.com',
		country: 'CO',
		cell_phone: '31653264946',
		url_response: 'https:/secure.payco.co/restpagos/testRest/endpagopse.php',
		url_confirmation: 'https:/secure.payco.co/restpagos/testRest/endpagopse.php',
		method_confirmation: 'GET',
		//Parámetros adicionales: estos parámetros son opcionales y pueden ser utilizados por el comercio
		extra1: '',
		extra2: '',
		extra3: '',
		extra4: '',
		extra5: '',
		extra6: '',
		extra7: '',
		ip: '104.207.145.204',
		lang: 'es'
	},

	epaycoNormal: {
		//Parametros compra (obligatorio)
		name: 'Pago de test audibraind',
		description: 'Pago de test audibraind',
		invoice: '1234',
		currency: 'cop',
		amount: '40000',
		tax_base: '0',
		tax: '0',
		country: 'co',
		lang: 'es',

		//Onpage="false" - Standard="true"
		onpage: 'true',
		standard: 'true',
		external: 'false',

		//Atributos opcionales
		extra1: 'extra1',
		extra2: 'extra2',
		extra3: 'extra3',

		confirmation: 'http://secure2.payco.co/prueba_curl.php',
		response: 'http://secure2.payco.co/prueba_curl.php',

		//Atributos cliente
		name_billing: 'Adrian Robledo',
		address_billing: 'Carrera 19 numero 14 91',
		type_doc_billing: 'cc',
		mobilephone_billing: '56465456',
		number_doc_billing: '6322666'
	}
};
