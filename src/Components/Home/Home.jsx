import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container, height } from "@mui/system";
import React from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "../Home/Home.css";
const Home = () => {
  return (
    <div>
      <header className="noneHome">
        <Box>
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              className="homePageContainer"
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <CardMedia
                  component="img"
                  sx={{ width: "30%", mt: "30px", marginRight: "15px" }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/header-image.png"
                  alt="JAWS"
                />
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    component="h2"
                    align="center"
                    variant="h4 "
                    // color="text.danger"
                    gutterBottom
                    mb={5}
                    sx={{ color: "#e6e6e6", fontWeight: "100" }}
                  >
                    L o r e m i p s u m d o l o r
                  </Typography>

                  <Typography
                    component="h1"
                    align="left"
                    variant="h4 "
                    // color="text.danger"
                    // gutterBottom
                    // mr={5}
                    sx={{ color: "white", fontSize: "5rem", fontWeight: "900" }}
                  >
                    COMIXCON <br />
                    <p
                      style={{
                        fontSize: "6rem",
                        color: "aquamarine",
                        marginLeft: "35px",
                      }}
                    >
                      2022
                    </p>
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h4 "
                    // color="text.danger"
                    // gutterBottom
                    mb={5}
                    sx={{ color: "#e6e6e6", fontWeight: "100" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </Typography>

                  <Box pb={5}>
                    <Button
                      sx={{
                        color: "white",
                        background: "#604575;",
                        marginRight: "50px",
                        width: "170px",
                        height: "50px",
                      }}
                    >
                      FULLSCHEDULE
                    </Button>
                    <Button
                      sx={{
                        color: "white",
                        background: "#29c7ab",
                        width: "170px",
                        height: "50px",
                      }}
                    >
                      BUY TICKETS
                    </Button>
                  </Box>
                  <CountdownTimer countdownTimestampMs={1659983662000} />
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Box>
      </header>
      <section>
        <Box>
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    component="h2"
                    align="center"
                    variant="h4 "
                    // color="text.danger"
                    gutterBottom
                    mt={5}
                    sx={{
                      color: "#bfbfbf",
                      fontWeight: "100",
                      fontSize: "20px",
                    }}
                  >
                    about comixcon
                  </Typography>
                  <Typography
                    // component="h1"
                    align="center"
                    // variant="h4 "
                    // color="text.danger"
                    // gutterBottom
                    // mr={5}
                    sx={{
                      color: "black",
                      fontSize: "3rem",
                      fontWeight: "100",
                    }}
                  >
                    Comix
                    <span style={{ color: "#bfbfbf" }}>Con </span>
                    <span style={{ color: "#29c7ab" }}> 2022</span>
                    <p style={{ color: "#29c7ab" }}>_____</p>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <div style={{ display: "flex" }} className="cardGrid">
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item01.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Incredible Venue
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item02.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Amazing Guest Stars
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item03.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Exclusive Movie Trailers
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item04.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Contest And Prizes
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>

              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item05.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Big Comic Book Deals
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item06.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  New 3D Screening
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item07.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Friendly Event Staff
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
              <Box sx={{ margin: "20px", width: "300px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "35%",
                    // marginTop: "15px",
                    margin: "0 auto",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/about-item08.png"
                  alt="JAWS"
                />
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={1}
                  mt={3}
                  sx={{ color: "balck", fontWeight: "700" }}
                >
                  Gaming Stations
                </Typography>
                <Typography
                  component="h4"
                  variant="h5 "
                  align="center"
                  // color="text.danger"
                  // gutterBottom
                  mb={5}
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quis eveniet modi. Eum dignissimos, tempora possimus
                  quasi quae rem minima perferendis ducimus velit, molestiae
                  ipsum nulla laborum numquam, ratione ipsa.
                </Typography>
              </Box>
            </div>
          </Paper>
        </Box>
      </section>
    </div>
  );
};

export default Home;
