import React from "react";
import {
   Box,
   Container,
   Link,
   Typography,
} from "@mui/material";
import voice_recorder from "../Images/voice_recorder.png";
import todo from "../Images/todo.png";
import teams_pro from "../Images/teams_pro.png";
import coma_separator from "../Images/coma_separator.png";

import { GitHub } from "@mui/icons-material";
const Project = () => {
   const data = [
      {
         link: "https://github.com/divya-marathi/TeamsPro_",
         img: teams_pro,
      },
      {
         link: "https://github.com/divya-marathi/docket",
         img: todo,
      },
      {
         link: "https://divya-marathi.github.io/voice-recorder/",
         img: voice_recorder,
      },
      {
         link: "https://github.com/divya-marathi/comma-separator",
         img: coma_separator,
      },
      {
         link: "https://github.com/divya-marathi/voice-recorder",
         img: voice_recorder,
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
            <Typography
               variant="h2"
               color="#ffffff"
               padding={1}
               textTransform={"uppercase"}>
               My
            </Typography>
            <Typography
               variant="h2"
               color="#27AE60"
               padding={1}
               textTransform={"uppercase"}>
               Projects
            </Typography>
         </Box>
         <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridGap="2rem"
            marginTop="3rem"
            sx={{
              '@media (max-width: 700px)':{display:"inline-block"}
            }}>
            {data.map((Val) => {
               return (
                  <Box
                     position="relative"
                     borderRadius="15px">
                     <Box
                        component="img"
                        sx={{
                          display:{
                           border: "2px solid white",
                           height: "95%",
                           width: "90%",
                           objectFit: "cover",
                           borderRadius: "15px",
                          '@media (max-width: 500px)':{ height: "95%", width: "70%"}}
                        }}
                        alt="The house from the offer."
                        src={Val.img}
                     />
                     <Box
                        width="5%"
                        height="5%"
                        backgroundColor="#27AE60"
                        position="absolute"
                        left="7%"
                        top="8%"
                        borderRadius="50%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column">
                        <Link
                           href={Val.link}
                           borderRadius={50}
                           padding={2}
                           marginTop={5}
                           sx={{
                              display: {
                                 backgroundColor: "#2a2e35",
                              },
                              ":hover": {
                                 backgroundColor: "#27AE60",
                              },
                           }}>
                           <GitHub
                              sx={{
                                 display: {
                                    fontSize: "30px",
                                    color: "#27AE60",
                                 },
                                 ":hover": {
                                    color: "#2a2e35",
                                 },
                              }}
                           /> 
                        </Link>
                     </Box>
                  </Box>
               );
            })}
         </Box>
      </Container>
   );
};

export default Project;
