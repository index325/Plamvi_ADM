import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Button, ProductList, Paper } from "@Components/UI";

import Texture from "../../assets/img/wave_texture.svg"; // Import using relative path

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
  texture: {
    backgroundImage: `url(${Texture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
  },
  logo: {
    width: "80%",
  },
}));

export default function ProductsPage() {
  const classes = useStyles();
  const [apiData, setApiData] = useState([{}]);
  const [loading] = useState("");

  useEffect(() => {
    async function getProducts() {
      // let data = await getAllProducts();
      // setApiData(data);
      const listOfProducts = () => {
        const listItems = apiData.map((data, index) => (
          <Box key={index}>
            {/* {data.price} */}
            {/* <ProductList /> */}
          </Box>
        ));
        return <Box my={1}>{listItems}</Box>;
      };

      listOfProducts();
    }
    getProducts();
  }, [loading, apiData]);

  const history = useHistory();

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Grid style={{ textAlign: "right" }}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              label="Cadastrar novo"
              onClick={() => history.push("/app/products/create")}
            />
          </Grid>

          <Paper>
            <Box p={3}>
              {apiData.map((data, index) => (
                <Box display="flex" key={index}>
                  {/* <ProductList data={data} /> */}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
