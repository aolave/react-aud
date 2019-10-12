app.vars.renewal = {
	text: {
		//state is by default an object
		title:
			'A continuación encontrará una relación del estado de renovación de todos los usuarios activos en su cuenta de AuditBrain.',
		button: 'Renovar usuarios seleccioandos'
	},

	table: {
		//state is by default an object
		header: {
			custom: 1,
			column: [ 'Usuario', 'Nombre', 'Fecha de la renovación', 'Falta', 'Estado', 'Valor', 'isChecked' ],
			tableClass: 'ui striped table'
		},

		content: [
			{
				user: 'user@gmal.com',
				name: 'Wasif',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: '24000',
				isChecked: true
			},
			{
				user: 'user2@gmal.com',
				name: 'Wasif',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: '24000',
				isChecked: true
			},
			{
				user: 'Wasif',
				name: 'Wasif',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: '24000',
				isChecked: true
			},
			{
				user: 'Wasif',
				name: 'user3@gmal.com',
				renewal: '18 de OCT. 209',
				left: '15 dias',
				status: 'por vencer',
				amount: '24000',
				isChecked: true
			}
		],
		totalAmount: '48000',
		countAll: '2'
	}
};
