import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUser, uploadUser } from './postSlice'

export default function Posts() {
    // const count = useSelector((state) => state.counter.value)
    const { data } = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [userId, setUserId] = useState('')
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h3'>UsersData:</Typography>
            {
                data.length > 0 && data.map((post, index) => (
                    <Typography marginTop={2} key={index} component={"p"}>{post.name}
                        <Button onClick={() => {
                            setUserId(post.Id)
                            setName(post.name)
                        }} sx={{ backgroundColor: 'green', color: 'white' }}>Edit</Button>
                        <Button onClick={() => {
                            dispatch(deleteUser(post.id))
                        }} sx={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
                    </Typography>))
            }

            <TextField sx={{ marginTop: 2 }} id="outlined-basic" label="Enter Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /><br />
            <Button onClick={() => {
                if (userId) {
                    dispatch(updateUser({ id: userId, name }));
                    setName('')
                } else {
                    dispatch(addUser({ name }));
                    setName('')
                }

            }} sx={{ backgroundColor: 'green', color: 'white', marginTop: 2 }}>

                { userId ? "Update" : "save"}
            </Button>
        </Box>
    )
}