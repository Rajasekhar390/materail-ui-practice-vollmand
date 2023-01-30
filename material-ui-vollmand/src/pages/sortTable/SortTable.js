import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import mockData from './MOCK_DATA.json'

const SortTable = () => {
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
        <Box> <TableContainer component={Paper} >
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
                        data.length > 0 && data.map((user, index) => (


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

export default SortTable