import React, { useState } from 'react';
import { Modal, Button, Popup } from 'semantic-ui-react';
import Select from 'react-select';

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
	const {
		vlSimboloDecimal,
		vlDigitosDespuesDecimal,
		vlSimboloAgrupacionDigitos,
		vlAgrupacionDigitos,
		vlSimboloSignoNegativo,
		vlFormatoNumeroNegativo,
		vlMostrarCerosIzquierda,
		vlSeparadorLista,
		vlSistemaMedida,
		vlDigitosEstandar,
		vlUseDigitosNativos
	} = props.data.contentb;

	const [ openModal, setOpentModal ] = useState(true);
	const [ bottonDisabled, setBottonDisabled ] = useState(true);

	const [ simboloDecimal, setSimboloDecimal ] = useState(vlSimboloDecimal);
	const [ digitosDespuesDecimal, setDigitosDespuesDecimal ] = useState(vlDigitosDespuesDecimal);
	const [ simboloAgrupacionDigitos, setSimboloAgrupacionDigitos ] = useState(vlSimboloAgrupacionDigitos);
	const [ agrupacionDigitos, setAgrupacionDigitos ] = useState(vlAgrupacionDigitos);
	const [ simboloSignoNegativo, setSimboloSignoNegativo ] = useState(vlSimboloSignoNegativo);
	const [ mostrarCerosIzquierda, setMostrarCerosIzquierda ] = useState(vlMostrarCerosIzquierda);
	const [ formatoNumeroNegativo, setFormatoNumeroNegativo ] = useState(vlFormatoNumeroNegativo);
	const [ separadorLista, setSeparadorLista ] = useState(vlSeparadorLista);
	const [ sistemaMedida, setSistemaMedida ] = useState(vlSistemaMedida);
	const [ digitosEstandar, setDigitosEstandar ] = useState(vlDigitosEstandar);
	const [ useDigitosNativos, setUseDigitosNativos ] = useState(vlUseDigitosNativos);

	const closeModal = () => {
		setOpentModal(false);
	};

	const handleSubmit = (e: any) => {
		console.log({ simboloDecimal });
		closeModal();
		const getData = {
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
		};
		console.log(getData);
	};

	const handleSimboloDecimalChange = (obj: any) => {
		setSimboloDecimal(obj.value);
		setBottonDisabled(false);
	};

	const handleDespuesDecimalChange = (obj: any) => {
		setDigitosDespuesDecimal(obj.value);
		setBottonDisabled(false);
	};

	const handleSimboloAgrupacionDigitosChange = (obj: any) => {
		setSimboloAgrupacionDigitos(obj.value);
		setBottonDisabled(false);
	};

	const handleAgrupacionDigitoChange = (obj: any) => {
		setAgrupacionDigitos(obj.value);
		setBottonDisabled(false);
	};

	const handleFormatoNumeroNegativoChange = (obj: any) => {
		setFormatoNumeroNegativo(obj.value);
		setBottonDisabled(false);
	};

	const handleMostrarCerosIzquierdaChange = (obj: any) => {
		setMostrarCerosIzquierda(obj.value);
		setBottonDisabled(false);
	};

	const handleSeparadorListaChange = (obj: any) => {
		setSeparadorLista(obj.value);
		setBottonDisabled(false);
	};

	const handleSistemaMedidaChange = (obj: any) => {
		setSistemaMedida(obj.value);
		setBottonDisabled(false);
	};

	const handleSimboloSignoNegativoChange = (e: any) => {
		setSimboloSignoNegativo(e.target.value);
		/** cambia el estado del boton guardar */
		setBottonDisabled(false);
	};
	const handleDigitosEstandarChange = (e: any) => {
		setDigitosEstandar(e.target.value);
		/** cambia el estado del boton guardar */
		setBottonDisabled(false);
	};

	const handleDigitosNativosChange = (obj: any) => {
		setUseDigitosNativos(obj.value);
		setBottonDisabled(false);
	};

	return (
		<Modal size='tiny' open={openModal} closeIcon>
			<Modal.Header> PERSONALIZAR FORMATO </Modal.Header>
			<Modal.Content>
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
	);
};
