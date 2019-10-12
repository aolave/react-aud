import { render } from 'react-dom';
import App from './App';

declare var app: any;
declare var accounting: any;

accounting.settings.number.precision = 0;
accounting.settings.number.thousand = '.';
accounting.settings.number.decimal = ',';

$.unblockUI();
render(<App data={app.vars.muestreo} />, document.getElementById('root'));
