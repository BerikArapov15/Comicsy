import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Typography
        sx={{ backgroundColor: "whitesmoke" }}
        variant="h3"
        component="h4"
        // align="center"s
        p={2}
        pl={10}
        pt={3}
      >
        Get in touch
      </Typography>
      <Box
        noValidate
        autoComplete="off"
        sx={{ width: "50vw", margin: "10vh auto" }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{
            margin: "auto",
            marginTop: "10px",
            verticalAlign: "middle",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias
          blanditiis esse vero tenetur
        </Typography>

        <TextField
          sx={{ width: "49%", marginRight: "2%" }}
          label="Name"
          margin="dense"
          color="primary"
        />
        <TextField sx={{ width: "49%" }} label="Email" margin="dense" />
        <TextField sx={{ width: "100%" }} label="Subject" margin="dense" />
        <TextField
          sx={{ width: "100%" }}
          label="Description"
          margin="dense"
          multiline
          rows="4"
        />
        <Button
          sx={{ borderRadius: "20px", marginTop: "2%" }}
          variant="contained"
          size="large"
        >
          Get A Query
        </Button>
      </Box>
    </div>
  );
};

export default ContactUs;
