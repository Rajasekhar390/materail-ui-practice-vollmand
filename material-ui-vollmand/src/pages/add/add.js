import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, deletePost } from '../add/addSlice'

export default function Add() {
    const [title, setTitle] = useState('')
    const [para, setPara] = useState('')
    const [text, setText] = useState('')
    console.log(title, para, text)
    const posts = useSelector((state) => state.add.items)
    const dispatch = useDispatch()

    return (
        <Box textAlign={"center"}>
            <Typography variant='h3' color="secondary"> REACT JS CRUD APP </Typography>
            <Box>

                <TextField type="text" value={title} label='Enter Title' onChange={(e) => setTitle(e.target.value)} />
                <TextField type="text" value={text} label='Wish the Republic day' onChange={(e) => setText(e.target.value)} />
                <TextField type="text" value={para} label='Enter Para' onChange={(e) => setPara(e.target.value)} /><br />
                <Button onClick={() => {
                    dispatch(addPost({ id: 1, title, text, para }))
                    console.log(title, text, para)
                }

                } sx={{ background: 'green', color: 'white', marginTop: 2 }}>Add</Button>
            </Box>
            {
                // posts.map((each, index) => {
                //     return (
                //         <>
                //             <h1 key={index}>{each.title}</h1>
                //             <h1>{each.para}</h1>
                //         </>)
                // })

                posts.length > 0 && posts.map((each, id) => (
                    <Box key={id}>
                        <Typography variant='h3' style={{ color: "orangered" }}>{each.title}</Typography>
                        <Typography variant='h4' style={{ color: 'blue' }}>{each.text}</Typography>
                        <Typography variant='h5' style={{ color: 'green' }}>{each.para}</Typography><br />
                        <Button sx={{ background: 'blue', color: 'white' }}>Edit</Button>
                        <Button sx={{ background: 'red', color: 'white', marginLeft: 2 }} onClick={() => {
                            dispatch(deletePost(each.id))
                        }}>Delete</Button>
                    </Box>
                ))}
        </Box>
    )
}