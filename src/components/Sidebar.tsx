import React, { useContext} from 'react';
import NextLink from 'next/link';
import {SidebarContext} from "@/context/SidebarContext";
import {Avatar, Badge, Box, Button, List, ListItem, Stack, Tooltip, Typography} from "@mui/material";
import HeaderTheme from "@/layout/DashboardLayout/ModeSwitcher";
import {getItems} from "@/layout/DashboardLayout/items";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import Image from "next/image";

import {useThemeAction} from "@/hooks/useThemeAction";


function Sidebar() {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
    const closeSidebar = () => toggleSidebar();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme } = useThemeAction();

    // const themee = useTheme()



    return (

        <Stack
        sx={{
           borderRight: theme === 'AlphaTwelve' ? `2px solid #F1F5F9` : `none`,
            background: theme === 'AlphaTwelve' ? "" : "#484554"
        }}
        >
            <Tooltip title={"AlphaTwelve"}>
            <Image
                style={{
                    borderRadius: "10px",
                    display: "block",
                    margin: "20px auto",
                    alignItems: "left",

                }}
                width={100}
                height={30}
                alt={"logo"}
                src={"/Logo.png"}
            />
                </Tooltip>
            {getItems.map(({name, link, icon: Icon,badge}, i) => (
                <List
                    key={i}
                    sx={{padding: "0px !important"}}
                    component="div"
                >
                    <ListItem component="div" key={name}>
                        <Button
                            disableRipple
                            href={link}
                            component={NextLink}
                            startIcon={Icon && <Icon style={{color: "#ADA9BB"}}/>}
                            onClick={closeSidebar}
                            sx={{color: theme === 'AlphaTwelve' ?  "#334155" : "#fff"}}

                        >
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: !sidebarToggle ? "4rem" : ""
                            }}>
                                {!sidebarToggle && (name)}
                                {badge &&  <Badge badgeContent={8} color={'error'} />}
                            </Box>

                        </Button>
                    </ListItem>

                </List>
            ))}
            <List
                sx={{padding: "0px !important"}}
                component="div"
            >
                <ListItem component="div" >
                    <Button
                        disableRipple
                        startIcon={sidebarToggle ? <KeyboardDoubleArrowRightIcon style={{color: "#ADA9BB"}}/> : <KeyboardDoubleArrowLeftIcon style={{color: "#ADA9BB"}}/>}
                        onClick={closeSidebar}
                        sx={{color: theme === 'AlphaTwelve' ?  "#334155" : "#fff"}}
                    >
                        {!sidebarToggle && "Collapse"}


                    </Button>
                </ListItem>

            </List>
            <List
                sx={{padding: "0px !important"}}
                component="div"
            >
                <ListItem component="div">
                    <HeaderTheme   />
                </ListItem>

            </List>
            <List
                sx={{padding: "0px !important"}}
                component="div"
            >
                <ListItem component="div" sx={{display:"flex", alignItems: "center", gap: "10px"}}>
                    <Avatar />
                    {!sidebarToggle && <Box>
                        <Typography sx={{color: theme === 'AlphaTwelve' ?  "#334155" : "#fff"}} variant="h6" component="div">
                            Rudra Devi
                        </Typography>
                        <Typography sx={{color: theme === 'AlphaTwelve' ?  "#334155" : "#fff"}} variant="h6" component="div">
                            rudra.devi@gmail.com
                        </Typography>
                    </Box>}
                </ListItem>

            </List>
   </Stack>
    );
}

export default Sidebar;