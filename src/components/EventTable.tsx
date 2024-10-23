import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Pagination from '@mui/material/Pagination';
import TableRow from '@mui/material/TableRow';
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack, Typography, useTheme
} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import {Search} from "@mui/icons-material";
import EventModal from "@/components/EventModal";
import {useThemeAction} from "@/hooks/useThemeAction";

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Column {
    id: 'name' | 'date' | 'speaker' | 'status';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Event Name', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 100 },
    {
        id: 'speaker',
        label: 'Speaker',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    },

];

interface Data {
    name: string;
    date: string;
    speaker: string;
    status: string;

}

function createData(
    name: string,
    date: string,
    speaker: string,
    status: string,
): Data {

    return { name, date, speaker, status };
}

const rows = [
    createData('Cloud Innovation Summit', '2024-10-15', "Jane Doe", "Completed"),
    createData('Blockchain Revolution Conference', '2024-11-05', "Dr. Peter Smith", "In Progress"),
    createData('AI in Healthcare Symposium', '2024-12-01', "Dr. Aisha Malik", "Completed"),
    createData('Future of Fintech Forum', '2024-10-25', "John Lee", "Completed"),
    createData('Data Analytics in Business', '2024-11-12', "Rachel Moore", "Completed"),
    createData('Sustainable Energy Expo', '2024-09-28', "Prof. Alan Green", "Completed"),
    createData('Web3 Interfaces Workshop', '2024-10-10', "Kevin Adams", "In Progress"),
    createData('Cybersecurity for Startups', '2024-11-19', "Emily Zhang", "Completed"),
    createData('Smart Cities Forum', '2024-10-18', "Dr. Maria Hernandez", "In Progress"),
    createData('Tech Safari Mixer', '2024-09-30', "Guest Panel", "In Progress"),
];

