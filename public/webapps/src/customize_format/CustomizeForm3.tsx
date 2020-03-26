import React, { useState, Fragment } from 'react';
import { Modal, Button, Popup } from 'semantic-ui-react';
import Select from 'react-select';
import { UseAccounting } from './UseAccounting';

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

	/** Inicializar y state de los datos */
	/** estado del modal y boton */
	//const [ getDataInitial, setGetDataInitial ] = useState(props.data.content);
	const [ getData, setGetData ] = useState(props.data.contentSet);

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

	const [ errormessage, setErrormessage ] = useState('');

	const closeModal = () => {
		setOpentModal(false);
	};

	/*** enviar datos para aaccounting */
	const handleSubmit = (e: any) => {
		e.preventDefault();
		//	closeModal();
		setGetData({
			simboloDecimal,
			digitosDespuesDecimal,
			simboloAgrupacionDigitos,
			agrupacionDigitos,
			simboloSignoNegativo,
			mostrarCerosIzquierda,
			formatoNumeroNegativo,
			separadorLista,
			sistemaMedida,
			digitosEstandar,
			useDigitosNativos
		});
	};

	const handleDataChange = () => {
		setBottonDisabled(false);
	};

	/** manejar el cambio de cada fields*/
	const handleSimboloDecimalChange = (obj: any) => {
		setSimboloDecimal(obj.value);
		console.log(simboloDecimal);
		handleDataChange();
	};

	const handleDespuesDecimalChange = (obj: any) => {
		setDigitosDespuesDecimal(obj.value);
		console.log(simboloDecimal);
		console.log(digitosDespuesDecimal);
		handleDataChange();
	};

	const handleSimboloAgrupacionDigitosChange = (obj: any) => {
		setSimboloAgrupacionDigitos(obj.value);
		handleDataChange();
	};

	const handleAgrupacionDigitoChange = (obj: any) => {
		setAgrupacionDigitos(obj.value);
		handleDataChange();
	};

	const handleFormatoNumeroNegativoChange = (obj: any) => {
		setFormatoNumeroNegativo(obj.value);
		handleDataChange();
	};

	const handleMostrarCerosIzquierdaChange = (obj: any) => {
		setMostrarCerosIzquierda(obj.value);
		handleDataChange();
	};

	const handleSeparadorListaChange = (obj: any) => {
		setSeparadorLista(obj.value);
		handleDataChange();
	};

	const handleSistemaMedidaChange = (obj: any) => {
		setSistemaMedida(obj.value);
		handleDataChange();
	};

	const handleSimboloSignoNegativoChange = (e: any) => {
		setSimboloSignoNegativo(e.target.value);
	};

	// llama la funcion para validar el campo*/
	const errorMeessages = (val: any) => useErrorMeessages(val);

	const handleDigitosEstandarChange = (e: any) => {
		let val = e.target.value;
		handleDataChange();
		setDigitosEstandar(val);
		let err = errorMeessages(val);
		if (err) {
			setBottonDisabled(true);
		}
		setErrormessage(err);
	};

	const handleDigitosNativosChange = (obj: any) => {
		setUseDigitosNativos(obj.value);
		handleDataChange();
	};

	return (
		<Fragment>
			<Modal size='tiny' open={openModal} closeIcon>
				<Modal.Header> PERSONALIZAR FORMATO </Modal.Header>
				<Modal.Content>
					<div>
						<h1> Ejemplo: </h1>
						<UseAccounting data={getData} />;
					</div>

					<form onSubmit={handleSubmit}>
						<label>
							Símbolo decimal:
							<Select
								name='simboloDecimal'
								value={optnSimboloDecimal[simboloDecimal]}
								onChange={handleSimboloDecimalChange}
								options={optnSimboloDecimal}
							/>
						</label>
						<label>
							Números, de dígitos después del decimal:
							<Select
								name='digitosDespuesDecimal'
								value={optnDigitosDespuesDecimal[digitosDespuesDecimal]}
								onChange={handleDespuesDecimalChange}
								options={optnDigitosDespuesDecimal}
							/>
						</label>
						<label>
							Símbolo de agrupación de dígitos:
							<Select
								name='simboloAgrupacionDigitos'
								value={optnSimboloAgrupacionDigitos[simboloAgrupacionDigitos]}
								onChange={handleSimboloAgrupacionDigitosChange}
								options={optnSimboloAgrupacionDigitos}
							/>
						</label>
						<label>
							Agrupación de dígitos:
							<Select
								name='agrupacionDigitos'
								value={optnAgrupacionDigitos[agrupacionDigitos]}
								onChange={handleAgrupacionDigitoChange}
								options={optnAgrupacionDigitos}
							/>
						</label>
						<label>
							Símbolo de signo negativo:
							<input
								type='text'
								name='simboloSignoNegativo'
								value={simboloSignoNegativo}
								onChange={handleSimboloSignoNegativoChange}
							/>
						</label>
						<label>
							Formato de número negativo:
							<Select
								name='formatoNumeroNegativo'
								value={optnFormatoNumeroNegativo[formatoNumeroNegativo]}
								onChange={handleFormatoNumeroNegativoChange}
								options={optnFormatoNumeroNegativo}
							/>
						</label>
						<label>
							Mostrar ceros a la izquierda:
							<Select
								name='mostrarCerosIzquierda'
								value={optnMostrarCerosIzquierda[mostrarCerosIzquierda]}
								onChange={handleMostrarCerosIzquierdaChange}
								options={optnMostrarCerosIzquierda}
							/>
						</label>
						<label>
							Separador de lista:
							<Select
								name='separadorLista'
								value={optnSeparadorLista[separadorLista]}
								onChange={handleSeparadorListaChange}
								options={optnSeparadorLista}
							/>
						</label>
						<label>
							Sistema de medida:
							<Select
								name='sistemaMedida'
								value={optnSistemaMedida[sistemaMedida]}
								onChange={handleSistemaMedidaChange}
								options={optnSistemaMedida}
							/>
						</label>
						<label>
							Dígitos estándar:
							<input
								type='text'
								name='digitosEstandar'
								value={digitosEstandar}
								onChange={handleDigitosEstandarChange}
							/>
							{errormessage && <span className='error'>Formato incorrecto. </span>}
						</label>
						<label>
							Use dígitos nativos:
							<Select
								name='useDigitosNativos'
								value={optnUseDigitosNativos[useDigitosNativos]}
								onChange={handleDigitosNativosChange}
								options={optnUseDigitosNativos}
							/>
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
		</Fragment>
	);
};

function useErrorMeessages(val: any) {
	let err = '';
	/** mensaje de error */
	if (val == '' || !Number(val)) {
		err = 'Formato incorrecto.';
	}
	return err;
}
