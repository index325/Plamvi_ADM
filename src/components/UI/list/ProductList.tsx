import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Box, ButtonBase } from "@material-ui/core";
import { Button } from "@Components/UI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    // maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  // img: {
  //   margin: "auto",
  //   display: "block",
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  // },
  button: {
    width: "100%",
    height: "80%",
  },
}));

interface IProps{
  data: {
    description: string
    price: number
  }
}

export default function ProductList(props: IProps) {
  console.log(props);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mb={2} display="flex" alignItems="center">
        <Grid item lg={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    // className={classes.img}
                    alt="complex"
                    src="../../../assets/img/logo.png"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {props.data.description}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    R${props.data.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Box m={1}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              label="Editar"
            />
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box m={1}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              label="Excluir"
            />
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
