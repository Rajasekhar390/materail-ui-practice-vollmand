import { Box, Button, ImageList, ImageListItem, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Users() {
    const { data } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <Button sx={{ backgroundColor: 'greenyellow' }} onClick={handleOpen}>Add User</Button>
            <TableContainer component={Paper} >
                <Table >
                    <TableHead sx={{ textAlign: 'center' }}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell >Email Adress</TableCell>
                            <TableCell >FirstName</TableCell>
                            <TableCell >LastName</TableCell>
                            <TableCell >Avatar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.length > 0 && data.map((user, index) => (


                                <TableRow key={index}>

                                    <TableCell >{index + 1}</TableCell>
                                    <TableCell >{user.email}</TableCell>
                                    <TableCell >{user.first_name}</TableCell>
                                    <TableCell >{user.last_name}</TableCell>
                                    <TableCell ><ImageList sx={{ width: 250, height: 250, borderRadius: "50" }}  >

                                        <ImageListItem >
                                            <img
                                                src={user.avatar}
                                                alt={"pic"}
                                                loading="lazy"
                                            />
                                        </ImageListItem>

                                    </ImageList></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant='h4' fontWeight={"bold"} sx={{ color: 'green', textDecoration: "underline" }}>
                        Add New User
                    </Typography>
                    <TextField sx={{ marginTop: 5 }} id="outlined-basic" label="Email Address" variant="outlined" fullWidth />
                    <TextField sx={{ marginTop: 5 }} id="outlined-basic" label="FirstName" variant="outlined" fullWidth />
                    <TextField sx={{ marginTop: 5 }} id="outlined-basic" label="LastName" variant="outlined" fullWidth />
                    <TextField sx={{ marginTop: 5 }} id="outlined-basic" type="file" variant="outlined" fullWidth />

                    <Button fullWidth sx={{ marginTop: 5, background: 'green', color: 'white' }}>Save</Button>
                </Box>
            </Modal>
        </div>
    )
}