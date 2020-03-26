import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { Button, Popup } from 'semantic-ui-react';
import { UseAccounting } from './UseAccounting';

type Props = {
	data: Content;
	dataCallback: any;
};

type Content = {
	currencySymbol: string;
	positiveCurrencyFormat: string;
	negativeCurrencyFormat: string;
	decimalSymbol: string;
	noDigitsAfterDecimal: number;
	digitGroupingSymbol: string;
};

export const CustomizeForm = (props: Props) => {
	/** Inicialiar y state de los datos */
	const [ getData, setGetData ] = useState(props.data);
	const { register, handleSubmit, errors } = useForm();
	const [ bottonDisabled, setBottonDisabled ] = useState(false);

	const [ currencySymbol, setCurrencySymbol ] = useState(getData.currencySymbol);
	const [ positiveCurrencyFormat, setPositiveCurrencyFormat ] = useState(getData.positiveCurrencyFormat);
	const [ negativeCurrencyFormat, setNegativeCurrencyFormat ] = useState(getData.negativeCurrencyFormat);
	const [ decimalSymbol, setDecimalSymbol ] = useState(getData.decimalSymbol);
	const [ noDigitsAfterDecimal, setNoDigitsAfterDecimal ] = useState(getData.noDigitsAfterDecimal);
	const [ digitGroupingSymbol, setDigitGroupingSymbol ] = useState(getData.digitGroupingSymbol);

	/*** cargando(load) optios en los select  */
	const optnPositiveCurrencyFormat = [
		{ value: '%s %v', label: '' + currencySymbol + ' 1' },
		{ value: '%s%v', label: '' + currencySymbol + '1' },
		{ value: '%v %s', label: '1 ' + currencySymbol + '' },
		{ value: '%v%s', label: '1' + currencySymbol + '' }
	];

	const optnNegativeCurrencyFormat = [
		{ value: '%s (%v)', label: '' + currencySymbol + ' (1)' },
		{ value: '%s(%v)', label: '' + currencySymbol + '(1)' },
		{ value: '(%v) %s', label: '(1) ' + currencySymbol + '' },
		{ value: '(%v)%s', label: '(1)' + currencySymbol + '' }
	];

	const optnNoDigitsAfterDecimal = [
		{ value: 0, label: 0 },
		{ value: 1, label: 1 },
		{ value: 2, label: 2 },
		{ value: 3, label: 3 },
		{ value: 4, label: 4 }
	];

	const onSubmit = (data: any) => {
		setGetData(data);
		props.dataCallback(data);
	};

	const onChange = (data: any) => {
		setBottonDisabled(false);
		props.dataCallback(data);
	};

	const onCancel = () => {
		return false;
	};

	const createOptions = (dataCustomize: any) => {
		return dataCustomize.map((content: any) => (
			<option key={content.value} value={content.value}>
				{content.label}
			</option>
		));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)} className='form-normal'>
			<div>
				<h4> Ejemplo: </h4> <UseAccounting data={getData} />
			</div>
			<p />

			<label>
				Símbolo de la moneda
				<input
					type='text'
					name='currencySymbol'
					value={currencySymbol}
					onChange={(e: any) => setCurrencySymbol(String(e.target.value))}
					ref={register({ required: true, max: 1, min: 1, maxLength: 1 })}
				/>
				{errors.currencySymbol && (
					<span className='error'>Formato incorrecto solo se permite un símbolo de moneda Ej: $</span>
				)}
			</label>

			<label>
				Formato de número positivo:
				<select
					name='positiveCurrencyFormat'
					value={positiveCurrencyFormat}
					onChange={(e: any) => setPositiveCurrencyFormat(String(e.target.value))}
					ref={register({ required: true })}
				>
					{createOptions(optnPositiveCurrencyFormat)}
				</select>
			</label>

			<label>
				Formato de número negativo:
				<select
					name='negativeCurrencyFormat'
					value={negativeCurrencyFormat}
					onChange={(e: any) => setNegativeCurrencyFormat(String(e.target.value))}
					ref={register({ required: true })}
				>
					{createOptions(optnNegativeCurrencyFormat)}
				</select>
			</label>

			<label>
				Símbolo decimal:
				<input
					type='text'
					name='decimalSymbol'
					value={decimalSymbol}
					onChange={(e: any) => setDecimalSymbol(String(e.target.value))}
					ref={register({ required: true, max: 1, min: 1, maxLength: 1, pattern: /[,.']{1}/i })}
				/>
				<span>
					Permitidos: <b>,. </b>
				</span>
				{errors.decimalSymbol && <span className='error'> Formato incorrecto, solo se permite: . , </span>}
			</label>

			<label>
				Números, de dígitos después del decimal:
				<select
					name='noDigitsAfterDecimal'
					value={noDigitsAfterDecimal}
					onChange={(e: any) => setNoDigitsAfterDecimal(Number(e.target.value))}
					ref={register({ required: true })}
				>
					{createOptions(optnNoDigitsAfterDecimal)}
				</select>
			</label>

			<label>
				Símbolo de dígitos:
				<input
					type='text'
					name='digitGroupingSymbol'
					value={digitGroupingSymbol}
					onChange={(e: any) => setDigitGroupingSymbol(String(e.target.value))}
					ref={register({ required: true, max: 1, min: 1, maxLength: 1, pattern: /[,.']{1}/i })}
				/>
				<span>
					Permitidos: <b>,. </b>
				</span>
				{errors.digitGroupingSymbol && <span className='error'>Formato incorrecto, solo se permite: . , </span>}
			</label>

			<div className='actions ab-status-actions'>
				<Button onClick={onCancel} className='ui compact primary center button'>
					Cancelar
				</Button>

				<Popup
					trigger={
						<span>
							<Button
								disabled={bottonDisabled}
								className='ui compact primary center button'
								type='submit'
							>
								Guardar
							</Button>
						</span>
					}
					content='Para guardar los cambios debe seleccionar una opción.'
					position='bottom center'
					disabled={!bottonDisabled}
				/>
			</div>
		</form>
	);
};
