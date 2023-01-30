import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import mockData from './MOCK_DATA (1).json'

const SearchTable = () => {
    const [searchText, setSearchText] = useState('')
    const [data, setData] = useState(mockData)
    const [order, setOrder] = useState('ASC')
    const sorting = (col) => {
        if (order == 'ASC') {
            const sorted = [...data].sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
            setData(sorted)
            setOrder('DSC')
        }
        if (order == 'DSC') {
            const sorted = [...data].sort((a, b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
            setData(sorted)
            setOrder('ASC')
        }

    }

    return (
        <Box>
            <TextField id="outlined-basic" label="Search...." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <TableContainer component={Paper} >
                <Table >
                    <TableHead sx={{ textAlign: 'center' }}>
                        <TableRow >
                            <TableCell >ID</TableCell>
                            <TableCell >Email Adress <ArrowUpward onClick={() => sorting("email")} /><ArrowDownward onClick={() => sorting("email")} /></TableCell>
                            <TableCell >FirstName</TableCell>
                            <TableCell >LastName</TableCell>
                            <TableCell >Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.length > 0 && data.filter((val) => {
                                if (searchText === '') {
                                    return val;
                                } else if (
                                    val.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                                    val.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
                                    val.email.toLowerCase().includes(searchText.toLowerCase())
                                ) {
                                    return val;
                                }

                            }

                            ).map((user, index) => (


                                <TableRow key={index}>

                                    <TableCell >{index + 1}</TableCell>
                                    <TableCell >{user.email}</TableCell>
                                    <TableCell >{user.first_name}</TableCell>
                                    <TableCell >{user.last_name}</TableCell>
                                    <TableCell >{user.gender}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer></Box>
            
    )
}

export default SearchTable