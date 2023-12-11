import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import logo from "../Images/logo.png";
const Home = () => {
   return (
      <Container width="100%">
         <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridGap="2rem"
            marginTop="3rem"
            sx={{
               "@media (max-width: 700px)": {
                  display: "inline-block",
               },
            }}>
            <Box
               component="img"
               sx={{
                  display: {
                     height: "95%",
                     width: "85%",
                     padding: "5px",
                     objectFit: "cover",
                     borderRadius: "15px",
                     "@media (max-width: 500px)": {
                        height: "80%",
                        width: "70%",
                        padding:"10px"
                     },
                  },
               }}
               alt="The house from the offer."
               src={logo}
            />
            <Box padding={3} marginTop={10}  
               sx={{
               "@media (max-width: 700px)": {
                  marginTop:'1'
               },
            }}>
               <Typography variant="h3"  color="#27AE60" >
                  Hi, I'm Divya Marathi.
               </Typography>
               <Typography variant="h5">
               <Typewriter
                     options={{
                        strings: [
                           "I'm from Karwar.", 
                           "I'm a Full Stack developer",
                           "I love to create beautiful and functional websites.",
                           "Thank You for Visiting...",
                        ],
                        autoStart: true,
                        loop: true,
                     }}
                  />
               </Typography>
               <Typography variant="h6" paddingTop={3} color="">My skillsets include languages like JavaScript, CSS3, HTML5 and Java together with frameworks like React JS, and Bootstrap, and cloud tools like firebase. I do this because I love the process of turning dreams into reality by converting ideas into code. I have a serious passion for converting top-grade UI’s with working logic to create a dynamic user experience.</Typography>
            </Box>
         </Box>
      </Container>
   );
};

export default Home;