export default function ColumnGroupingTable() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = React.useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [name, setName] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [date, setDate] = React.useState('');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selected, setSelected] = React.useState({});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme: themes } = useThemeAction();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //
    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };
    //
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };


    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };
    const handleDateChange = (event: SelectChangeEvent) => {
        setDate(event.target.value as string);
    };

    return (
        <Stack spacing={2}>
            <Typography fontWeight={600}>Events History</Typography>
            <Paper sx={{
                width: '100%',
                background: themes === 'AlphaTwelve' ? theme.palette.common.white as string  : "#484554",
            }}>
                <Stack mb={2} direction={{xs:"column", lg:'row'}} justifyContent={"space-between"} alignItems={"center"} spacing={2} width={"100%"}>
                    <Stack mb={2} p={{xs:0, md:2}} direction={{xs:"column", md:'row'}} alignItems={"center"} spacing={2} width={{xs:"100%", md:"auto"}}>
                        <Paper
                            component="form"
                            sx={{ background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676", height: "40px",border: themes === 'AlphaTwelve' ? `2px solid #E2E8F0` : "none", borderRadius: "5px", p: '2px 4px', display: 'flex', alignItems: 'center', width: {xs:"100%", md:"auto"} }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <Search />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Paper>

                        {/*<LocalizationProvider dateAdapter={AdapterDayjs} >*/}
                        {/*    <DatePicker  sx={{width:"120px", }} />*/}
                        {/*</LocalizationProvider>*/}
                        <FormControl size={'small'} sx={{width: {xs: "100%", md: "90px"}, background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676", borderRadius:"5px",}} >
                            <InputLabel sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,}} id="demo-simple-select-label">Date</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={date}
                                label="Date"
                                variant={'outlined'}
                                size={'small'}
                                onChange={handleDateChange}
                                sx={{borderRadius:"5px", border: `1px solid #E2E8F0`, width: "100%" }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl  size={'small'} sx={{background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676", borderRadius:"5px", width: {xs: "100%", md: "90px"},}} >
                            <InputLabel id="demo-simple-select-label" sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,}}>Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Status"
                                variant={'outlined'}
                                size={'small'}
                                onChange={handleStatusChange}
                                sx={{borderRadius:"5px",border: `1px solid #E2E8F0`,  }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl  size={'small'} sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string, background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676", borderRadius:"5px", width: {xs: "100%", md: "90px"},}} >
                            <InputLabel id="demo-simple-select-label" sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,}}>Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={name}
                                label="Name"
                                variant={'outlined'}
                                size={'small'}
                                onChange={handleChange}
                                sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string, borderRadius:"5px",border: `1px solid #E2E8F0`,  }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography fontWeight={700}>Displaying 100 results</Typography>

                    </Stack>

                    <Stack p={{xs:0, md: 2}} direction={{xs:"column", md:'row'}} alignItems={"center"} spacing={2} width={{xs:"100%", md:"auto"}}>
                        <Typography>Sort:</Typography>
                        <FormControl  size={'small'} sx={{background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676", borderRadius:"5px", width: {xs: "100%", md: "90px"},}} >
                            <InputLabel id="demo-simple-select-label" sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,}}>Most Recent</InputLabel>
                            <Select

                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={name}
                                label="name"
                                variant={'outlined'}
                                size={'small'}
                                onChange={handleChange}
                                sx={{borderRadius:"5px",  border: `1px solid #E2E8F0`  }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            sx={{width: {xs: "100%", md: "90px"}, background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676", border: `1px solid ${theme.colors.primaryAlt}`, padding: ".5rem 2rem !important", borderRadius: "5px", color: themes === 'AlphaTwelve' ? "#6A6676" as unknown as string  : theme.palette.common.white as string,}}
                            startIcon={<SaveAltIcon />}
                        >
                            Export

                        </Button>
                    </Stack>
                </Stack>

                <TableContainer sx={{ maxHeight: 440, }}>
                    <Table  aria-label="sticky table">
                        <TableHead  sx={{color: themes === 'AlphaTwelve' ? "#6A6676" as unknown as string  : theme.palette.common.white as string, background: themes === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676",}}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth, color: themes === 'AlphaTwelve' ? "#6A6676" as unknown as string  : theme.palette.common.white as string, }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead  >
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, i) => {
                                    return (
                                        <TableRow sx={{cursor:"pointer"}} onClick={handleOpen} hover role="checkbox" tabIndex={-1} key={i}>
                                            {columns.map((column) => {

                                                const value = row[column.id];
                                                return <>
                                                    {
                                                        column.id === "status"  ? (
                                                            <TableCell sx={{border: "none"}} key={column.id} align={column.align}>
                                                                <Box sx={{background: value ===  "In Progress" ? "#DBEAFE" : "#D1FAE5", padding: ".5rem", borderRadius: "8px", width: "120px", color: value === "In Progress" ? "#3B82F6" : "#10B981" }}>
                                                                    <FiberManualRecordIcon  sx={{fontSize:"8px", color:value ===  "In Progress" ? "#3B82F6" : "#10B981", }} />  { value}
                                                                </Box>
                                                            </TableCell>
                                                        ) : (
                                                            <TableCell sx={{border: "none"}} key={column.id} align={column.align}>
                                                                {value}
                                                            </TableCell>
                                                        )
                                                    }
                                                </>;
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                    <Typography sx={{display: "flex", alignItems: "center", gap: "10px"}}>Show: <FormControl  size={'small'} sx={{ borderRadius:"5px", width:"90px"}} >
                        <InputLabel sx={{color: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,}} id="demo-simple-select-label">10 rows</InputLabel>
                        <Select

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={name}
                            label="name"
                            variant={'outlined'}
                            size={'small'}
                            onChange={handleChange}
                            sx={{borderRadius:"5px",  border: `1px solid #E2E8F0`  }}
                        >
                            <MenuItem value={10}>20 rows</MenuItem>
                            <MenuItem value={20}>40 rows</MenuItem>
                            <MenuItem value={30}>60 rows</MenuItem>
                        </Select>
                    </FormControl></Typography>
                </Stack>
                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[10, 25, 100]}*/}
                {/*    component="div"*/}
                {/*    count={rows.length}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    page={page}*/}
                {/*    onPageChange={handleChangePage}*/}
                {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*/>*/}

                <EventModal open={open} handleOpen={handleOpen} handleClose={handleClose} selected={selected}/>
            </Paper>
        </Stack>

    );
}