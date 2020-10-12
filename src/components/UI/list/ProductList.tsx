import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Box, ButtonBase } from "@material-ui/core";
import { Button } from "@Components/UI";
import { IProduct } from "interfaces";

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
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    width: "100%",
    height: "80%",
  },
}));

interface IProps {
  data: IProduct;
}

export default function ProductList({ data }: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mb={2} display="flex" alignItems="center">
        <Grid item lg={12} md={12} xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item justify="center">
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={data.image_url}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {data.description}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid container direction="row">
                    <Grid lg={6} xs={12} item>
                      <Box m={1}>
                        <Button
                          type="submit"
                          variant="contained"
                          className={classes.button}
                          color="primary"
                          label="Editar"
                          fullWidth
                        />
                      </Box>
                    </Grid>
                    <Grid lg={6} xs={12} item>
                      <Box m={1}>
                        <Button
                          type="submit"
                          variant="contained"
                          className={classes.button}
                          color="primary"
                          label="Excluir"
                          fullWidth
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} alignItems="center" justify="center">
                  <Typography variant="subtitle1">R${data.price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </div>
  );
}
