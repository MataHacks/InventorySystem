import React from 'react';
import {Box, Container} from "@material-ui/core";
import NavMenu from "./features/nav-menu/containers/NavMenu";
import Footer from "./features/footer/containers/Footer";


const Layout = ( props ) => {
    return (
        <Container maxWidth='lg' style={{ padding: '0' }}>
            <NavMenu />
            <Box minHeight='70vh'>
                { props.children }
            </Box>
            <Footer />
        </Container>
    )
}

export default Layout
