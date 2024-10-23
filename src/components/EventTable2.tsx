import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Typography, TablePagination, Box, Grid, Button,
} from '@mui/material';

// Sample Data
const data = [
    { eventName: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
    { eventName: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'Completed' },
    { eventName: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'In Progress' },
    { eventName: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
    { eventName: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
    { eventName: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'Completed' },
    { eventName: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'Completed' },
    { eventName: 'Cybersecurity for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'Completed' },
    { eventName: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'In Progress' },
    { eventName: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'In Progress' },
];

export default function EventsTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Events History
            </Typography>

            <Grid container>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="events history table">
                            {/* Table Header */}
                            <TableHead>
                                <TableRow>
                                    <TableCell>Event Name</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Speaker</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>

                            {/* Table Body */}
                            <TableBody>
                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.eventName}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.speaker}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    backgroundColor: row.status === 'Completed' ? 'lightgreen' : 'lightblue',
                                                    color: row.status === 'Completed' ? 'green' : 'blue',
                                                }}
                                            >
                                                {row.status}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/* Pagination */}
                <Grid item xs={12} sx={{ marginTop: '10px' }}>
                    <TablePagination
                        component="div"
                        count={data.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
