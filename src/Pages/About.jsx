import React from "react";
import { Container, Box, Typography } from "@mui/material";
const About = () => {
   const data = [
      {
         name: "Html5",
         width: "80%",
      },
      {
         name: "CSS3",
         width: "95%",
      },
      {
         name: "JavaScript",
         width: "75%",
      },
      {
        name: 'ReactJs',
        width: '90%',
      },     
      {
        name: 'Jquery',
        width: '88%',
      },
      {
        name: 'Bootstrap',
        width: '92%',
      },
      {
         name: 'NodeJs',
         width: '75%',
       },
      {
         name: 'Express',
         width: '70%',
       },
       {
         name: 'MongoDb',
         width: '74%',
       },
   ];
   return (
      <Container width="100%" textAlign="center">
         <Box
            display="grid"
            gridTemplateColumns="max-content max-content"
            width="90%"
            padding={2}
            alignItems="center"
            justifyContent={"center"}>
            <Typography variant="h4" color='#ffffff' padding={1} textTransform={'uppercase'}>
               About
            </Typography>
            <Typography variant="h4" color='#27AE60' padding={1} textTransform={'uppercase'}>
               Me
            </Typography>
         </Box>
         <Box
            width="90%"
            padding={3}
            marginLeft={2}
            marginRight={2}>
            <Typography
               variant="h3"
               color="#ffffff"
               padding={1}
               fontSize={"1.5rem"}
               textTransform={"uppercase"}>
               Information About Me
            </Typography>
            <Box
               width="90%"
               padding={2}
               marginRight={2}
               paddingBottom={5}>
               <Typography
                  variant="p"
                  lineHeight="2rem"
                  padding="1rem"
                  breakPoint="sm"
                  textJustify="auto"
                  color="#dbe1e8"
                  marginLeft={5}
                  marginRight={20}
                  sx={{
                  '@media (max-width: 500px)':{marginLeft:'3%'}   
                  }}>
                  I am Divya Marathi.  I am
                  from Karwar,Karnataka. I BCA passed
                  from Shivaji college,Baad Karwar, Karnatak in
                  2020 with a degree in Computer Science.My interests are in Web Development and I love to create beautiful
                  and performant products with delightful
                  user experiences.
               </Typography>
               <br />
               <Typography
                  variant="p"
                  lineHeight="2rem"
                  padding="1rem"
                  breakPoint="sm"
                  textJustify="auto"
                  color="#dbe1e8"
                  marginLeft={5}
                  marginRight={20}
                  sx={{
                  '@media (max-width: 500px)':{marginLeft:'3%'}   
                  }}>
                  Let me introduce myself in 7 words.
                  Responsible, creative, open-minded,
                  friendly and ambitious web developer. This
                  is how I see myself, and hope you will
                  give me a chance to prove my words in the
                  job, or at least in this interview.
               </Typography>
            </Box>
         </Box>
         <Box
            width="90%"
            padding={2}
            marginLeft={2}
            marginRight={2}
            textAlign="center">
            <Typography
               variant="h4"
               color="#ffffff"
               padding={2}
               fontSize={"2rem"}
               fontWeight={"bold"}
               textTransform={"uppercase"}>
               My Skills
            </Typography>
            <Box
               display="grid"
               gridTemplateColumns="45% 45%"
               gridGap="2rem"
               columnGap="10%"
               textAlign="center">
               {data.map((Val) => {
                  return (
                     <Box
                        display="flex"
                        flexDirection="column"
                        marginTop="1rem"
                        padding={1}
                        textAlign='left'>
                        <Typography
                           variant="p"
                           textTransform="uppercase"
                           fontWeight="500">
                           {Val.name}
                        </Typography>
                        <Box
                           display="flex"
                           alignItems="center">
                           <Typography
                              variant="p"
                              color="#b2becd">
                              {Val.width}
                           </Typography>
                           <Box
                              width="100%"
                              height="0.45rem"
                              backgroundColor="#454e56"
                              marginLeft="1rem"
                              position="relative">
                              <Typography
                                 variant="span"
                                 position="absolute"
                                 top={0}
                                 left={0}
                                 height="100%"
                                 backgroundColor="#27ae60"
                                 transition="all 0.4s ease-in-out"
                                 width={`${Val.width}`}></Typography>
                           </Box>
                        </Box>
                     </Box>
                  );
               })}
            </Box>
         </Box>
      </Container>
   );
};

export default About;
