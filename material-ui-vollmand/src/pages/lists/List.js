import { Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function List() {
  // const count = useSelector((state) => state.counter.value)
  const {value} = useSelector((state) => state.lists)
  const dispatch = useDispatch()

  return (
    <div>
     hello
    </div>
  )
}