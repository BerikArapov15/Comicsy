import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
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
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={3}
                  >
                    Attention scammers!
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: "auto", verticalAlign: "middle" }}
                    >
                      Dear readers! "Publishing Group "Azbuka-Atticus"
                      it became known that cases of using our
                      trademarks "Makhaon", "Azbuka" for fraudulent purposes,
                      including job offers
                      publishing house subject to preliminary translation
                      funds.We post information about vacancies only on
                      resources that are attentive to the rule of law
                      ads(hh.ru, Superjob и подобные) and NEVER
                      We ask applicants to transfer any money to us - this is
                      illegal. Publisher employees do not contact
                      applicants through messengers VK, Facebook, Whatsapp,
                      Telegram and never write in private messages. In our
                      There are no vacancies in the publishing house Typewriter. If you
                      come across a similar ad, please pay attention
                      to email address: official email domains
                      publishing group - @atticus-group.ru and @azbooka.spb.ru.
                      These domains are present in all emails from employees
                      publishing houses. Please pay attention!
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80%", height: "80%" }}
                    image="https://api.azbooka.ru/upload/iblock/a6b/a6b252dcf329e0acfe46f559f0e92a36.jpg"
                    alt="Сomic"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>
      </main>
    </ThemeProvider>
  );
}
