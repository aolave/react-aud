import { PureComponent, createRef, SyntheticEvent, useState } from 'react';
import getvalue from 'get-value';
import cx from 'classnames';
import InputAutoNumeric from '../global/InputAutoNumeric';
import { isEmpty } from './utis';

declare var app: any;

type TableMuestrasProps = {
	muestras: MuestraItem[];
	onChange: (muestra: MuestraItem, persist: boolean) => void;
	readonly: boolean;
};

export class TableMuestras extends PureComponent<TableMuestrasProps> {
	tableRef = createRef<HTMLTableElement>();
	renderTotals() {
		const num = (num: any) => (isNaN(parseFloat(num)) ? 0 : parseFloat(num));
		const sumV = _.reduce(this.props.muestras, (acc: number, curr) => acc + num(curr.v), 0);
		const sumR = _.reduce(this.props.muestras, (acc: number, curr) => acc + num(curr.r), 0);
		const sumD = _.reduce(this.props.muestras, (acc: number, curr) => acc + num(curr.v - curr.r), 0);

		return (
			<tfoot>
				<tr>
					<td colSpan={2}>TOTALES</td>
					<td className='right aligned'>{accounting.formatNumber(sumV)}</td>
					<td className='right aligned'>{sumR != 0 ? accounting.formatNumber(sumR) : ''}</td>
					<td className='right aligned'>{sumD != 0 ? accounting.formatNumber(sumD) : ''}</td>
					<td className='right aligned'>{accounting.formatNumber(Math.floor(100 * sumD / sumV))}%</td>
				</tr>
			</tfoot>
		);
	}

	componentDidMount() {
		$(this.tableRef.current).floatThead();
	}

	componentWillUnmount() {
		$(this.tableRef.current).floatThead('destroy');
	}

	componentDidUpdate() {
		const $table = $(this.tableRef.current);

		setTimeout(function() {
			$table.floatThead('reflow');
		}, 1000);
	}

	render() {
		return (
			<table
				ref={this.tableRef}
				className='ui celled table compact table-muestras'
				id='table-muestreo-mum-evaluacion'
			>
				<thead>
					<tr>
						<th>#</th>
						<th>Documento</th>
						<th>Valor en libros ($)</th>
						<th>Valor según auditoría ($)</th>
						<th>Valor Error Absoluto ($)</th>
						<th>Error Porcentual (%)</th>
					</tr>
				</thead>
				<tbody>
					{_.map(this.props.muestras, (muestra, k) => {
						return (
							<TableMuestraRow
								key={muestra.cod}
								index={k + 1}
								muestra={muestra}
								readonly={this.props.readonly}
								onChange={this.props.onChange}
							/>
						);
					})}
				</tbody>
				{this.renderTotals()}
			</table>
		);
	}
}

type TableMuestraRowProps = {
	muestra: MuestraItem;
	index: number;
	onChange: (muestra: MuestraItem, persist: boolean) => void;
	readonly: boolean;
};

class TableMuestraRow extends PureComponent<TableMuestraRowProps, { value: number }> {
	constructor(props: TableMuestraRowProps) {
		super(props);
		this.state = {
			value: props.muestra.r
		};
	}

	onChange = (ev: SyntheticEvent, value: number) => {
		if ((ev.target as any).value === '') {
			value = null;
		}

		this.setState({ value });

		this.props.onChange(Object.assign({}, this.props.muestra, { r: value }), false);
	};

	onBlur = (ev: SyntheticEvent, value: number) => {
		if ((ev.target as any).value === '') {
			value = null;
		}

		this.setState({ value });

		this.props.onChange(Object.assign({}, this.props.muestra, { r: value }), true);
	};

	renderDiffPercent() {
		const { muestra } = this.props;
		const valor_diff: number = muestra.v - this.state.value;
		const retval = 100 * valor_diff / muestra.v;

		return parseInt(retval + '') === 0 ? 0 : accounting.formatNumber(retval);
	}

	render() {
		const { muestra } = this.props;

		return (
			<tr key={muestra.cod}>
				<td>{this.props.index}</td>
				<td>{muestra.cod}</td>
				<td className='right aligned'>{accounting.formatNumber(muestra.v)}</td>
				<td className='right aligned'>
					<InputAutoNumeric
						isEditable={!this.props.readonly}
						value={this.state.value}
						onChange={this.onChange}
						onDrop={this.onChange}
						onBlur={this.onBlur}
					/>
				</td>
				<td className='right aligned'>
					{isEmpty(this.state.value) ? '' : accounting.formatNumber(muestra.v - this.state.value)}
				</td>
				<td className='right aligned'>{isEmpty(this.state.value) ? '' : this.renderDiffPercent() + '%'}</td>
			</tr>
		);
	}
}

