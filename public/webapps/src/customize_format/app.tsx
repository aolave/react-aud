import { PureComponent, Fragment } from 'react';
import { CustomizeForm } from './CustomizeForm';

type Props = {
	data: any;
};

type AppState = {};

export default class App extends PureComponent<Props, AppState> {
	constructor(props: Props, appState: AppState) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Fragment>
				<div className='form'>
					<CustomizeForm data={this.props.data} />
				</div>
			</Fragment>
		);
	}
}
