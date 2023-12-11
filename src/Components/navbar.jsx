import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {Container, Button, Box} from '@mui/material'
import {Home,Person, BusinessCenter, Mail} from '@mui/icons-material'
const navbar = () => {
    const data = [
        {
            icon: <Home style={{fontSize: '30px'}} />,
            name: "Home",
            link: "/",
        },
        {
            icon: <Person style={{fontSize: '30px'}} />,
            name: "About",
            link: "/about",
        },
        {
            icon: <BusinessCenter style={{fontSize: '30px'}} />,
            name: "My Projects",
            link: "/project",
        },
        {
            icon: <Mail style={{fontSize: '30px'}} />,
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <Container display="flex" width="100%">       
            <Box width='90%' style={{float: 'left'}}>
                <Outlet />
            </Box>
            <Box
                position= 'fixed'
                zIndex={15}
                top={'30%'}
                right= {'1%'}
                display= 'flex'
                flexDirection= 'column'
                alignItems= 'center'
                justifyContent= 'center'
                transform= 'translateY(-50%)'>
                {data.map((Val) => {
                    return (
                        <NavLink to={`${Val.link}`}>
                                <Button
                                color="info"
                                    style={{
                                        borderRadius:'50%',
                                        padding:'15%',
                                        marginBottom: '20%',
                                        color:'#27ae60',
                                        backgroundColor:'#454e56'
                                    }}
                                >
                                    {Val.icon}
                                </Button>
                        </NavLink>
                    );
                })}
            </Box>
        </Container>
    );
};

export default navbar;
