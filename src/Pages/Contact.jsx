import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import {
  LocationOn,
  Mail,
  School,
  Phone,
  Language,
  GitHub,
  YouTube,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
const Contact = () => {
  const data = [
    {
      icon: <LocationOn />,
      name: "Location:",
      description: "Karwar,Karnataka, India.",
    },
    {
      icon: <Mail />,
      name: "Email:",
      description: "divyamarathi152@gmail.com",
    },
    {
      icon: <School />,
      name: "Education:",
      description: "Shivaji College,Baad,Karwar",
    },
    {
      icon: <Phone />,
      name: "Mobile No.:",
      description: "9663375712",
    },
    {
      icon: <Language />,
      name: "Languages:",
      description: "English, Hindi, Marathi, Konkani",
    },
  ];
  return (
    <Container width="100%" textAlign="center">
      <Box
        display="grid"
        gridTemplateColumns="max-content max-content"
        width="80%"
        padding={2}
        marginLeft={2}
        marginRight={2}
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography
          variant="h2"
          color="#ffffff"
          padding={1}
          textTransform={"uppercase"}
        >
          Contact
        </Typography>
        <Typography
          variant="h2"
          color="#27AE60"
          padding={1}
          textTransform={"uppercase"}
        >
          Me
        </Typography>
      </Box>
      <Box width="80%" padding={1} marginRight={20}>
        <Typography
          variant="h4"
          color="#ffffff"
          padding={1}
          fontSize={"1.5rem"}
          textAlign="center"
          textTransform={"uppercase"}
        >
          Contact Me Here
        </Typography>
        <Box
          width="80%"
          marginLeft="20%"
          marginRight={20}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            "@media (max-width: 500px)": { marginLeft: "3%" },
          }}
        >
          {data.map((Val) => {
            return (
              <Box
                display="grid"
                gridTemplateColumns={"20% 50%"}
                columnGap={10}
                paddingBottom={2}
                
              >
                <Box display="grid" gridTemplateColumns="40px 1fr">
                  {Val.icon}
                  <Typography variant="span">{Val.name}</Typography>
                </Box>
                <Typography
                  variant="p"
                  textAlign="right"
                  padding="0 !important"
                >
                  {Val.description}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          marginTop={3}
          marginLeft="20%"
          sx={{
            "@media (max-width: 500px)": { marginLeft: "3%" },
          }}
        >
          <Link
            display="inline-block"
            padding={1}
            marginRight={2}
            borderRadius={50}
            sx={{
              display: {
                backgroundColor: "#2a2e35",
              },
              ":hover": {
                backgroundColor: "#27AE60",
              },
            }}
            href="https://github.com/divya-marathi"
          >
            <GitHub
              sx={{
                display: {
                  fontSize: "30px",
                  color: "#27AE60",
                },
                ":hover": { color: "#2a2e35" },
              }}
            />
          </Link>
          <Link
            display="inline-block"
            padding={1}
            marginRight={2}
            borderRadius={50}
            sx={{
              display: {
                backgroundColor: "#2a2e35",
              },
              ":hover": {
                backgroundColor: "#27AE60",
              },
            }}
            href="https://www.linkedin.com/in/divya-marathi-3352a3246/"
          >
            <LinkedIn
              sx={{
                display: {
                  fontSize: "30px",
                  color: "#27AE60",
                },
                ":hover": { color: "#2a2e35" },
              }}
            />
          </Link>
          <Link
            display="inline-block"
            padding={1}
            borderRadius={50}
            marginRight={2}
            sx={{
              display: {
                backgroundColor: "#2a2e35",
              },
              ":hover": {
                backgroundColor: "#27AE60",
              },
            }}
            href="https://www.twitter.com"
          >
            <Twitter
              sx={{
                display: {
                  fontSize: "30px",
                  color: "#27AE60",
                },
                ":hover": { color: "#2a2e35" },
              }}
            />
          </Link>
          <Link
            display="inline-block"
            padding={1}
            marginRight={2}
            borderRadius={50}
            sx={{
              display: {
                backgroundColor: "#2a2e35",
              },
              ":hover": {
                backgroundColor: "#27AE60",
              },
            }}
            href="https://www.youtube.com"
          >
            <YouTube
              sx={{
                display: {
                  fontSize: "30px",
                  color: "#27AE60",
                },
                ":hover": { color: "#2a2e35" },
              }}
            />
          </Link>
        </Box>
      </Box>
      <br />
    </Container>
  );
};

export default Contact;
