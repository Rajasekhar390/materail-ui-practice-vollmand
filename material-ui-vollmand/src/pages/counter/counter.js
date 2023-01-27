import { Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export default function Counter() {
  // const count = useSelector((state) => state.counter.value)
  const {value} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button sx={{ backgroundColor: 'orangered', color: 'white' }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Typography variant='h3' sx={{color:'wheat'}}>{value}</Typography>
        <Button sx={{ backgroundColor: 'green', color: 'white' }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button sx={{ backgroundColor: 'red', color: 'white' }}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(50))}
        >
          IncreaseByAmount
        </Button>
      </div>
    </div>
  )
}