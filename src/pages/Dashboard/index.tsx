import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, SimpleChart } from "@Components/UI";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="center"
        style={{ height: "100%", textAlign: "center" }}
      >
        <Grid item xs={10} sm={10} md={10} lg={5}>
          <Box m={1}>
            <Paper className={classes.paper}>
              <SimpleChart />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={5}>
          <Box m={1}>
            <Paper className={classes.paper}>
              <SimpleChart />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={5}>
          <Box m={1}>
            <Paper className={classes.paper}>
              <SimpleChart />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={5}>
          <Box m={1}>
            <Paper className={classes.paper}>
              <SimpleChart />
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography variant="h2" className={classes.text}>
            Olá!
          </Typography>
          {/* <Paper className={classes.paper}> */}
          <Typography variant="body1">Bem-vindo</Typography>
          {/* </Paper> */}
          <Typography variant="body1" className={classes.text} color="primary">
            Alo
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
