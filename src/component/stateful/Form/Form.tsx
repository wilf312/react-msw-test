import * as React from 'react'

import {Button} from '../../stateless/Button/Button'

export const Form = () => {
  return  <div>
    <Button text={'fetch'} onClick={async () => {
      console.log('onClick')
      const res = await fetch('/todo').then(res => res.json())
      console.log(res.todos[0])
    }} />
    <Button text={'put'} onClick={async () => {
      console.log('onClick')
      const res = await fetch('/todo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: 1, done: true})
      }).then(res => res.json())
      console.log(res)
    }} />
    <div>bbbbbbb</div>
  </div>
}