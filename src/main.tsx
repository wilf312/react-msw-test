import {render} from 'react-dom'
import * as React from 'react'
import { Form } from './component/stateful/Form/Form'

if (process.env.NODE_ENV === 'development') {
  const {worker} = require('./mock/browser')
  worker.start()
}

const rootElement = document.querySelector('#main')
render(<div><Form /></div>, rootElement)
