import { PureComponent, Fragment, SyntheticEvent } from 'react';
import AppMuestreoMum from './AppMuestreoMum';
import AppMuestreoMas from './AppMuestreoMas';

declare var app: any;

type AppProps = {
	data: any;
};

type AppState = {
	type: MuestreoTipo;
};

export default class App extends PureComponent<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			type: props.data.config.type
		};
	}

	selectType = (type: MuestreoTipo) => {
		this.setState({ type });
	};

	renderSelect() {
		return (
			<Fragment>
				<p>Dé click a continuación sobre el botón con el método de muestreo que desea utilizar.</p>
				<div style={{ margin: 'auto', textAlign: 'center' }}>
					<button onClick={() => this.selectType('mum')} className='btn btn-primary btn-large'>
						Muestreo por Unidad Monetaria (MUM)
					</button>
					|
					<button onClick={() => this.selectType('mas')} className='btn btn-primary btn-large'>
						Muestreo Aleatorio Simple (MAS)
					</button>
				</div>
				<div id='welcometip'>
					<h3 id='welcometip-header'>
						<span className='icon-moon-help' /> ¿Cual método de auditoría utilizar?
					</h3>
					<div id='welcometip-body'>
						<h5 className='welcometip-subtitle'>Muestreo por Unidad Monetaria (MUM)</h5>
						<p>
							Método más usado en el muestreo de auditoría debido que selecciona principalmente los
							elementos con valores más elevados. Orientado a las cifras.
						</p>

						<h5 className='welcometip-subtitle'>Muestreo Aleatorio Simple (MAS)</h5>
						<p>
							Método genérico apto para distintos tipos de población debido que las unidades de la muestra
							se seleccionan aleatoriamente con probabilidades iguales. Orientado a los atributos.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}

	renderBody() {
		if (this.state.type === 'mum') {
			return (
				<AppMuestreoMum
					data={this.props.data.config}
					id={app.vars.ID_MUESTREO}
					id_visita={app.vars.idvisita}
					editable
				/>
			);
		} else if (this.state.type === 'mas') {
			return (
				<AppMuestreoMas
					data={this.props.data.config}
					id={app.vars.ID_MUESTREO}
					id_visita={app.vars.idvisita}
					editable
				/>
			);
		} else {
			return this.renderSelect();
		}
	}

	renderTypeTitle() {
		switch (this.state.type) {
			case 'mum':
				return (
					<Fragment>
						<strong>Tipo de Muestreo:</strong> MUM {this.renderSwitchTypeAction()}
					</Fragment>
				);
			case 'mas':
				return (
					<Fragment>
						<strong>Tipo de Muestreo:</strong> MAS {this.renderSwitchTypeAction()}
					</Fragment>
				);
			default:
				return null;
		}
	}

	renderSwitchTypeAction() {
		let newType: MuestreoTipo;
		switch (this.state.type) {
			case 'mas':
				newType = 'mum';
				break;
			case 'mum':
				newType = 'mas';
				break;
		}

		const onClick = (ev: SyntheticEvent) => {
			ev.preventDefault();
			this.setState({ type: newType });

			$.blockUI(create_blockUI_loading_message('Guardando cambios'));

			$.post(url_for(`proyecto_muestreo/${app.vars.ID_MUESTREO}/config`), { type: newType }).done(() => {
				$.unblockUI();
			});
		};

		return (
			<div className='pull-right sf_admin_td_actions'>
				<div className='btn-group dropdown-modern'>
					<a
						className='btn btn-mini dropdown-toggle'
						style={{ background: 'none', marginLeft: 10 }}
						data-toggle='dropdown'
						href='#'
					>
						<span className='icon-tc-ellipsis-v icon-large' style={{ verticalAlign: 'top' }} />
					</a>

					<ul className='dropdown-menu pull-right'>
						<li>
							<a href='#' onClick={onClick}>
								Cambiar a {newType.toUpperCase()}
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<header className='main-content-header'>
					<span className='pull-right'>{this.renderTypeTitle()}</span>
					<div className='pull-left'>
						<span className='muestreo-title-name'>{this.props.data.name}</span>
						{/* <StatusDivBlock status={this.props.data.status} /> */}
						{/* <AuthorIconLogDefaultWrapper model={this.props.data} /> */}
					</div>
					<div className='clearfix' />
				</header>
				{this.renderBody()}
			</div>
		);
	}
}
