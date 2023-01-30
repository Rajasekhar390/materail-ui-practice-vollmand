import { Edit, LocationOn } from '@mui/icons-material'
import { Avatar, Box, Card, Chip, Divider, IconButton, Stack, Switch, Typography } from '@mui/material'
import React from 'react'

const Propile = () => {
    return (
        <Card>
            
            <Box sx={{ p: 2, display: "flex" }}>
                <Avatar />
                <Stack>
                    <Typography>RaJasekhar </Typography>
                    <Typography><LocationOn />Markapur,IN </Typography>
                </Stack>
                <IconButton>
                    <Edit />
                </IconButton>
            </Box>
            <Divider/>
            <Stack>
                <Chip>
                    Active account
                </Chip>
                <Switch/>
            </Stack>
        </Card>
    )
}

export default Propile