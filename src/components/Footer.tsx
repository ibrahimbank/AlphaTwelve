import React from 'react';
import { Box, Button, List, ListItem, Stack} from "@mui/material";
import {getFooterItems} from "@/layout/DashboardLayout/items";
import NextLink from "next/link";
import {useThemeAction} from "@/hooks/useThemeAction";

function Footer() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme } = useThemeAction();

    return (
        <Stack component={'div'} sx={{display: {xs: "flex", md: "none"},  background: theme === 'AlphaTwelve' ? "#F1F5F9" as string  : "#6A6676",}} direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={0} width={"100%"}>

            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {getFooterItems.map(({name, link, icon: Icon, badge}, i) => (
                <List
                    key={i}
                    sx={{padding: "0px !important",  width: "20%"}}
>
                    <ListItem component="div" key={name}>
                        <Button
                            disableRipple
                            href={link}
                            component={NextLink}
                            sx={{padding: "0px !important", color: theme === 'AlphaTwelve' ?  "#334155" : "#fff"}}

                        >
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: theme === 'AlphaTwelve' ?  "#334155" : "#fff",
                            }}>

                                {Icon
                                    ? <Icon/>
                                    : null}
                                { (name)}

                            </Box>
                        </Button>
                    </ListItem>

                </List>

                ))}

                </Stack>
    );
}

export default Footer;