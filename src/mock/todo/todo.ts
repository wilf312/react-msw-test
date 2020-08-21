import {rest} from 'msw'

let todos = [
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

export const todoGet = rest.get('/todo', (req, res, ctx) => {
  
  return res(
    ctx.delay(300),
    ctx.status(200, 'ok'),
    ctx.json({
      result: {
        code: '0000'
      },
      todos
    })
  )
})

export const todoUpdate = rest.put('/todo', (req: any, res, ctx) => {
  const { id, done } = req.body
  todos = todos.map(d => {
    return {
      ...d,
      done: d.id === id ? done : d.done
    }
  })
  return res(
    ctx.delay(300),
    ctx.status(201, 'ok'),
    ctx.json({
      result: {
        code: '0000'
      },
    })
  )
})
