import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Avatar, AvatarGroup, Stack,} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useThemeAction} from "@/hooks/useThemeAction";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",

    boxShadow: 24,

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function EventModal({open, handleClose, selected}: {
    open: any,
    handleOpen: any,
    handleClose: any,
    selected: any
}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme } = useThemeAction();

    // const themes = useTheme()
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{...style, background: theme === 'AlphaTwelve' ? "#fff" as string  : "#383544",}}>
                    <Stack spacing={4} >

                        <Stack spacing={0} p={4}>
                        <Stack  direction={'row'} justifyContent={'space-between'} alignItems={"center"}>
                            <Typography id="modal-modal-title" variant="h1" fontSize={"20px"}>
                                Event Name
                            </Typography>
                            <Box onClick={handleClose} sx={{display: "flex", alignItems: "center", borderRadius: "100%", padding: ".5rem .5rem", cursor:"pointer", border: "1px solid #E2E8F0" }}>
                                <Close />
                            </Box>
                        </Stack>
                            <Typography id="modal-modal-description" sx={{ color: "#64748B", fontSize:"16px"}}>
                                Event Date
                            </Typography>
                        </Stack>


                        <Stack spacing={2} px={4}>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                Event Description
                            </Typography>
                        </Stack>



                        <Stack spacing={2} px={4}>
                            <Stack spacing={2}  direction={'row'} justifyContent={'left'}>
                                <AvatarGroup max={4}>
                                    <Avatar alt="Remy Sharp" src="/avatar1.png"/>
                                    <Avatar alt="Travis Howard" src="/avatar2.png"/>
                                    <Avatar alt="Cindy Baker" src="/avatar3.png"/>
                                </AvatarGroup>
                            </Stack>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                3 Guest Speakers: Speaker name A, Speaker name B,
                                <br/>Speaker name C.

                            </Typography>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                300 Attendees
                            </Typography>
                        </Stack>

                        <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}
                             bgcolor={{background: theme === 'AlphaTwelve' ? "#F8FAFC" as string  : "#6A6676",}} padding={"2rem 2rem"}>
                            <Button variant="outlined" color="inherit">Edit</Button>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Button variant="contained" color="error">
                                    Delete
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Mark as completed
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}