import { render } from 'react-dom';
import App from './App';

declare var app: any;

/*
accounting.settings.number.precision = 0;
accounting.settings.number.thousand = '.';
accounting.settings.number.decimal = ',';
*/

$.unblockUI();
render(<App data={app.vars.renewal} />, document.getElementById('root'));
