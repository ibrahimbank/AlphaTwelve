import React from 'react';
import {Box, Stack, Typography, useTheme} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import {useThemeAction} from "@/hooks/useThemeAction";

interface CardProps {
    name: string;
    price: string;
    direction: string;
    amount: string;
}
function DashboardCard({card}: {card: CardProps }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme: themes } = useThemeAction();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const theme = useTheme()
    return (
        <Stack sx={{border: themes === 'AlphaTwelve' ?  "1px solid #F2F2F7" : "none", padding: "26px", borderRadius: "2px", display:"flex", flexDirection: "column", width: "100%", background: themes === 'AlphaTwelve' ? "inherit" : "#484554"}}>
            <Box display="flex" alignItems="center" gap="10px">
                <Typography>
                    {card.name}
                </Typography>

                <InfoOutlinedIcon sx={{color: '#484554'}}/>
            </Box>

            <Box display="flex" alignItems="center" gap="10px">
                <Typography>
                    {card.amount}
                </Typography>

                {card.direction === "up" && <ArrowOutwardOutlinedIcon color={card.direction === "up" ?'success' : 'error'}/>}

                <Typography color={'success'}>
                    {card.price}
                </Typography>
            </Box>
        </Stack>
    );
}

export default DashboardCard;