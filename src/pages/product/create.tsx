import React, { useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper } from "@Components/UI";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  input: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
}));

export default function ProductCreatePage() {
  const classes = useStyles();

  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // createProduct(price, description, sku, name);
  };

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
              textAlign="right"
              variant="contained"
              className={classes.button}
              color="primary"
              label="Voltar"
              onClick={() => history.push("/app/products")}
            />
          </Grid>
          <Box mb={1}>
            <Paper>
              <Box textAlign="center" p={3}>
                <Typography color="primary" variant="h4">
                  <span>Cadastro de produtos</span>
                </Typography>
              </Box>
              <form className={classes.form} onSubmit={() => handleSubmit}>
                <TextField
                  onChange={(
                    e: React.FormEvent<HTMLInputElement>,
                    value: React.SetStateAction<string>
                  ) => {
                    setName(value);
                  }}
                  value={name}
                  className={classes.input}
                  name="username"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Nome do produto"
                />
                <TextField
                  onChange={(
                    e: React.FormEvent<HTMLInputElement>,
                    value: React.SetStateAction<string>
                  ) => {
                    setDescription(value);
                  }}
                  value={description}
                  className={classes.input}
                  name="username"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Descrição do produto"
                />
                <TextField
                  onChange={(
                    e: React.FormEvent<HTMLInputElement>,
                    value: React.SetStateAction<string>
                  ) => {
                    setSku(value);
                  }}
                  value={sku}
                  className={classes.input}
                  name="username"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="SKU (Identificador interno)"
                />
                <CurrencyTextField
                  label="Preço"
                  variant="standard"
                  value={price}
                  fullWidth
                  currencySymbol="R$"
                  decimalCharacter=","
                  digitGroupSeparator="."
                  outputFormat="string"
                  onChange={(
                    e: React.FormEvent<HTMLInputElement>,
                    value: React.SetStateAction<number>
                  ) => setPrice(value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  label="CADASTRAR"
                />
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
