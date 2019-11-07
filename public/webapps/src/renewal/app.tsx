import { PureComponent, Fragment } from 'react';
//import { TableCustom } from './UserTable';
import { Button, Modal, Popup } from 'semantic-ui-react';
import { TableUserRenewel } from './UserTableMaterial';
//import { Epayco } from './EpaycoNode';
import { EpaycoNormal } from './EpaycoNormal';

//declare var app: any;

type Props = {
	data: any;
};

type AppState = {
	openModal: boolean;
	buttonRenewal: boolean;
	userTotalAmount: number;
	userCountAll: number;
};

export default class App extends PureComponent<Props, AppState> {
	constructor(props: Props, appState: AppState) {
		super(props);
		this.state = {
			openModal: false,
			buttonRenewal: true,
			userTotalAmount: 40000,
			userCountAll: 5
		};
	}

	openModalConfirm = () => this.setState({ openModal: true });

	closeModalConfirm = () => {
		this.setState({ openModal: false });
		//const EpaycoPse = new Epayco(this.props);
		//EpaycoPse.pseCreate(this.props.data.epayco);
		//const epaycoPse = new EpaycoNormal(this.props, this.appState);
		//	epaycoPse.openChekout();
	};

	callAmountCount = (userTotalAmount: number, userCountAll: number) => {
		this.setState({ userTotalAmount, userCountAll });
	};

	render() {
		return (
			<Fragment>
				<div className='renewal'>
					<div>
						<div className='div-title'>
							<h2>Renovaciones</h2>
						</div>
						<p id='title' className='title'>
							{this.props.data.text.title}
						</p>
					</div>
					<TableUserRenewel data={this.props.data.table} callback='' />
					<div className='actions ab-status-actions'>
						<Popup
							trigger={
								<Button
									onClick={this.openModalConfirm}
									className='ui compact primary center button renewal'
									enabled='true'
								>
									{this.props.data.text.button}
								</Button>
							}
							content='You do not have permission to create drafts'
							position='bottom center'
							enabled='false'
						/>
					</div>
				</div>
				<Modal
					size='tiny'
					open={this.state.openModal}
					closeOnEscape={false}
					closeOnDimmerClick={true}
					closeIcon
				>
					<Modal.Header> CONFIRMACIÓN DE LA COMPRA </Modal.Header>
					<Modal.Content>
						<p>
							Renovación por <b>12 meses</b> software AuditBrain
						</p>
						<p>
							Cantidad de usuarios seleccionados:<b>{this.state.userCountAll}</b>
						</p>
						<p>
							<b>Valor total a pagar: $ {this.state.userTotalAmount} USD</b>
						</p>
						<Modal.Actions>
							<Button onClick={this.closeModalConfirm} className='ui olive compact center button'>
								Realizar pago ahora
							</Button>
						</Modal.Actions>
						<img className='epayco' src='./images/epayco.jpg' />
					</Modal.Content>
				</Modal>
				{!this.state.openModal && <EpaycoNormal data={this.props.data.table} />}
			</Fragment>
		);
	}
}
