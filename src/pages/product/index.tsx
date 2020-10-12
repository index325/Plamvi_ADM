import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Box, CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Button, ProductList, Paper } from "@Components/UI";

import { IState } from "_redux";
import { IAuthState } from "_redux/modules/auth/types";
import api from "../../service";
import { IProduct } from "interfaces";

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
  main: {
    paddingBottom: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function ProductsPage() {
  const classes = useStyles();
  const [products, setProducts] = useState<IProduct[]>([{}] as IProduct[]);
  const [loading, setLoading] = useState(true);

  const { token } = useSelector<IState, IAuthState>((state) => state.auth);

  useEffect(() => {
    async function getProducts() {
      if (token) {
        const response = await api.get<IProduct[]>(
          `/customers/list_my_products`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProducts(response.data);
        setLoading(false);
      }
    }

    getProducts();
  }, [token]);

  const history = useHistory();

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ textAlign: "center" }}
        className={classes.main}
      >
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Grid style={{ textAlign: "right" }}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              label="Cadastrar novo"
              onClick={() => history.push("/products/create")}
            />
          </Grid>

          <Paper>
            <Box p={3}>
              {!loading ? (
                products.map((product, index) => (
                  <Box display="flex" key={index}>
                    <ProductList data={product} />
                  </Box>
                ))
              ) : (
                <Backdrop className={classes.backdrop} open={loading}>
                  <CircularProgress color="inherit" />
                </Backdrop>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
