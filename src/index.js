import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/stylesheet.css'
import MetaEditor from './Components/MetaEditor'


ReactDOM.render(
  <div>
    <MetaEditor/>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
