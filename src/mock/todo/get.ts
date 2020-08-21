import {rest} from 'msw'

let hoge = 1 // 値の更新とか

export const todoGet = rest.get('/todo', (req, res, ctx) => {
  
  return res(
    ctx.delay(300),
    ctx.status(200, 'ok'),
    ctx.json({
      num: hoge++,
      todo: [
        {
          id: 1,
          text: '1',
          done: false
        },
        {
          id: 2,
          text: '2',
          done: true
        },
        {
          id: 3,
          text: '3',
          done: false
        },
      ]
    })
  )
})
