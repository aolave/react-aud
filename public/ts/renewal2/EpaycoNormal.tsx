import { PureComponent } from 'react';

type props = {
	data: any;
	callback: any;
};

type EpaycoState = {
	checked: any;
	totalAmount: number;
	countAll: number;
};

export class Epayco extends PureComponent<props, EpaycoState> {
	constructor(props: props, epaycoState: EpaycoState) {
		super(props);
		this.state = {
			open: false,
			buttonRenewal: true,
			userTotalAmount: 5,
			userCountAll: 40000
		};
	}

	/* 
*Recibe los eventos deh checkbox
*@returns crea el emcabezado de la tabla.
*/

	render() {
		return <div className='epayco' />;
	}
}
