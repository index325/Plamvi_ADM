import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { PassField, TextField, Button } from "@Components/UI";
import { Paper } from "@material-ui/core";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { authRequest } from "../../_redux/modules/auth/actions";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
  input: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  logo: {
    width: "80%",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(authRequest({ email: username, password }));
  };

  return (
    <React.Fragment>
      <Box>
        <Box borderRadius={16}>
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            style={{ height: "100vh", textAlign: "center" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className="MuiGrid-spacing-xs-6"
            >
              <Paper>
                <Box textAlign="center" p={3}>
                  <Logo className={classes.logo} />
                  <Typography
                    className={classes.header}
                    color="primary"
                    variant="h4"
                  >
                    <span>Área administrativa</span>
                  </Typography>
                </Box>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    onChange={(event: any) => {
                      setUsername(event.target.value);
                    }}
                    className={classes.input}
                    name="username"
                    color="primary"
                    fullWidth
                    variant="standard"
                    label="USUÁRIO"
                  />
                  <PassField
                    onChange={(event: any) => {
                      setPassword(event.target.value);
                    }}
                    className={classes.input}
                    label="SENHA"
                    name="password"
                  />
                  <Typography>
                    <Link href="#" onClick={() => {}}>
                      Esqueci a senha
                    </Link>
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    label="LOGIN"
                  />
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
