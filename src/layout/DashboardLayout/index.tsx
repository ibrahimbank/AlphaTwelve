import {FC, ReactNode} from "react";
import {Box, Stack} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import PropTypes from "prop-types";
import Footer from "@/components/Footer";


interface BoxedSidebarLayoutProps {
    children?: ReactNode;
}


export const DashboardLayout: FC<BoxedSidebarLayoutProps> = ({ children }) => {

    return (
        <Stack direction={"row"} width={'100%'} sx={{}}>
        <Sidebar/>

            <Box sx={{
                display: 'flex',
                width: "100%",
                flexDirection: 'column'
            }}>
<Box sx={{
                display: 'flex',
                width: "100%",
                flexDirection: 'column',
                height: '100vh',
                minHeight: '100vh',
                maxHeight: '100vh',
                overflowX: 'hidden',
                position: 'relative',
                padding: {xs:"1rem", md:"2rem 3rem"}
            }}>

               {children}



            </Box>
                <Footer/>
            </Box>
        </Stack>
    )

}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};