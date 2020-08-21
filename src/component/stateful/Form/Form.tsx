import * as React from 'react'

import {Button} from '../../stateless/Button/Button'

export const Form = () => {
  return  <div>
    <Button text={'aaaaaa'} onClick={async () => {
      console.log('onClick')
      const res = await fetch('/todo').then(res => res.json())
      console.log(res)
    }} />
    <div>bbbbbbb</div>
  </div>
}