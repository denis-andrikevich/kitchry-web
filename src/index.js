import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './kitchry-core/redux/store';
import CoreRouting from './routing';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

injectTapEventPlugin();

const App = () =>(
	<MuiThemeProvider>
    	<Provider store={store}>
	       <CoreRouting />
	    </Provider>
  	</MuiThemeProvider>
)

render(
    <App />,
    document.getElementById('root')
)