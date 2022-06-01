import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from '@mui/icons-material/Email';
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box
      px={{ xs: 3, sm: 2 }}
      py={{ xs: 1, sm: 1 }}
      pb={{ sm: 1 }}
      md={4}
      bgcolor="#EEEFFB"
      color="rgb(15 14 15)"
    >
      <Container maxWidth="lg" height="24rem">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} md={2} sx={{ mt: '0.6rem', my: '0.5rem' }}>
            <Box
            href='/'
              sx={{
              
                fontWeight: "bold",
                fontSize: "1.1rem",
                fontFamily: "monospace",
              }}
            >
              Subscribe to newsletter
            </Box>



            <Box my={{ xs: 1, sm: 2 }}>
              <TextField id="filled-basic" label="E-mail" variant="filled" />
            </Box>

            <Box my={{ xs: 1, sm: 3 }}>
              <Button variant="contained">Send</Button>
            </Box>
            
            
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
               href='/'
                underline="hover"
                sx={{ fontSize: '0.9rem', fontFamily: "monospace"  }}
                md={4}
                color='red'
              >
                  By clicking on the button, I agree to the processing and storage of my
                personal data
              </Link>
            </Box>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <EmailIcon />
            <YouTubeIcon />
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ mt: '0.6rem' }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'monospace',
              }}
            >
              Catagories
            </Box>
            <Box my={{ xs: 2, sm: 1 }} md={4}>
              <Link
                href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', fontFamily: "monospace"  }}
              >
               ARTICLES AND COLLECTIONS
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', fontFamily: "monospace"  }}
              >
                THE AUTHORS
              </Link>
              </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', fontFamily: "monospace"  }}
              >
               NEW AUTHORS
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
             href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', fontFamily: "monospace"  }}
              >
                     SERIES
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', fontFamily: "monospace"  }}
              >
                ARCHIVE
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                href='/'
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' ,fontFamily: "monospace" }}
              ></Link>
            </Box>
          </Grid>
          <Grid item xs={4} sm={3} sx={{ mt: '0.6rem' }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'monospace',
              }}
            >
             About Us
            </Box>
            <Box my={{ xs: 1, sm: 1 }}>
              <Link
               href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', display: 'flex', fontFamily: "monospace"  }}
              >
               Contacts
              </Link>
              </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
               href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', display: 'flex', fontFamily: "monospace"  }}
              >
                WHERE TO BUY BOOKS
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                href='/'
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', display: 'flex', fontFamily: "monospace"  }}
              >
                CERTIFICATION
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
            <Button
                href="/moshennik"
                className="btn"
                variant="secondary"
                sx={{ backgroundColor: "red", color: "white", fontFamily: "monospace"  }}
              >
                <DoDisturbAltIcon />
                Beware Fraudsters!
              </Button>
            </Box>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ mt: '0.6rem', fontFamily: "monospace"  }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'monospace',
              }}
            >
               Social network
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
            <Link
                href="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: "0.9rem", fontFamily: "monospace" }}
              >
                <TelegramIcon /> comics for kids
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
            <Link
                href="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: "0.9rem", fontFamily: "monospace" }}
              >
                <YouTubeIcon /> Comics
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
            <Link
                href="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: "0.8rem", fontFamily: "monospace" }}
              >
                <TelegramIcon /> ABC. COMICS. MANGA. FANTASY
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
            <Link
                href="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: "0.8rem", fontFamily: "monospace" }}
              >
                <YouTubeIcon />You.tube.Comics
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              ></Link>
            </Box>
          </Grid>
        </Grid>
        <Box
          textAlign="center"
          color="text.secondary"
          pt={{ xs: 1, sm: 6 }}
          pb={{ xs: 1, sm: 2 }}
        >
          &copy;  © 2022 – 2022 ООО «Makers-Bootcamp»
        </Box>
      
      </Container>
    </Box>
  );
};

export default Footer;