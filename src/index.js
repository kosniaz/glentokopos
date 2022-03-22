import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/stylesheet.css'
import MetaEditor from './Components/MetaEditor'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import {database} from './database/config'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <div>
      <MetaEditor/>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
