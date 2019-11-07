import { PureComponent } from 'react';
//import { PureComponent } from 'react-dom/server';
import { Button, Modal } from 'semantic-ui-react';

type Props = {
	data: object;
};

type EpaycoState = {
	openModal: boolean;
	buttonRenewal: boolean;
	userTotalAmount: number;
	userCountAll: number;
};

export class Epayco extends PureComponent<Props, EpaycoState> {
	constructor(props: Props, epaycoState: EpaycoState) {
		super(props);
		this.state = {
			openModal: false,
			buttonRenewal: true,
			userTotalAmount: 40000,
			userCountAll: 5
		};
	}
	/*
* parametros de configuracion 
*@returns devuelve la informacion del pago.
*/

	pseCreate = (data: object) => {
		if (data) {
			let pse_info = data;
			let epayco = require('epayco-node')({
				apiKey: '570ed3df22421f751a4793b858a6916e',
				privateKey: '6aed04ddeadb8eb435a8b12564e99ff8',
				lang: 'ES',
				test: true
			});

			/* 
		*Recibe la informacion  para el pago.
		*@returns devuelve la informacion del pago.
		*/
			epayco.bank
				.create(pse_info)
				.then(function(bank: object) {
					console.log(bank);
				})
				.catch(function(err: object) {
					console.log('err: ' + err);
				});
		}
	};

	modalConfirm = () => {
		this.setState({ openModal: false });
	};

	render() {
		return (
			<Modal size='tiny' open={this.state.openModal} closeOnEscape={false} closeOnDimmerClick={true} closeIcon>
				<Modal.Header> Epayco </Modal.Header>
				<Modal.Content>
					<p />
					<p>resoeys</p>
					<p>
						<b> repuesta </b>
					</p>
					<Modal.Actions>
						<Button onClick={this.modalConfirm} className='ui olive compact center button'>
							Enviar
						</Button>
					</Modal.Actions>
				</Modal.Content>
			</Modal>
		);
	}
}
