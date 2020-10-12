import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper } from "@Components/UI";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { useHistory } from "react-router-dom";
import api from "../../service";
import { alertRequest } from "../../_redux/modules/alerts/actions";
import { IProduct } from "interfaces";
import { useDispatch, useSelector } from "react-redux";
import { DropzoneArea } from "material-ui-dropzone";
import { IState } from "../../_redux";
import { IAuthState } from "../../_redux/modules/auth/types";

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
  dropzone: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function ProductCreatePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token } = useSelector<IState, IAuthState>((state) => state.auth);

  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState<File>({} as File);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("short_description", shortDescription);
    formData.append("image", file);
    formData.append("price", String(price));
    formData.append("sku", sku);

    api
      .post<IProduct>("products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setLoading(false);
        dispatch(
          alertRequest({
            message: "Produto cadastrado com sucesso",
            isDialog: true,
            messageType: "success",
          })
        );

        history.push("/products");
      })
      .catch((err) => {
        dispatch(
          alertRequest({
            message: err.response.data.message,
            isDialog: true,
            messageType: "error",
          })
        );
      });
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
              onClick={() => history.push("/products")}
            />
          </Grid>
          <Box mb={1}>
            <Paper>
              <Box textAlign="center" p={3}>
                <Typography color="primary" variant="h4">
                  <span>Cadastro de produtos</span>
                </Typography>
              </Box>
              <form
                className={classes.form}
                onSubmit={(event: any) => handleSubmit(event)}
              >
                <TextField
                  onChange={(event: any) => {
                    setName(event.target.value);
                  }}
                  value={name}
                  className={classes.input}
                  name="name"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Nome do produto"
                  required
                />
                <TextField
                  onChange={(event: any) => {
                    setDescription(event.target.value);
                  }}
                  value={description}
                  className={classes.input}
                  name="description"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Descrição do produto"
                  required
                />
                <TextField
                  onChange={(event: any) => {
                    setShortDescription(event.target.value);
                  }}
                  value={shortDescription}
                  className={classes.input}
                  name="shortDescription"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Descrição curta (é que a vai aparecer no aplicativo)"
                  required
                />
                <TextField
                  onChange={(event: any) => {
                    setSku(event.target.value);
                  }}
                  value={sku}
                  className={classes.input}
                  name="sku"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="SKU (Identificador interno)"
                  required
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
                  required
                  onChange={(
                    e: React.FormEvent<HTMLInputElement>,
                    value: React.SetStateAction<number>
                  ) => {
                    setPrice(value);
                  }}
                />
                <DropzoneArea
                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  maxFileSize={5000000}
                  previewText="Imagem selecionada:"
                  dropzoneText="Clique aqui ou arraste uma imagem para este produto."
                  showPreviewsInDropzone={false}
                  showPreviews={true}
                  dropzoneClass={classes.dropzone}
                  getFileAddedMessage={(filename) => {
                    return `O arquivo ${filename} foi adicionado com sucesso!`;
                  }}
                  getDropRejectMessage={(rejectedFile: File) => {
                    return `O arquivo ${rejectedFile.name} foi rejeitado, por gentileza, envie apenas imagens`;
                  }}
                  onDrop={(file: File[]) => {
                    setFile(file[0]);
                  }}
                  getFileLimitExceedMessage={() => {
                    return `Você pode adicionar apenas uma imagem ao produto.`;
                  }}
                  filesLimit={1}
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
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
}