type TableErroresProps = {
	muestras: MuestraItem[];
	intervalo: number;
};

export const TableErrores = (props: TableErroresProps) => {
	if (!_.size(props.muestras)) {
		return (
			<div className='ui message success icon'>
				<i className='icon large checkmark' />
				<div className='content'>
					<div className='header'>0 partidas con errores</div>
					<p>No se hallaron partidas con error según auditoría.</p>
				</div>
			</div>
		);
	} else {
		let total_error_proyectado = 0;
		return (
			<table className='ui table compact celled' id='table-mum-muestraserradas'>
				<caption>Partidas que contienen error según auditoría</caption>
				<thead>
					<tr>
						<th>Cód.</th>
						<th>Valor en libros ($)</th>
						<th>Valor en auditoría ($)</th>
						<th>Error ($)</th>
						<th>Índice de Error (%)</th>
						<th>Error proyectado al intervalo</th>
					</tr>
				</thead>
				<tbody>
					{_.map(props.muestras, (muestra) => {
						const error_proyectado =
							muestra.v > props.intervalo
								? muestra.v - muestra.r
								: props.intervalo * ((muestra.v - muestra.r) / muestra.v);

						total_error_proyectado += error_proyectado;

						return (
							<tr key={muestra.cod} className={cx({ g2: muestra.v > props.intervalo })}>
								<td>{muestra.cod}</td>
								<td className='right aligned'>{accounting.formatNumber(muestra.v)}</td>
								<td className='right aligned'>{accounting.formatNumber(muestra.r)}</td>
								<td className='right aligned'>{accounting.formatNumber(muestra.v - muestra.r)}</td>
								<td className='right aligned'>
									{accounting.formatNumber(100 * (muestra.v - muestra.r) / muestra.v)}%
								</td>
								<td className='right aligned'>{accounting.formatNumber(error_proyectado)}</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr className='totals'>
						<td>{_.size(props.muestras)} partidas</td>
						<td className='right aligned' colSpan={4}>
							Total Error Proyectado
						</td>
						<td className='right aligned'>{accounting.formatNumber(total_error_proyectado)}</td>
					</tr>
				</tfoot>
			</table>
		);
	}
};

export const ConclusionTooltip = () => {
	const [ open, setOpen ] = useState(false);

	const onClick = (ev: SyntheticEvent) => {
		ev.preventDefault();
		setOpen(!open);
	};

	return (
		<div>
			<a href='#' style={{ display: 'block', textAlign: 'right', marginBottom: 5 }} onClick={onClick}>
				<i className='info circle icon' /> {open ? 'Ocultar' : 'Mostrar'} sugerencia
			</a>
			{open && (
				<div
					className='conclusion-tooltip'
					dangerouslySetInnerHTML={{ __html: getvalue(app.vars.texts, 'tooltip.muestreo.conclusion') }}
				/>
			)}
			<div className='clearfix' />
		</div>
	);
};

export class FormFichaTecnica extends PureComponent<{ isReadOnly: boolean; id_muestreo: string; id_visita: string }> {
	formRef = createRef<HTMLFormElement>();

	onClick = (ev: SyntheticEvent) => {
		ev.preventDefault();
		ev.stopPropagation();

		if (this.props.isReadOnly) {
			$(this.formRef.current).submit();
		} else {
			bootbox.warningConfirm(
				'¿Desea generar la ficha técnica para esta muestra?.<br><br>Tenga en cuenta que una vez generada la ficha técnica, esta muestra ya no podrá ser modificada.',
				'Cancelar',
				'Aceptar',
				(r) => {
					if (r) {
						$(this.formRef.current).submit();
						setTimeout(function() {
							location.reload();
						}, 1000);
					}
				}
			);
		}
	};

	render() {
		return (
			<form
				ref={this.formRef}
				data-submit-block='off'
				target='_blank'
				action={url_for2(
					`proyecto/:id_proyecto/paso/${app.vars.idpaso}/visita/${this.props.id_visita}/muestreo/${this.props
						.id_muestreo}/pdf.pdf`
				)}
				method='post'
				id='fichatecnicaform'
			>
				<button type='button' className='btn btn-lg btn-warning' onClick={this.onClick}>
					<span className='icon-moon-file-pdf' /> Ver Ficha Técnica
				</button>
			</form>
		);
	}
}
