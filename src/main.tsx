import {render} from 'react-dom'
import * as React from 'react'

const rootElement = document.querySelector('app')

// type tupleTest = [number, string]
// const [num1, str1]:tupleTest = [1, 'test']
// const [num2, str2]:tupleTest = ['test', 1] // => error

render(<div>test</div>, rootElement)
