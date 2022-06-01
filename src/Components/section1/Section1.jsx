import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "../section1/Section.css";
const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

const Section1 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <section>
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
          What's news
        </Typography>
        <Typography
          // component="h1"
          align="center"
          // variant="h4 "
          // color="text.danger"
          // gutterBottom
          // mr={5}
          sx={{ color: "black", fontSize: "3rem", fontWeight: "100" }}
        >
          Comix
          <span style={{ color: "#bfbfbf" }}>Con </span>
          <span style={{ color: "#29c7ab" }}> Highlights</span>
          <p style={{ color: "#29c7ab" }}>_____</p>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            // margin: "150px",
            marginTop: "55px",
            marginBottom: "55px",
          }}
        >
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  Special Event Busses
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item02.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  Best Cosplay Contest
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item03.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  Incredible Hotel Deals
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item04.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  New Convention Venue
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>

        <Box>
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              className="sectionPage"
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container sx={{ marginTop: "20%" }}>
                {/* <MobileStepper
                  variant="text"
                  // steps={maxSteps}
                  position="static"
                  // activeStep={activeStep}
                  sx={{ background: "none" }}
                  backButton={
                  }
                /> */}
                <Button
                  size="small"
                  onClick={handleBack}
                  sx={{
                    color: "white",
                    background: "#29c7ab",
                    height: "35px",
                    borderRadius: "50px",
                    marginTop: "100px",
                    marginLeft: "60px",
                    padding: "20px",
                    width: "35px",
                  }}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
                <Grid item sm={12} md={5} sx={{ margin: " 0 auto" }}>
                  <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
                    <Typography>
                      <img
                        style={{
                          // backgroundColor: "black",
                          marginTop: "50px",
                          // background: "none",
                          marginLeft: "42%",
                        }}
                        src="https://www.odindesignthemes.com/theBebop/comic/images/news-tweet.png"
                        alt=""
                      />
                    </Typography>

                    <Box
                      sx={{
                        height: 255,
                        maxWidth: 400,
                        width: "85%",
                        p: 2,
                        marginTop: "50px",
                        textAlign: "center",
                        marginLeft: "12%",
                        color: "white",
                      }}
                      align="center"
                    >
                      {steps[activeStep].description}
                    </Box>
                  </Box>
                </Grid>
                {/* <MobileStepper
                  variant="text"
                  // steps={maxSteps}
                  position="static"
                  // activeStep={activeStep}
                  sx={{ background: "none" }}
                  nextButton={
                  }
                /> */}
                <Button
                  size="small"
                  onClick={handleNext}
                  sx={{
                    color: "white",
                    background: "#29c7ab",
                    height: "35px",
                    borderRadius: "50px",
                    marginRight: "60px",
                    marginTop: "100px",
                    padding: "20px",
                    width: "35px",
                  }}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              </Grid>
            </Container>
          </Paper>
        </Box>
      </section>
    </div>
  );
};

export default Section1;
