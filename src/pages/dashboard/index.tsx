import React from 'react';
import {DashboardLayout} from "@/layout/DashboardLayout";
import {Box, Card, Stack, Tooltip, Typography} from "@mui/material";
import DashboardCard from "@/components/card/DashboardCard";
import {cardItems} from "@/mock/cardItems";
import EventChartCard from "@/components/card/EventChartCard";
import EventCarousel from "@/components/card/EventCarousel";
import ColumnGroupingTable from "@/components/EventTable";
import {useThemeAction} from "@/hooks/useThemeAction";
import Image from "next/image";
import SideNav from "@/components/SideNav";

function Dashboard() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme: themes } = useThemeAction();

    const [show, setShow] = React.useState(false);
    return (
        <DashboardLayout>
            <Stack spacing={4} width={'100%'} position={'relative'}>
                {show && <SideNav setShow={setShow}/>}
                <Box padding={"0px !important"} display={{xs:"flex", lg: "none"}} justifyContent="space-between" alignItems="center">
                    <Tooltip title={"AlphaTwelve"}>
                        <Image
                            style={{
                                margin: "20px 0px",
                                alignItems: "left",

                            }}
                            width={100}
                            height={30}
                            alt={"logo"}
                            src={"/Logo.png"}
                        />
                    </Tooltip>
                    <Image
                        style={{
                           cursor: "pointer",
                            alignItems: "left",

                        }}
                        width={30}
                        height={30}
                        alt={"logo"}
                        src={"/nav.png"}
                        onClick={()=>{
                            setShow(true)
                        }}
                    />
                </Box>
                <Typography variant={'h4'} fontSize={"22px"} lineHeight={"20px"} fontWeight={500}>
                    Welcome! here’s your summary
                </Typography>

                <Box display="grid"
                     gridTemplateColumns={{xs: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)'}} gap="10px"
                     width="100%">
                    {React.Children.toArray(
                        cardItems.map(card => (
                            <DashboardCard card={card}/>
                        ))
                    )}
                </Box>

                <Box>
                    <Stack direction={{xs: 'column', lg: 'row'}} alignItems={'center'} spacing={2} width={"100%"}>
                        <Card sx={{
                            borderRadius: "5px",
                            padding: "2rem",
                            width: {xs: "100%", lg: "50%"},
                            background: themes === 'AlphaTwelve' ? "#fff" : "#484554",
                            border: themes === 'AlphaTwelve' ? "1px solid #F2F2F7" : "none"
                        }}>
                            <EventChartCard/>
                        </Card>
                        <Box width={{xs: "100%", lg: "50%"}}>
                            <EventCarousel/>
                        </Box>

                    </Stack>
                </Box>

                <ColumnGroupingTable/>
            </Stack>
        </DashboardLayout>
    );
}


export default Dashboard;