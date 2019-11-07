import { PureComponent, Fragment } from 'react';
import { TableCustom } from './UserTable';
import { Button, Modal, Popup } from 'semantic-ui-react';

//declare var app: any;

type Props = {
	data: any;
};

type AppState = {
	open: any;
	buttonRenewal: any;
	userTotalAmount: any;
	userCountAll: any;
};

export default class App extends PureComponent<Props, AppState> {
	constructor(props: Props, appState: AppState) {
		super(props);
		this.state = {
			open: false,
			buttonRenewal: true,
			userTotalAmount: this.props.data.table.totalAmount,
			userCountAll: this.props.data.table.countAll
		};
	}

	openModalConfirm = () => this.setState({ open: true });

	closeModalConfirm = () => {
		this.setState({ open: false });
	};

	callAmountCount = (userTotalAmount: any, userCountAll: any) => {
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
					<TableCustom data={this.props.data.table} callback={this.callAmountCount} />
					<div
						className='actions ab-status-actions'
						data-tooltip='Add users to your feed'
						data-position='top right'
					>
						<Popup
							trigger={
								<Button
									onClick={this.openModalConfirm}
									className='ui compact primary center button renewal'
									enabled
								>
									{this.props.data.text.button}
								</Button>
							}
							content='You do not have permission to create drafts'
							position='bottom center'
							disabled
						/>
					</div>
				</div>

				<Modal size='tiny' open={this.state.open} closeOnEscape={false} closeOnDimmerClick={true} closeIcon>
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
						<img className='epayco' src='../../images/epayco.jpg' />
					</Modal.Content>
				</Modal>
			</Fragment>
		);
	}
}
