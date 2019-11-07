import { PureComponent } from 'react';
import { Button, Modal } from 'semantic-ui-react';

declare var window: any;

type Props = {
	data: EpaycoCheckout;
};

type EpaycoNormalState = {
	openModal: boolean;
};

type EpaycoCheckout = {
	//Parametros compra (obligatorio)
	name: string;
	description: 'Pago de test audibraind';
	invoice: '1234';
	currency: 'cop';
	amount: '40000';
	tax_base: '0';
	tax: '0';
	country: 'co';
	lang: 'es';

	//Onpage="false" - Standard="true"
	onpage: true | false;
	standard: 'true';
	external: 'false';

	//Atributos opcionales
	extra1: 'extra1';
	extra2: 'extra2';
	extra3: 'extra3';

	confirmation: 'http://secure2.payco.co/prueba_curl.php';
	response: 'http://secure2.payco.co/prueba_curl.php';

	//Atributos cliente
	name_billing: 'Adrian Robledo';
	address_billing: 'Carrera 19 numero 14 91';
	type_doc_billing: 'cc';
	mobilephone_billing: '56465456';
	number_doc_billing: '6322666';
};

export class EpaycoNormal extends PureComponent<Props, EpaycoNormalState> {
	constructor(props: Props, epaycoNormalState: EpaycoNormalState) {
		super(props);
		this.state = {
			openModal: false
		};
	}

	/*
* parametros de configuracion y data
*@returns abre el checkout de epayco.
*
*/

	openChekout = () => {
		const handler = window.ePayco.checkout.configure({
			key: '570ed3df22421f751a4793b858a6916e',
			test: true
		});

		//const updateDataEpayco = numbers.map((item) => item.amount = 60000) );
		//this.state({ dataEpayco: updateDataEpayco })
		handler.open(this.pros.data.epaycoNormal);
	};

	modalConfirm = () => {
		this.setState({ openModal: false });
	};

	render() {
		return true;
	}
}
