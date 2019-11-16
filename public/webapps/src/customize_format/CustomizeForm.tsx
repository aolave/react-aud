import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { Modal, Button, Popup } from 'semantic-ui-react';
import { UseAccounting } from './UseAccounting';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 }
];

export const CustomizeForm = (props: any) => {
	/*** cargando(extrear) optios en los select  */
	const {
		optnSimboloDecimal,
		optnDigitosDespuesDecimal,
		optnSimboloAgrupacionDigitos,
		optnAgrupacionDigitos,
		optnFormatoNumeroNegativo,
		optnMostrarCerosIzquierda,
		optnSeparadorLista,
		optnSistemaMedida,
		optnUseDigitosNativos
	} = props.data.options;

	/** Inicialiar y state de los datos */
	const [ getData, setGetData ] = useState(props.data.content);

	const { register, handleSubmit, errors } = useForm();
	const [ openModal, setOpentModal ] = useState(true);
	const [ bottonDisabled, setBottonDisabled ] = useState(true);

	const [ simboloDecimal, setSimboloDecimal ] = useState(getData.simboloDecimal);
	const [ digitosDespuesDecimal, setDigitosDespuesDecimal ] = useState(getData.digitosDespuesDecimal);
	const [ simboloAgrupacionDigitos, setSimboloAgrupacionDigitos ] = useState(getData.simboloAgrupacionDigitos);
	const [ agrupacionDigitos, setAgrupacionDigitos ] = useState(getData.agrupacionDigitos);
	const [ simboloSignoNegativo, setSimboloSignoNegativo ] = useState(getData.simboloSignoNegativo);
	const [ mostrarCerosIzquierda, setMostrarCerosIzquierda ] = useState(getData.mostrarCerosIzquierda);
	const [ formatoNumeroNegativo, setFormatoNumeroNegativo ] = useState(getData.formatoNumeroNegativo);
	const [ separadorLista, setSeparadorLista ] = useState(getData.separadorLista);
	const [ sistemaMedida, setSistemaMedida ] = useState(getData.sistemaMedida);
	const [ digitosEstandar, setDigitosEstandar ] = useState(getData.digitosEstandar);
	const [ useDigitosNativos, setUseDigitosNativos ] = useState(getData.useDigitosNativos);

	const closeModal = () => {
		setOpentModal(false);
	};

	const onSubmit = (data: any) => {
		//closeModal();
		setGetData(data);
	};

	const onChange = (data: any) => {
		setBottonDisabled(false);
		setGetData(data);
	};

	const createOptions = (dataCustomize: any) => {
		return dataCustomize.map((content: any) => (
			<option key={content.value} value={content.value}>
				{content.label}
			</option>
		));
	};

	const handleSimboloSignoNegativoChange = (e: any) => {
		setSimboloSignoNegativo(e.target.value);
	};

	const handleDigitosEstandarChange = (e: any) => {
		setDigitosEstandar(e.target.value);
	};

	return (
		<Modal size='tiny' open={openModal} closeIcon>
			<Modal.Header> PERSONALIZAR FORMATO </Modal.Header>
			<Modal.Content>
				<div>
					<h4> Ejemplo: </h4> <UseAccounting data={getData} />
				</div>
				<p />
				<form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)}>
					<Autocomplete
						id='combo-box-demo'
						options={top100Films}
						getOptionLabel={(option) => option.title}
						style={{ width: 200 }}
						renderInput={(params) => <TextField {...params} label='' variant='outlined' fullWidth />}
					/>

					<label className='label-select'>
						Símbolo decimal:
						<select
							name='simboloDecimal'
							value={simboloDecimal}
							onChange={(e: any) => setSimboloDecimal(String(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnSimboloDecimal)}
						</select>
					</label>
					<label className='label-select'>
						Números, de dígitos después del decimal:
						<select
							name='digitosDespuesDecimal'
							value={digitosDespuesDecimal}
							onChange={(e: any) => setDigitosDespuesDecimal(Number(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnDigitosDespuesDecimal)}
						</select>
					</label>
					<label className='label-select'>
						Símbolo de agrupación de dígitos:
						<select
							name='simboloAgrupacionDigitos'
							value={simboloAgrupacionDigitos}
							onChange={(e: any) => setSimboloAgrupacionDigitos(String(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnSimboloAgrupacionDigitos)}
						</select>
					</label>

					<label className='label-select'>
						Agrupación de dígitos:
						<select
							name='agrupacionDigitos'
							value={agrupacionDigitos}
							onChange={(e: any) => setAgrupacionDigitos(String(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnAgrupacionDigitos)}
						</select>
					</label>

					<label className='label-select'>
						Símbolo de signo negativo:
						<input
							type='text'
							name='simboloSignoNegativo'
							value={simboloSignoNegativo}
							onChange={handleSimboloSignoNegativoChange}
							ref={register({ required: true, max: 1, min: 1, maxLength: 1, pattern: /-{1}/i })}
						/>
						{errors.simboloSignoNegativo && <span className='error'> Formato incorrecto. </span>}
					</label>

					<label className='label-select'>
						Formato de número negativo:
						<select
							name='formatoNumeroNegativo'
							value={formatoNumeroNegativo}
							onChange={(e: any) => setFormatoNumeroNegativo(String(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnFormatoNumeroNegativo)}
						</select>
					</label>

					<label className='label-select'>
						Mostrar ceros a la izquierda:
						<select
							name='mostrarCerosIzquierda'
							value={mostrarCerosIzquierda}
							onChange={(e: any) => setMostrarCerosIzquierda(String(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnMostrarCerosIzquierda)}
						</select>
					</label>

					<label className='label-select'>
						Separador de lista:
						<select
							name='separadorLista'
							value={separadorLista}
							onChange={(e: any) => setSeparadorLista(String(e.target.value))}
							ref={register({ required: true })}
						>
							{createOptions(optnSeparadorLista)}
						</select>
					</label>

					<label className='label-select'>
						Sistema de medida:
						<select
							name='sistemaMedida'
							value={sistemaMedida}
							onChange={(e: any) => setSistemaMedida(e.target.value)}
							ref={register({ required: true })}
						>
							{createOptions(optnSistemaMedida)}
						</select>
					</label>

					<label className='label-select'>
						Dígitos estándar:
						<input
							type='text'
							name='digitosEstandar'
							value={digitosEstandar}
							onChange={handleDigitosEstandarChange}
							ref={register({ required: true, max: 9, min: 9, maxLength: 9, pattern: /[0-9]{9}/i })}
						/>
						{errors.digitosEstandar && <span className='error'> Formato incorrecto. </span>}
					</label>

					<label className='label-select'>
						Use dígitos nativos:
						<select
							name='useDigitosNativos'
							value={useDigitosNativos}
							onChange={(e: any) => setUseDigitosNativos(e.target.value)}
							ref={register({ required: true })}
						>
							{createOptions(optnUseDigitosNativos)}
						</select>
					</label>

					<div className='actions ab-status-actions'>
						<Button onClick={closeModal} className='ui compact primary center button'>
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
							disabled={bottonDisabled ? false : true}
						/>
					</div>
				</form>
			</Modal.Content>
		</Modal>
	);
};
